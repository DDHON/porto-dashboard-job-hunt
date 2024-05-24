import React, { ReactNode } from "react";
import { Separator } from "../../ui/separator";

interface FieldInputProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}
const FieldInput = ({ children, title, subtitle }: FieldInputProps) => {
  return (
    <>
      <div className="flex flex-col items-start md:flex-row">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="w-80 text-gray-400">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
