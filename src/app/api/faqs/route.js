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

    const faqs = await prisma.fAQ.findMany({
      where: whereClause,
      select: {
        id: true,
        question: true,
        answer: true,
        category: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(faqs, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
