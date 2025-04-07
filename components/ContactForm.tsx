"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, ContactFormData, ContactFormSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { sendContactForm } from "@/lib/api";

const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormSchema) });

  async function onSubmit(data: ContactFormData) {
    try {
      setIsLoading(true);
      await sendContactForm(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
      reset();
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="w-full lg:ml-[40%]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name*</Label>
            <Input
              type="text"
              id="name"
              {...register("name")}
              className={cn("w-full", errors.name && "border-red-500")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              className={cn("w-full", errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="subject">Subject*</Label>
            <Input
              type="text"
              id="subject"
              {...register("subject")}
              className={cn("w-full", errors.subject && "border-red-500")}
            />
            {errors.email && <p className="text-red-500 text-sm"></p>}
          </div>
          <div>
            <Label htmlFor="message">Message*</Label>
            <Textarea
              id="message"
              {...register("message")}
              className={cn("w-full", errors.message && "border-red-500")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? <ClipLoader className="text-2xl" /> : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
