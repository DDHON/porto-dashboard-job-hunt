import React from "react";
import { Progress } from "../../ui/progress";
import { Separator } from "../../ui/separator";
import { Badge } from "../../ui/badge";
import { PartyPopperIcon } from "lucide-react";

const JobDetail = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-3 gap-5">
        <div className="col-span-2 space-y-10">
          <div className="">
            <div className="text-3xl font-semibold">Desciption</div>
            <div className="mt-3 text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officiis, consequuntur et quis esse deleniti, tenetur
                dolorum laborum ipsam cumque accusamus quod possimus veritatis
                ducimus saepe nam aliquid porro mollitia!
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">Responsibility</div>
            <div className="mt-3 text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officiis, consequuntur et quis esse deleniti, tenetur
                dolorum laborum ipsam cumque accusamus quod possimus veritatis
                ducimus saepe nam aliquid porro mollitia!
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="mt-3 text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officiis, consequuntur et quis esse deleniti, tenetur
                dolorum laborum ipsam cumque accusamus quod possimus veritatis
                ducimus saepe nam aliquid porro mollitia!
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">Nice-To_Haves</div>
            <div className="mt-3 text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officiis, consequuntur et quis esse deleniti, tenetur
                dolorum laborum ipsam cumque accusamus quod possimus veritatis
                ducimus saepe nam aliquid porro mollitia!
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-3xl font-semibold">About this role</div>
          <div className="my-6 p-3 text-center shadow">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between ">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">3 Jan 2000</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">3 Jan 2000</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000</div>
            </div>
          </div>
          <Separator />
          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Categories</div>
            <div className="space-x-5">
              <Badge> Design</Badge>
            </div>
          </div>
          <Separator />
          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Required Skills</div>
            <div className="space-x-5">
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge variant={"outline"} key={item + i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="">
        <div className="text-3xl font-semibold">Perk & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>
        <div className="mt-9 grid grid-cols-4 gap-5">
          {[0, 1, 2].map((item: number) => (
            <div key={item} className="">
              <PartyPopperIcon className="text-primary mb-6 size-10" />
              <div className="mb-3 text-lg font-semibold">Full Healthcare</div>
              <div className="text-gray-500">
                We Believe in thriving communities and that starts with our team
                being happy and healty
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
