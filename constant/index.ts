import { EnumValues } from "zod";
export type optionType = {
  id: string;
  label: string;
};

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

export const LOCATION_OPTION: optionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia",
  },
  {
    id: "Malaysia",
    label: "Malaysia",
  },
  {
    id: "Singapura",
    label: "Singapura",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: "1-50",
    label: "1-50",
  },
  {
    id: "51-150",
    label: "51-150",
  },
  {
    id: "151-250",
    label: "151-250",
  },
  {
    id: "251-500",
    label: "251-500",
  },
  {
    id: "500-1000",
    label: "500-1000",
  },
  {
    id: "1000-above",
    label: "1000-above",
  },
];
