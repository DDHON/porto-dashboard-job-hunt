import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import Applicants from "../../../../components/organism/Applicants/Applicants";
import JobDetail from "../../../../components/organism/JobDetail/JobDetail";

const page = () => {
  return (
    <div>
      <div className="mb-5 inline-flex items-center gap-5">
        <div className="">
          <Link href="/job-listing">
            <ArrowLeftIcon className="size-9" />
          </Link>
        </div>
        <div className="">
          <div className="mb-1 text-2xl font-semibold">Brand Designer</div>
          <div className="">Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="Applicants" className="">
        <TabsList className="mb-8">
          <TabsTrigger value="Applicants">Applicants</TabsTrigger>
          <TabsTrigger value="JobDetails">JobDetails</TabsTrigger>
        </TabsList>
        <TabsContent value="Applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="JobDetails">
          <JobDetail />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
