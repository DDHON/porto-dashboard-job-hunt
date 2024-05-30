import React from "react";
import FieldInput from "../organism/fieldInput/FieldInput";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import DialogAddTeam from "./DialogForm/DialogAddTeam";

const TeamForm = () => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="mb-5 w-[65%]">
        <div className="flex flex-row items-center justify-between">
          <div className="text-lg font-semibold">2 Members</div>
          <DialogAddTeam />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {[0, 1, 2].map((item: number) => (
            <div className="p-3 text-center shadow" key={item}>
              <div className="mx-auto  size-14 rounded-full bg-gray-300" />
              <div className="mt-4 text-center font-semibold">
                Muhammad Ramadhoni
              </div>
              <div className="text-center text-sm text-gray-500">CEO</div>
              <div className="mx-auto mt-5 inline-flex gap-3 text-gray-500">
                <FaInstagram className="size-4" />
                <FaLinkedin className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
