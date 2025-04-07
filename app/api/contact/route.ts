// api endpoint
import { NextResponse } from "next/server";
import { transport, mailOption } from "@/config/nodemailer";
import { type ContactFormData, ContactFormSchema } from "@/lib/utils";

export async function POST(request: Response) {
    try {
        // the json must be of type ContactFormData then assigned to the body
        const body: ContactFormData = await request.json();
        const validateData = ContactFormSchema.parse(body);

        await transport.sendMail({
            ...mailOption,
            text: `
                New contact form submission:

                Name: ${validateData.name}
                Email: ${validateData.email}
                Subject: ${validateData.subject}
                Message: ${validateData.message}
            `,
            html: `
                <h3>New contact form submission</h3>

                <p><strong>Name:</strong>${validateData.name}</p>
                <p><strong>Email:</strong>${validateData.email}</p>
                <p><strong>Subject:</strong>${validateData.subject}</p>
                <p><strong>Message</strong>${validateData.message.replace(/\n/g, '<br>')}</p>
            `
        })

        return NextResponse.json(
            { success: true },
            { status: 200 },
        )
    } catch (error) {
        console.error("Not received");
        return NextResponse.json(
            {   success: false,
                message: error instanceof Error ? error.message : "Response failed!"
            },
            {
                status: 500
            }
        )
    }
}