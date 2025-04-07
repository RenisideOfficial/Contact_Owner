"use client";
import { cn, ContactFormData, ContactFormSchema } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { sendContactForm } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { ClipLoader } from "react-spinners";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      await sendContactForm(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending: ", error);
      toast.error("Message failed to send");
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full lg:ml-[50%] mt-12 lg:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
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

          <div className="mt-4">
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

          <div className="mt-4">
            <Label htmlFor="subject">Subject*</Label>
            <Input
              type="text"
              id="subject"
              {...register("subject")}
              className={cn("w-full", errors.subject && "border-red-500")}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div className="mt-4">
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
          <Button type="submit" disabled={loading}>
            {loading === true ? <ClipLoader size={30} /> : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
