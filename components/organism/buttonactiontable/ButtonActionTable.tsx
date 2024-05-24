"use client";
import React from "react";
import { Button } from "../../ui/button";
import { MoreVertical } from "lucide-react";

import { useRouter } from "next/navigation";

interface Props {
  url: string;
}
const ButtonActionTable = ({ url }: Props) => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push(url)} size="icon" variant={"outline"}>
        <MoreVertical className="size-4" />
      </Button>
    </div>
  );
};

export default ButtonActionTable;
