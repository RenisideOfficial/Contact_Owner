import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name is required" })
    .max(100, { message: "name length exceeded" }),
  email: z
    .string()
    .min(1, { message: "email is required" })
    .max(100, { message: "email length exceeded" })
    .email(),
  message: z
    .string()
    .min(10, { message: "message is required" })
    .max(1000, { message: "message length exceeded" }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
