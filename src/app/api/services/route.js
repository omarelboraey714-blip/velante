import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";

  try {
    let whereClause = {};
    
    if (category !== "all") {
      whereClause.category = category;
    }

    const services = await prisma.service.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        category: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(services, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ error: "فشل في جلب الخدمات" }, { status: 500 });
  }
}
