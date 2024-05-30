/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React, { useEffect, useState } from "react";
import { jobFormSchema } from "../../../lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaArrowLeft } from "react-icons/fa";
import { Separator } from "../../../components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import FieldInput from "../../../components/organism/fieldInput/FieldInput";
import { Input } from "../../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { JOBTYPES } from "../../../constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import InputSkill from "../../../components/organism/fieldInput/input-skills/InputSkill";
import CKEditor from "../../../components/organism/CKEditor/CKEditor";
import InputBenefit from "../../../components/organism/InputBenefit/InputBenefit";
import { Button } from "../../../components/ui/button";

const PostJobPage = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  const onSubmit = (values: z.infer<typeof jobFormSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <>
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Type of Employment"
            subtitle="You can select muliple type of emplpyment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notify me about...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role"
          >
            <div className="flex w-[450px] flex-row items-center justify-between">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="$100" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Categories"
            subtitle="You can select multiple job cateogries"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Require Skills"
            subtitle="Add require sklills for the job"
          >
            <InputSkill form={form} label="Add Skills" name="requiredSkills" />
          </FieldInput>

          <FieldInput
            title="Job Description"
            subtitle="Job titles must be describe one postion"
          >
            <CKEditor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Responsibilties"
            subtitle="Job titles must be describe one position"
          >
            <CKEditor
              form={form}
              name="responsibility"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Who You Are"
            subtitle="Add your preferred candidates qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have skills and qualifications for ther role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHave"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Perks and Benefits"
            subtitle="Encourage more people to applu by sharing the attaractiv rewars and benefits you offer your employees"
          >
            <InputBenefit form={form} name="benefits" />
          </FieldInput>
          <div className="flex justify-end">
            <Button size={"lg"}>Do a Review</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default PostJobPage;
