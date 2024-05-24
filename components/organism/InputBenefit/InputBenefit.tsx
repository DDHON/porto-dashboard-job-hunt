/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from "react";
import { FormField, FormItem, FormMessage } from "../../ui/form";
import DialogAddBenefit from "./DialogBenefit/DialogAddBenefit";
import { PartyPopper, X } from "lucide-react";

const InputBenefit = ({ form, name }: any) => {
  const [benefits, setBenefits] = useState<any[]>([]);

  const deleteBenefit = (item: any) => {
    const deletedBenefits = benefits.filter((benefit: any) => item !== benefit);
    setBenefits([...deletedBenefits]);
    form.setValue("benefits", deletedBenefits);
  };

  const updateBenefits = (item: any) => {
    const newValue: any[] = [...benefits, item];

    setBenefits(newValue);
    form.setValue("benefits", newValue);
  };

  return (
    <div className="block">
      <DialogAddBenefit updateBenefits={updateBenefits} />
      <div className="mt-5 grid grid-cols-3 gap-5">
        {benefits.map((item: any, i: number) => (
          <div
            className="relative w-[200px] rounded-sm border border-gray-200 p-3"
            key={i}
          >
            <PartyPopper className="text-primary mb-5 size-7" />

            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => deleteBenefit(item)}
            >
              <X className="size-6" />
            </div>

            <div className="mb-3 text-xl font-semibold">{item.benefit}</div>
            <div className="text-sm text-gray-500">{item.description}</div>
          </div>
        ))}
      </div>

      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputBenefit;
