import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // التحقق من صيغة البريد
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "البريد الإلكتروني غير صحيح" },
        { status: 400 }
      );
    }

    // التحقق من تكرار البريد في newsletter_subscriptions
    const { data: existing } = await supabase
      .from("newsletter_subscriptions")
      .select("email")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "هذا البريد مسجل بالفعل" },
        { status: 409 }
      );
    }

    // إدخال البريد
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: "تم الاشتراك بنجاح!", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      {
        error: error.message.includes("duplicate")
          ? "هذا البريد مسجل بالفعل"
          : "فشل في الاشتراك، حاول مرة أخرى",
      },
      { status: error.message.includes("permission") ? 403 : 500 }
    );
  }
}

// (اختياري) جلب الاشتراكات للوحة التحكم
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .select("id, email, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscriptions" },
      { status: error.message.includes("permission") ? 403 : 500 }
    );
  }
}
