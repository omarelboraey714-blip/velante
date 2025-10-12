import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
    const package = await prisma.package.create({
      data: {
        category,
        title,
        priceMin: price_min,
        priceMax: price_max,
        currency,
        isMonthly: is_monthly,
        description,
        features,
        popular,
      },
    });

    return NextResponse.json(
      { message: "تمت إضافة الباقة بنجاح!", data: package },
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

    let whereClause = {};
    
    if (category !== "all") {
      whereClause.category = category;
    }

    const packages = await prisma.package.findMany({
      where: whereClause,
      select: {
        id: true,
        category: true,
        title: true,
        priceMin: true,
        priceMax: true,
        currency: true,
        isMonthly: true,
        description: true,
        features: true,
        popular: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(
      { count: packages.length, data: packages },
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
