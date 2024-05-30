"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { overviewFormSchema } from "../../lib/form-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import FieldInput from "../organism/fieldInput/FieldInput";
import CustomUpload from "../organism/CustomUpload/CustomUpload";
import { Input } from "../ui/input";
import TitleForm from "../atoms/TitleForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { EMPLOYEE_OPTIONS, LOCATION_OPTION, optionType } from "../../constant";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import InputSkill from "../organism/fieldInput/input-skills/InputSkill";
import CKEditor from "../organism/CKEditor/CKEditor";

const OverviewForm = () => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });
  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val);
  };
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>
      <Separator className="mb-7" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput
            title="Company Logo"
            subtitle="This image will be shown publicly as company logo."
          >
            <CustomUpload form={form} name="iamge" />
          </FieldInput>

          <FieldInput
            title="Company Details"
            subtitle="Introduce your company core info quicly to users by fil up company details"
          >
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="Twitter"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="https://Muhammadramadhoni.my.id"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[450px]">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTION.map((item: optionType, i: number) => (
                          <SelectItem key={item.id + i} value={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid w-[450px] grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Employee" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map(
                            (item: optionType, i: number) => (
                              <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LOCATION_OPTION.map(
                            (item: optionType, i: number) => (
                              <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateFounded"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date Founded</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <InputSkill form={form} name="techStack" label="Add tech Stack" />
            </div>
          </FieldInput>

          <FieldInput
            title="About Company"
            subtitle="Brief description for ypur company, URLs are hyperlinked"
          >
            <CKEditor
              form={form}
              name="description"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <div className="flex justify-end">
            <Button size="lg">Save Change</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OverviewForm;
