import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import hat from "../../../images/hat.svg";

interface Props {
  score: number;
  words: number;
}

const SprintGameResult: FC<Props> = ({ score, words }) => {
  return (
    <>
      <div className="max-w-xs mx-auto p-5 bg-white mb-10">
        <div>
          <Image className="mb-1 mx-auto" src={hat} alt="hat" />
          <div className="text-center mb-5">
            <h4 className="font-DelaGothicOne font-extrabold text-2xl mb-2">
              Your Sprint
            </h4>
            <p className="font-bold text-sm">You did pretty good</p>
          </div>
          <div className="flex justify-center space-x-5 mb-7">
            <div className="flex flex-col items-center justify-center rounded-full w-28 h-28 border-cayan-dark border-4">
              <p className="font-bold text-sm">retrieved</p>
              <span className="font-extrabold text-3xl">{score}</span>
              <p className="font-bold text-gray-dark text-base">points</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full w-28 h-28 border-cayan-dark border-4">
              <p className="font-bold text-sm">{words}/</p>
              <span className="font-extrabold text-3xl">30</span>
              <p className="font-bold text-gray-dark text-base">words</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Link href="/games/sprint">Play it again</Link>
            <Link href="/textbook">
              <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
                Go to text book
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SprintGameResult;
