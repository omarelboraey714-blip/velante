import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Fetch related projects dynamically (e.g., from the same category)
    const relatedProjects = await prisma.project.findMany({
      where: {
        category: project.category,
        id: {
          not: project.id,
        },
      },
      take: 2,
      select: {
        id: true,
        title: true,
      },
    });

    // The component expects a 'slug' property, so we map 'id' to 'slug'.
    const projectWithRelated = {
      ...project,
      relatedProjects: relatedProjects.map((p) => ({ ...p, slug: p.id })),
      // The gallery data is stored in the 'images' field. The component expects 'gallery'.
      gallery: project.images.map((src, index) => ({
        id: index + 1,
        src: src,
        alt: `${project.title} - Image ${index + 1}`,
        category: project.category
      }))
    };

    return NextResponse.json(projectWithRelated, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch project details" },
      { status: 500 }
    );
  }
}
