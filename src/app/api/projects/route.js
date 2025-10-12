import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag") || "all";

  try {
    let whereClause = {};
    
    if (tag !== "all") {
      whereClause.tag = tag;
    }

    const projects = await prisma.project.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        category: true,
        image: true,
        featured: true,
        tag: true,
        thumbnail: true,
        badge: true,
        type: true,
        liveUrl: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
