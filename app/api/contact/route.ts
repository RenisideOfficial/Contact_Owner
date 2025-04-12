import { NextRequest, NextResponse } from "next/server";
import { type ContactFormData, ContactFormSchema } from "@/lib/utils";
import { transport, mailOptions } from "@/config/nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const validateData = ContactFormSchema.parse(body);

    await transport.sendMail({
      ...mailOptions,
      text: `
        New Contact Form Submission:

        Name: ${validateData.name}
        Email: ${validateData.email}
        Message: ${validateData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong>${validateData.name}</p>
        <p><strong>Email:</strong>${validateData.email}</p>
        <p><strong>Message</strong>${validateData.message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "An unknown error occured!",
      },
      { status: 500 }
    );
  }
}
