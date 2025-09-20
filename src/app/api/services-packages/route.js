import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    // جلب الخدمات
    const { data: services, error: servicesError } = await supabase
      .from("services")
      .select("title")
      .order("title", { ascending: true });

    if (servicesError) throw servicesError;

    // جلب الباقات
    const { data: packages, error: packagesError } = await supabase
      .from("packages")
      .select("title")
      .order("title", { ascending: true });

    if (packagesError) throw packagesError;

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
