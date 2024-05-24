import React, { useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Button } from "../../../ui/button";
import { PlusIcon } from "lucide-react";
import { DialogContent } from "@radix-ui/react-dialog";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
interface Props {
  updateBenefits: (item: any) => void;
}
const DialogBenefit = ({ updateBenefits }: Props) => {
  const benefitRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;

    if (benefit === "" || description === "") {
      return;
    }

    updateBenefits({
      benefit,
      description,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          <PlusIcon className="mr-2 size-4" />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, clicks save when your done
          </DialogDescription>
        </DialogHeader>
        <div className="mb-5 space-y-8">
          <div>
            <Label htmlFor="benefit">Benefit</Label>
            <Input
              id="benefit"
              placeholder="fill your benefit..."
              ref={benefitRef}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="fill your description..."
              ref={descriptionRef}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleSaveBenefit}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBenefit;
