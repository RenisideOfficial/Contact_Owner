import {clsx, ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export const ContactFormSchema = z.object({
  name: z.string().min(1, {message: "name is required!"}).max(100, {message: "name length exceeded"}),
  email: z.string().min(1, {message: "email is required!"}).max(1000, {message: "email length exceeded"}).email(),
  subject: z.string().min(1, {message: "subject is required!"}).max(100, {message: "subject length exceeded"}),
  message: z.string().min(1, {message: "message is required!"}).max(100, {message: "more than 100 characters!"}),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>