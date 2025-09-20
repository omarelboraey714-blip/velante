import nodemailer from "nodemailer";
import { z } from "zod";

// Zod schema for validation
const emailSchema = z.object({
  type: z.enum(["newsletter", "confirmation"], {
    message: "نوع الطلب غير صالح",
  }),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  name: z.string().optional(), // Name is optional for newsletter
});

// Function to get email content based on type
const getEmailContent = (type, email, name) => {
  if (type === "newsletter") {
    return {
      subject: "مرحبا! اشتراكك في نشرتنا البريدية تم بنجاح",
      html: `
        <div style="font-family: Cairo, sans-serif; direction: rtl; text-align: right; color: #333;">
          <h2>مرحبا ${email.split("@")[0]}!</h2>
          <p>شكراً لاشتراكك في نشرتنا البريدية. سنرسل لك أحدث العروض، النصائح، والتحديثات حول خدماتنا في التصميم، التطوير، والإعلانات.</p>
          <p>إذا كان لديك أي استفسارات، تواصل معنا في أي وقت.</p>
          <br>
          <p>مع خالص التحية،</p>
          <p>فريق فيلانتي</p>
          <a href="https://velante-one.vercel.app/" style="color: #007bff;">زور موقعنا</a>
        </div>
      `,
    };
  } else if (type === "confirmation") {
    return {
      subject: "تم استلام رسالتك بنجاح!",
      html: `
        <div style="font-family: Cairo, sans-serif; direction: rtl; text-align: right; color: #333;">
          <h2>عزيزي ${name || email.split("@")[0]}،</h2>
          <p>نشكرك على تواصلك معنا. لقد تلقينا رسالتك وسيتم الرد عليك خلال 24 ساعة من قبل أحد أعضاء فريقنا.</p>
          <p>إذا كان هناك أي تفاصيل إضافية، يمكنك الرد على هذا البريد.</p>
          <br>
          <p>مع خالص التحية،</p>
          <p>فريق فيلانتي</p>
          <a href="https://velante-one.vercel.app/contact" style="color: #007bff;">صفحة التواصل</a>
        </div>
      `,
    };
  }
};

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const { type, email, name } = emailSchema.parse(body);

    // Define transporter inside POST to ensure process.env is loaded
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const { subject, html } = getEmailContent(type, email, name);

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage =
      error instanceof z.ZodError
        ? error.errors.map((e) => e.message).join(", ")
        : error.message || "حدث خطأ أثناء إرسال البريد";

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
