import { prisma } from "@/lib/prisma";
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

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate with Zod
    const validatedData = contactSchema.parse(formData);

    // Insert into database using Prisma
    const contact = await prisma.contact.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        countryCode: validatedData.countryCode,
        service: validatedData.service,
        budget: validatedData.budget,
        message: validatedData.message,
      },
    });

    return new Response(JSON.stringify({ success: true, data: contact }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle Zod errors or Prisma errors
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

// GET method to retrieve contacts (for admin panel)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        countryCode: true,
        service: true,
        budget: true,
        message: true,
        createdAt: true,
      },
    });

    return new Response(JSON.stringify({ success: true, data: contacts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "حدث خطأ أثناء جلب جهات الاتصال",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
