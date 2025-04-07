import {clsx, ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export const ContactFormSchema = z.object({
  name: z.string().min(1, {message: "name is required!"}).max(100, {message: "name length exceeded!"}),
  email: z.string().min(1, {message: "email is required!"}).max(100, {message: "email length exceeded!"}),
  subject: z.string().min(1, {message: "subject is required!"}).max(30, {message: "subject length exceeded!"}),
  message: z.string().min(10, {message: "characters must exceed 10"}).max(100, {message: "message length exceeded!"}),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>