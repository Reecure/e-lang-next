import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import GT from "../../../images/GT.svg";
import youtube from "../../../images/youtube.svg";
import cat from "../../../images/Cat.svg";
import { nanoid } from "nanoid";
import { INavbar } from "@types";

const footbar = [
  { id: nanoid(), name: "Home", color: "text-primary-white", href: "/" },
  {
    id: nanoid(),
    name: "Textbook",
    color: "text-primary-white",
    href: "/textbook",
  },
  {
    id: nanoid(),
    name: "Statistics",
    color: "text-primary-white",
    href: "/statistics",
  },
  {
    id: nanoid(),
    name: "Sprint",
    color: "text-primary-white",
    href: "/games/sprint",
  },
  {
    id: nanoid(),
    name: "Audiocall",
    color: "text-primary-white",
    href: "/games/audio-call",
  },
];

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-around md:justify-between ">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          {footbar.map((item: INavbar) => {
            return (
              <Link key={`${item.id}`} href={`${item.href}`}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col  sm:flex-row sm:space-x-6">
          <p className="cursor-pointer">Alex</p>
          <p className="cursor-pointer">Gabriel</p>
          <p className="cursor-pointer">Marcus</p>
        </div>
      </div>
      <div className="flex flex-col text-center sm:flex-row sm:space-x-6 sm:justify-between py-10">
        <div className="flex justify-center space-x-4">
          <Image src={youtube} alt="youtube" />
          <Image src={GT} alt="GT" />
          <Image src={cat} alt="Cat" />
        </div>
        <div className="mt-4 sm:mt-0">
          <p>©2023 GlobalTalk. Project for GlobalTalk.</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
