import React, { useState } from "react";
import SprintGameShoes from "../../../images/Sprint-game-shoes.png";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { nanoid } from "nanoid";
import { ILevel } from "@types";

const level = [
  {
    id: 0,
    name: "A1",
    borderColor: "border-green-secondary",
    textColor: "text-green-secondary",
    bgcolor: "bg-green-secondary",
  },
  {
    id: 1,
    name: "A2",
    borderColor: "border-yellow-secondary",
    textColor: "text-yellow-secondary",
    bgcolor: "bg-yellow-secondary",
  },
  {
    id: 2,
    name: "B1",
    borderColor: "border-orange-secondary",
    textColor: "text-orange-secondary",
    bgcolor: "bg-orange-secondary",
  },
  {
    id: 3,
    name: "B2",
    borderColor: "border-red-secondary",
    textColor: "text-red-secondary",
    bgcolor: "bg-red-secondary",
  },
  {
    id: 4,
    name: "C1",
    borderColor: "border-pink-secondary",
    textColor: "text-pink-secondary",
    bgcolor: "bg-pink-secondary",
  },
  {
    id: 5,
    name: "C2",
    borderColor: "border-cayan-secondary",
    textColor: "text-cayan-secondary",
    bgcolor: "bg-cayan-secondary",
  },
];

const SprintGameStart = () => {
  const [activeCategory, setActiveCategory] = useState(null);
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
          <h3 className="mx-auto text-2xl font-DelaGothicOne font-extrabold mb-2 mt-3">
            Sprint
          </h3>

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
                    onClick={() => setActiveCategory(item.id)}
                    className={`w-11 h-11 rounded-full border-4 font-bold bg-transparent ${
                      item.id === activeCategory
                        ? `${item.bgcolor} text-white`
                        : ""
                    } ${item.borderColor} ${item.textColor}`}
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
