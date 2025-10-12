import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    // التحقق من تكرار البريد
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "هذا البريد مسجل بالفعل" },
        { status: 409 }
      );
    }

    // إدخال البريد
    const subscription = await prisma.newsletterSubscription.create({
      data: { email },
    });

    return NextResponse.json(
      { message: "تم الاشتراك بنجاح!", data: subscription },
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
    const subscriptions = await prisma.newsletterSubscription.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(subscriptions, {
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
