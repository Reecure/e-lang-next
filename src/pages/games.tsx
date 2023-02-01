import Layout from "@/components/common/Layout/Layout";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import React from "react";
import sprintGame from "../images/Sprint-game-shoes.png";
import rupor from "../images/rupor.png";
import Image from "next/image";
const Games = () => {
  return (
    <Container>
      <div className="max-w-md mx-auto ">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center w-80 h-80 text-4xl font-extrabold text-center  cursor-pointer">
            <Link href="/games/sprint">
              <Image
                className="mb-5"
                width={100}
                height={100}
                quality={100}
                src={sprintGame}
                alt="shoes"
              />
            </Link>
            <Link href="/games/sprint">
              <p>Sprint</p>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-80 h-80 text-4xl font-extrabold text-center  cursor-pointer">
            <Link href="/games/audio-call">
              <Image
                className="mb-5"
                width={100}
                height={100}
                quality={100}
                src={rupor}
                alt="rupor"
              />
            </Link>
            <Link href="/games/sprint">
              <p>AudioCall</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Games;

Games.Layout = Layout;
