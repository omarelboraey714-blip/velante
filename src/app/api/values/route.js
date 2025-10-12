import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const values = await prisma.value.findMany({
      select: {
        id: true,
        icon: true,
        title: true,
        description: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    return new Response(JSON.stringify({ success: true, data: values }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "حدث خطأ أثناء جلب القيم",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
