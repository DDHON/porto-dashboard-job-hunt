"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const navCreateJobPage = () => router.push("/post-a-job");
  return (
    <>
      <div className="mb-8 flex flex-row items-center justify-between border-b pb-3">
        <div className="">
          <div className="">Company</div>
          <div className="font-semibold">Twitter</div>
        </div>
        <div className="rounded-none px-6 py-3">
          <Button onClick={navCreateJobPage}>
            <FaPlus className="mr-2 size-4" />
            Post a job
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
