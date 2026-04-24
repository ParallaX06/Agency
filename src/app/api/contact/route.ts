import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = schema.parse(body);

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          success: true,
          message: "Received. Configure SMTP variables to enable email delivery.",
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: process.env.SMTP_TO ?? process.env.SMTP_USER,
      subject: `New Inquiry: ${payload.service}`,
      replyTo: payload.email,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.service}\n\nMessage:\n${payload.message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid payload.", issues: error.issues }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: "Failed to send inquiry." }, { status: 500 });
  }
}
