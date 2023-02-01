import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import React from "react";
import statico from "../../../images/statisticIco.svg";

const StatisticIsNotAvailible = () => {
  return (
    <>
      <div className="flex p-5 flex-col items-center max-w-sm mx-auto bg-white rounded-lg">
        <Image src={statico} alt="statico" />
        <h4 className="mb-2 mt-1 text-2xl w-60 font-DelaGothicOne font-extrabold text-center">
          Sorry, statistics not available
        </h4>
        <p className="text-gray-dark font-bold text-center">
          To get statistics and keep track of your results, register or log in
          to your account
        </p>
        <div className="mt-5 space-y-3 flex flex-col">
          <Button textColor="text-ptimary-black">Log In</Button>
          <Button bgColor="bg-cayan-dark" textColor="text-primary-white">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default StatisticIsNotAvailible;
