import React from "react";
import SprintGameShoes from "../../../images/Sprint-game-shoes.png";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { nanoid } from "nanoid";

interface ILevel {
  id: any;
  name: string;
  color: string;
}

const level = [
  { id: nanoid(), name: "A1", color: "border-green-secondary" },
  { id: nanoid(), name: "A2", color: "border-green-secondary" },
  { id: nanoid(), name: "B1", color: "border-green-secondary" },
  { id: nanoid(), name: "B2", color: "border-green-secondary" },
  { id: nanoid(), name: "C1", color: "border-yellow-secondary" },
  { id: nanoid(), name: "C2", color: "border-green-secondary" },
];

const SprintGameStart = () => {
  console.log(nanoid);

  return (
    <Container>
      <div className="p-5 bg-primary-white rounded-xl mt-8 mb-10">
        <div className="flex flex-col">
          <Image
            className="mx-auto"
            quality={100}
            width={80}
            height={80}
            src={SprintGameShoes}
            alt="SprintGameShoes"
          />
          <h3 className="mx-auto text-2xl font-extrabold mb-2 mt-3">Sprint</h3>

          <p className="text-center text-gray-dark font-bold">
            Trains the skill of fast translation. You have to choose if the
            translation corresponds to the suggested word.
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
                    className={`w-11 h-11 rounded-full border-4 bg-transparent ${item.color}`}
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

export default SprintGameStart;
