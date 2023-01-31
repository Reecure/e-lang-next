import Container from "@/components/ui/Container/Container";
import logo from "../../../images/GlobalTalk.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Usernav from "../UserNav/Usernav";
import userIco from "../../../images/user-ico.svg";
import { nanoid } from "nanoid";
import { INavbar } from "@types";

const navbarDesctop = [
  { id: nanoid(), name: "Home", color: "text-primary-black", href: "/" },
  {
    id: nanoid(),
    name: "Textbook",
    color: "text-gray-dark",
    href: "/textbook",
  },
  {
    id: nanoid(),
    name: "Statistics",
    color: "text-gray-dark",
    href: "/statistics",
  },
  { id: nanoid(), name: "Games", color: "text-gray-dark", href: "/games" },
];

const navbarMobile = [
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

const Navbar = () => {
  const [close, setClose] = useState<boolean>(true);

  useEffect(() => {
    if (close) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [close]);

  const NavbarCloseHandler = () => {
    setClose(!close);
  };
  return (
    <Container>
      <div className="grid grid-cols-[min-content_minmax(150px,1fr)_50px] py-6 sm:grid-cols-[180px_1fr_minmax(min-content,250px)]  ">
        <Link
          onClick={() => setClose(true)}
          href="/"
          className=" col-start-2  mt-2 mx-auto md:m-0 md:col-start-1 md:mt-3"
        >
          <Image className="" src={logo} alt="logo" />
        </Link>

        <div className=" space-x-10 mt-2 row-start-1 md:col-start-2 md:mx-0 ">
          <nav className="hidden space-x-6  md:block">
            {navbarDesctop.map((item: INavbar) => {
              return (
                <Link
                  key={item.id}
                  className={`${item.color}`}
                  href={`${item.href}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div
            style={{ marginLeft: "25px" }}
            className="block md:hidden"
            onClick={NavbarCloseHandler}
          >
            {close ? (
              <div>
                <div className=" w-8 mb-1 h-1 bg-primary-black rounded-xl"></div>
                <div className=" w-6 mb-1 h-1 bg-primary-black rounded-xl"></div>
                <div className=" w-4 mb-1 h-1 bg-primary-black rounded-xl"></div>
              </div>
            ) : (
              <div onClick={() => setClose(false)} className="z-20">
                <div className=" w-8  h-1 bg-primary-black rounded-xl rotate-45 "></div>
                <div className=" w-8 -mt-1 h-1 bg-primary-black rounded-xl -rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        <div className="col-start-3 p-0 md:mx-0">
          <div className="hidden sm:block">
            <Usernav />
          </div>
          <div className="block  mt-1 sm:hidden">
            <Image
              className="ml-6"
              width={25}
              height={25}
              src={userIco}
              alt="userIco"
            />
          </div>
        </div>
      </div>
      {!close && (
        <div>
          <div className="w-full h-screen space-y-5 fixed  left-0 bg-gray-dark flex flex-col justify-center items-center z-50">
            {navbarMobile.map((item: INavbar) => {
              return (
                <Link
                  key={item.id}
                  onClick={() => setClose(!close)}
                  className={`${item.color}`}
                  href={`${item.href}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
