import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const stats = await prisma.stat.findMany({
      select: {
        id: true,
        number: true,
        label: true,
        suffix: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return new Response(JSON.stringify({ success: true, data: stats }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "حدث خطأ أثناء جلب الإحصائيات",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
