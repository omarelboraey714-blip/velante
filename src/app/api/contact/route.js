import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Define Zod schema for validation (server-side)
const contactSchema = z.object({
  fullName: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phone: z.string().regex(/^\d{10,15}$/, "رقم الهاتف غير صحيح"),
  countryCode: z.string().default("+20"),
  service: z.string().min(1, "الخدمة مطلوبة"),
  budget: z.string().min(1, "الميزانية مطلوبة"),
  message: z.string().optional(),
});

// Supabase client (use env vars in production)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate with Zod
    const validatedData = contactSchema.parse(formData);

    // Insert into Supabase
    const { data, error } = await supabase.from("contacts").insert([
      {
        full_name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        country_code: validatedData.countryCode,
        service: validatedData.service,
        budget: validatedData.budget,
        message: validatedData.message,
      },
    ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle Zod errors or Supabase errors
    const errorMessage =
      error instanceof z.ZodError
        ? error.errors.map((e) => e.message).join(", ")
        : error.message || "حدث خطأ غير متوقع";

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
