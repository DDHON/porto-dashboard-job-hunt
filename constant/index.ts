import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full-time",
  "Part-time",
  "Remote",
  "Internship",
];

export const CATEGORIES: EnumValues = [
  "Full-time",
  "Part-time",
  "Remote",
  "Internship",
];
export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Aplicants",
  "Needs",
];

export const JOB_APPLICANS_COLUMNS: string[] = ["Name", "Applied Date"];
export const JOB_APPLICANTS_DATA = [
  {
    name: "Muhammad Ramadhoni",
    appliedDate: "3 Jan 2000",
  },
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "Full-Time",
    applicant: 1,
    needs: 10,
  },
];
