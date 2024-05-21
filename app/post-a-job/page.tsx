/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React from "react";
import { jobFormSchema } from "../../lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaArrowLeft } from "react-icons/fa";
import { Separator } from "../../components/ui/separator";

const PostJobPage = () => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  const onSubmit = (values: z.infer<typeof jobFormSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <div className="hover:text-primary inline-flex cursor-pointer items-center gap-2">
        <FaArrowLeft className="size-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your tpo perks and benefits
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default PostJobPage;
