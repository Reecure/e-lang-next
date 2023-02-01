import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import rupor from "../../../images/rupor.png";
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

const Audiocall = () => {
  const [activeCategory, setActiveCategory] = useState(null);

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
              {level.map((item: ILevel, i) => {
                return (
                  <button
                    key={item.id}
                    className={`w-11 h-11 rounded-full font-bold border-4 bg-transparent ${
                      item.id === activeCategory
                        ? `${item.bgcolor} text-white`
                        : ""
                    } ${item.borderColor} ${item.textColor}`}
                    onClick={() => setActiveCategory(item.id)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <Link href="/games">
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
