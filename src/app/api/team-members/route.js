import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      select: {
        id: true,
        name: true,
        position: true,
        description: true,
        image: true,
        social: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return new Response(JSON.stringify({ success: true, data: teamMembers }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "حدث خطأ أثناء جلب أعضاء الفريق",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
