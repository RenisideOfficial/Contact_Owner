import { NextRequest, NextResponse } from "next/server";
import { type ContactFormData, ContactFormSchema } from "@/lib/utils";
import { transport, mailOptions } from "@/config/nodemailer";

export async function POST(request: NextRequest) {
  try {
  } catch (error) {
    console.error(error);
  }
}
