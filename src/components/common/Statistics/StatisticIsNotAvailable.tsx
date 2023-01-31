import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import React from "react";

const StatisticIsNotAvailible = () => {
  return (
    <>
      <div>
        <Image src="" alt="" />
        <h4>Sorry, statistics not available</h4>
        <p>
          To get statistics and keep track of your results, register or log in
          to your account
        </p>
        <div>
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
