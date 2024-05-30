import { z } from "zod";
import { JOBTYPES } from "../constant";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary From is required" }),
  categoryId: z.string({ required_error: "You need to select category" }),
  requiredSkills: z
    .string({ required_error: "Skill is required" })
    .array()
    .nonempty({ message: "Required skill must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  responsibility: z
    .string({ required_error: "Responsibility is required" })
    .min(10, { message: "Responsibility must be at least 1- characters" }),
  whoYouAre: z
    .string({ required_error: "Who you are is required" })
    .min(10, { message: "Who you are must be at least 1- characters" }),
  niceToHave: z
    .string({ required_error: "Nice to Have is required" })
    .min(10, { message: "Nice to Have must be at least 1- characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Image is required" }),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "industry is required" }),
  dateFounded: z.date({ required_error: "dateFounded is required" }),
  techStack: z
    .string({ required_error: "Tech Stack is required" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook Link is Required" }),
  instagram: z.string({ required_error: "instagram Link is Required" }),
  linkedin: z.string({ required_error: "Linkedin Link is Required" }),
  twitter: z.string({ required_error: "Twitter Link is Required" }),
  youtube: z.string({ required_error: "youtube Link is Required" }),
});

export const teamformSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});
