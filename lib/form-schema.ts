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
    .string()
    .array()
    .nonempty({ message: "Required skill must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job Description must be at least 1- characters" }),
  responsibility: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job Description must be at least 1- characters" }),
  whoYouAre: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job Description must be at least 1- characters" }),
  niceToHave: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job Description must be at least 1- characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});
