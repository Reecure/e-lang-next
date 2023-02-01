import Image from "next/image";
import React from "react";

import womanWithTablet from "../../../../images/woman-with-tablet.png";

const FirstBlock = () => {
  return (
    <div className="mb-10 py-20">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mx-auto sm:m-0">
          {/* Mobile */}
          <div className="block semi-lg:hidden">
            <Image
              quality={100}
              width={335}
              height={230}
              src={womanWithTablet}
              alt="womanWithTablet"
            />
          </div>

          {/* Desktop */}
          <div className="hidden semi-lg:block">
            <Image
              quality={100}
              width={680}
              height={409}
              src={womanWithTablet}
              alt="womanWithTablet"
            />
          </div>
        </div>
        <div className="">
          <h2 className="w-80 mx-auto text-2xl text-center font-DelaGothicOne font-extrabold mt-5 sm:mb-5 sm:m-0 sm:text-left semi-lg:text-5xl semi-lg:w-98">
            Learn a language in a playful way
          </h2>
          <p className="w-90 mx-auto text-gray-dark font-bold text-base text-center sm:m-0 sm:text-left md:mt-7 md:mb-9 semi-lg:text-lg">
            Make learning words more fun with mini-games
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
