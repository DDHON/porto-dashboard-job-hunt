/* eslint-disable tailwindcss/no-custom-classname */

"use client";
import React from "react";
import { Button } from "../../ui/button";
import { IoHome, IoLogOut } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaBuilding, FaClipboardList, FaUsers } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
              onClick={() => router.push("/")}
            >
              <IoHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
            >
              <MdMessage className="mr-2 text-lg" />
              Message
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
            >
              <FaBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
            >
              <FaUsers className="mr-2 text-lg" />
              All Aplicants
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
              onClick={() => router.push("/job-listing")}
            >
              <FaClipboardList className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
            >
              <RiCalendarScheduleFill className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Setting</h2>
            <Button
              variant={"ghost"}
              className=" hover:text-primary w-full justify-start rounded-none"
            >
              <IoMdSettings className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className=" hover:text-red-500d w-full justify-start rounded-none text-red-500 hover:bg-red-200"
            >
              <IoLogOut className="mr-2 text-lg" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
