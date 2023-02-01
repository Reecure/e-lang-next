import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import React from "react";
import boy from "../../../../images/casual-3d-boy.png";
import lightning from "../../../../images/lightning.svg";
import joystick from "../../../../images/joystick.svg";
import Container from "@/components/ui/Container/Container";

const HeaderBlock = () => {
  return (
    <Container>
      <div className=" sm:flex sm:justify-between">
        <div className="">
          <div className="">
            <p className="mb-2 text-xs uppercase text-center  font-bold text-cayan-dark sm:text-left sm:text-base sm:mb-6">
              e-course platform
            </p>
            <div className="">
              <h1 className="mx-auto mb-3 text-center  text-3xl font-DelaGothicOne font-extrabold sm:mb-7 sm:text-left sm:max-w-xs md:max-w-md semi-lg:text-5xl">
                Learning and teaching online, made easy.
              </h1>
            </div>
            <p className=" mb-5 text-sm text-center sm:mb-8 text-gray-dark sm:text-left sm:max-w-xs semi-lg:text-lg">
              Gain subject certification or earn money while teaching online
              with GlobalTalk.
            </p>
            <div className="mb-5 text-center sm:text-left md:mb-12">
              <Button textColor="text-cayan-dark" bgColor="bg-cayan-light">
                Learn more
              </Button>
            </div>

            <div className="flex mb-5 justify-between max-w-min mx-auto sm:mx-0">
              <div className="mr-10 ">
                <span className="flex ml-2">
                  {/* Mobile */}
                  <div className="block mt-1 mr-1 semi-lg:hidden">
                    <Image
                      quality={100}
                      width={13}
                      height={16}
                      src={lightning}
                      alt="lightning"
                    />
                  </div>

                  {/* Desktop */}
                  <div className="hidden mt-2 mr-1 semi-lg:block">
                    <Image
                      quality={100}
                      width={30}
                      height={40}
                      src={lightning}
                      alt="lightning"
                    />
                  </div>

                  <span className="font-bold text-xl semi-lg:text-4xl">
                    600
                  </span>
                  <span className="font-bold text-cayan-dark text-xl semi-lg:text-4xl">
                    +
                  </span>
                </span>
                <p className="text-xs whitespace-nowrap font-bold semi-lg:text-base ">
                  Popular words
                </p>
              </div>
              <div className="w-0.5 h-8 mt-2 bg-gray-medium rounded-lg"></div>
              <div className="ml-10">
                <span className="flex ml-3">
                  {/* Mobile */}
                  <div className="block mt-1 mr-1 semi-lg:hidden ">
                    <Image
                      quality={100}
                      width={13}
                      height={16}
                      src={joystick}
                      alt="joystick"
                    />
                  </div>

                  {/* Desktop */}
                  <div className="hidden mt-1 mr-1  semi-lg:block">
                    <Image
                      quality={100}
                      width={24}
                      height={30}
                      src={joystick}
                      alt="joystick"
                    />
                  </div>

                  <span className="font-bold text-xl semi-lg:text-4xl">2</span>
                  <span className="font-bold text-cayan-dark text-xl semi-lg:text-4xl">
                    +
                  </span>
                </span>
                <p className="text-xs whitespace-nowrap font-bold semi-lg:text-base">
                  Mini-games
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            {/* Mobile */}
            <div className="block  semi-lg:hidden">
              <Image
                className="mx-auto"
                quality={100}
                width={335}
                height={230}
                src={boy}
                alt="boy"
              />
            </div>

            {/* Desktop */}
            <div className="hidden semi-lg:block">
              <Image
                quality={100}
                width={680}
                height={409}
                src={boy}
                alt="boy"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderBlock;
