// app/api/testimonials/route.js

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ نفس الخريطة المستخدمة في المكون
const serviceToCategoryMap = {
  branding: "branding",
  "web-development": "web-development",
  ads: "ads",
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";

  try {
    let whereClause = {};
    
    // ✅ فقط إذا كان الفلتر صالحًا، نضيف الشرط
    if (category !== "all" && serviceToCategoryMap[category]) {
      whereClause.category = category;
    }

    const testimonials = await prisma.testimonial.findMany({
      where: whereClause,
      include: {
        client: {
          select: {
            id: true,
            name: true,
            country: true,
            flag: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedData = testimonials.map((t) => ({
      id: t.id,
      rating: t.rating,
      text: t.text,
      project: t.project,
      name: t.client?.name || "غير معروف",
      country: t.client?.country || "غير معروف",
      flag: t.client?.flag || "🌍",
      avatar: t.client?.avatar || "/images/placeholder-avatar.png",
    }));

    return NextResponse.json(formattedData, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("❌ خطأ في API التقييمات:", error.message);
    return NextResponse.json({ error: "فشل تحميل التقييمات" }, { status: 500 });
  }
}
