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
      <div>
        <Image src={hat} alt="hat" />
        <div>
          <h4>Your Sprint</h4>
          <p>You did pretty good</p>
        </div>
        <div>
          <div>
            <p>retrieved</p>
            <span>{score}</span>
            <p>points</p>
          </div>
          <div>
            <p>{words}/</p>
            <span>30</span>
            <p>words</p>
          </div>
        </div>
        <Link href="/games/sprint">Play it again</Link>
        <Link href="/textbook">
          <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
            Go to text book
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SprintGameResult;
