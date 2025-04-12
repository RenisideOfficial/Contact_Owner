"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn, ContactFormData, ContactFormSchema } from "@/lib/utils";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
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
      console.error(error);
      toast.error("message sent unsuccessfully!");
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-24 mx-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Name*</Label>
          <Input
            type="text"
            id="name"
            {...register("name")}
            className={cn(
              "w-full rounded-[.8rem]",
              errors.name && "border-red-500"
            )}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            className={cn(
              "w-full rounded-[.8rem]",
              errors.email && "border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message">Message*</Label>
          <Textarea
            id="message"
            {...register("message")}
            className={cn(
              "w-full rounded-[.8rem]",
              errors.message && "border-red-500"
            )}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-darkest rounded-2xl text-white mt-4 w-full hover:bg-darker">
          {loading ? <ClockLoader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
