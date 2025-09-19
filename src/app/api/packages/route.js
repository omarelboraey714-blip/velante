import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// إضافة باقة جديدة (للاستخدام من لوحة التحكم)
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      category,
      title,
      price_min,
      price_max,
      currency,
      is_monthly,
      description,
      features,
      popular,
    } = body;

    // تحقق من البيانات الأساسية
    if (!category || !title) {
      return NextResponse.json(
        { error: "الرجاء إدخال الفئة والعنوان" },
        { status: 400 }
      );
    }

    // إدخال الباقة
    const { data, error } = await supabase
      .from("packages")
      .insert([
        {
          category,
          title,
          price_min,
          price_max,
          currency,
          is_monthly,
          description,
          features,
          popular,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: "تمت إضافة الباقة بنجاح!", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding package:", error);
    return NextResponse.json(
      { error: "فشل في إضافة الباقة، حاول مرة أخرى" },
      { status: error.message.includes("permission") ? 403 : 500 }
    );
  }
}

// جلب الباقات مع دعم الفلترة
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "all";

    let query = supabase
      .from("packages")
      .select(
        "id, category, title, price_min, price_max, currency, is_monthly, description, features, popular, created_at"
      )
      .order("created_at", { ascending: true });

    if (category !== "all") {
      query = query.eq("category", category);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(
      { count: data.length, data },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching packages:", error);
    return NextResponse.json(
      { error: "فشل في جلب الباقات" },
      { status: error.message.includes("permission") ? 403 : 500 }
    );
  }
}
