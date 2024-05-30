import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import OverviewForm from "../../../components/forms/OverviewForm";
import SocialMediaForm from "../../../components/forms/SocialMediaForm";
import TeamForm from "../../../components/forms/TeamForm";

const page = () => {
  return (
    <div>
      <div className="mb-5 text-3xl font-semibold ">Settings</div>
      <Tabs defaultValue="overview" className="">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
