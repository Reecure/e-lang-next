import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import rupor from "../../../images/rupor.png";
import { ILevel } from "@types";

const level = [
  {
    id: nanoid(),
    name: "A1",
    borderColor: "border-green-secondary",
    textColor: "text-green-secondary",
  },
  {
    id: nanoid(),
    name: "A2",
    borderColor: "border-yellow-secondary",
    textColor: "text-yellow-secondary",
  },
  {
    id: nanoid(),
    name: "B1",
    borderColor: "border-orange-secondary",
    textColor: "text-orange-secondary",
  },
  {
    id: nanoid(),
    name: "B2",
    borderColor: "border-red-secondary",
    textColor: "text-red-secondary",
  },
  {
    id: nanoid(),
    name: "C1",
    borderColor: "border-pink-secondary",
    textColor: "text-pink-secondary",
  },
  {
    id: nanoid(),
    name: "C2",
    borderColor: "border-cayan-secondary",
    textColor: "text-cayan-secondary",
  },
];

const Audiocall = () => {
  return (
    <Container>
      <div className="p-5 bg-primary-white rounded-xl mt-8 mb-10">
        <div className="flex flex-col ">
          <Image
            className="mx-auto"
            quality={100}
            width={80}
            height={80}
            src={rupor}
            alt="rupor"
          />
          <h3 className="mx-auto text-2xl font-extrabold mb-2 mt-3">
            Audio-Call
          </h3>

          <p className="text-center text-gray-dark font-bold">
            The Audio-Call training develops vocabulary and improves listening
            comprehension.
          </p>

          <div>
            <p className="text-center text-gray-dark font-bold mt-5 mb-2">
              Chose a level
            </p>
            <div className="flex justify-around mb-5">
              {level.map((item: ILevel) => {
                return (
                  <button
                    key={item.id}
                    className={`w-11 h-11 rounded-full border-4 bg-transparent ${item.borderColor}`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <Link href="/games/sprint/start">
                <Button textColor="text-primary-white" bgColor="bg-cayan-dark">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Audiocall;
