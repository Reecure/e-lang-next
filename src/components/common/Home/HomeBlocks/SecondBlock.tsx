import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import React from "react";
import girlWithBooks from "../../../../images/girl-with-books.png";

const SecondBlock = () => {
  return (
    <div className="mb-10 py-6">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="">
          <h2 className="w-72 mx-auto text-2xl text-center font-DelaGothicOne font-extrabold mt-5 sm:mb-5 sm:m-0 sm:text-left semi-lg:text-5xl semi-lg:w-98">
            Increase your vocabulary
          </h2>
          <p className="w-80 mt-2 mb-4 text-gray-dark font-bold mx-auto text-base text-center  sm:m-0 sm:text-left md:mt-7 md:mb-9 semi-lg:text-lg ">
            Traditional and new effective approaches to word study
          </p>
          <div className=" mb-1 text-center sm:text-left">
            <Button textColor="text-cayan-dark" bgColor="bg-cayan-light">
              Textbook
            </Button>
          </div>
        </div>
        <div className="mx-auto sm:m-0">
          {/* Mobile */}
          <div className="block semi-lg:hidden">
            <Image
              quality={100}
              width={335}
              height={230}
              src={girlWithBooks}
              alt="girlWithBooks"
            />
          </div>

          {/* Desktop */}
          <div className="hidden semi-lg:block">
            <Image
              quality={100}
              width={680}
              height={409}
              src={girlWithBooks}
              alt="girlWithBooks"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
