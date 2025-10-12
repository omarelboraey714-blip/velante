import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // جلب الخدمات
    const services = await prisma.service.findMany({
      select: {
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    // جلب الباقات
    const packages = await prisma.package.findMany({
      select: {
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    // دمج الخدمات والباقات في قائمة واحدة
    const options = [
      ...services.map((item) => item.title),
      ...packages.map((item) => item.title),
    ].sort(); // ترتيب أبجدي

    return new Response(
      JSON.stringify({
        success: true,
        options,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "حدث خطأ أثناء جلب البيانات",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
