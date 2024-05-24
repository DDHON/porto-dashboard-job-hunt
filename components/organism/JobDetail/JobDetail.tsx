import React from "react";

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
          <div className="mt-6 bg-gray-100 p-3 text-center">
            1 <span className="text-gray-500">of 10 capacity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
