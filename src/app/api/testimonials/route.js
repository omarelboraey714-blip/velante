// app/api/testimonials/route.js

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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
    let query = supabase
      .from("testimonials")
      .select(
        `
        id,
        rating,
        text,
        project,
        created_at,
        client:clients (
          id,
          name,
          country,
          flag,
          avatar
        )
      `
      )
      .order("created_at", { ascending: false });

    // ✅ فقط إذا كان الفلتر صالحًا، نضيف الشرط
    if (category !== "all" && serviceToCategoryMap[category]) {
      query = query.eq("category", category); // ← هنا استخدمنا الحقل الصحيح!
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    const formattedData = data.map((t) => ({
      id: t.id,
      rating: t.rating,
      text: t.text,
      project: t.project,
      client: {
        name: t.client?.name || "غير معروف",
        country: t.client?.country || "غير معروف",
        flag: t.client?.flag || "🌍",
        avatar: t.client?.avatar || "/images/placeholder-avatar.png",
      },
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
