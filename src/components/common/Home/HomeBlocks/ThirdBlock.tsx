import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import React from "react";
import girlWithboy from "../../../../images/man-with-woman-third-Block.png";

const ThirdBlock = () => {
  return (
    <div className="mb-10 ">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mx-auto sm:m-0">
          {/* Mobile */}
          <div className="block semi-lg:hidden">
            <Image
              quality={100}
              width={335}
              height={230}
              src={girlWithboy}
              alt="girlWithboy"
            />
          </div>

          {/* Desktop */}
          <div className="hidden semi-lg:block">
            <Image
              quality={100}
              width={680}
              height={409}
              src={girlWithboy}
              alt="girlWithboy"
            />
          </div>
        </div>
        <div className="">
          <h2 className="w-80 mx-auto text-2xl text-center font-DelaGothicOne font-extrabold mt-5 sm:mb-5 sm:m-0 sm:text-left semi-lg:text-5xl semi-lg:w-98">
            Watch your progress every day
          </h2>
          <p className="w-80  mt-2 mb-4 text-gray-dark font-bold mx-auto text-base text-center sm:m-0 sm:text-left md:mt-7 md:mb-9 semi-lg:text-lg">
            Save statistics on your achievements, words learned, and mistakes
          </p>
          <div className="text-center sm:text-left">
            <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
              Statistics
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
