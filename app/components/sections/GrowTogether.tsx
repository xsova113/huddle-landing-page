import Image from "next/image";
import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const GrowTogether = () => {
  return (
    <section className="py-28 md:py-32">
      <div className="relative w-full h-[150px] hidden md:block">
        <Image
          src={"/images/bg-section-top-desktop-1.svg"}
          alt="bg-image"
          fill
          className="absolute top-0"
        />
      </div>

      <div className="relative w-full h-[150px] md:hidden block">
        <Image
          src={"/images/bg-section-top-mobile-1.svg"}
          alt="bg-image"
          fill
          className="absolute top-0"
        />
      </div>

      <div className="bg-[#F5FAFF] flex flex-col-reverse md:flex-row py-10 md:py-8 md:px-28 px-8 items-center md:gap-20 gap-12 max-md:text-center">
        <div className="flex flex-col md:flex-1 gap-8">
          <h1 className="md:text-4xl text-2xl text-[#00252E]">Grow Together</h1>
          <p
            className={`${openSans.className} font-medium max-md:text-sm text-[#00252E]/70`}
          >
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>

        <div className="relative md:flex-1 md:h-[400px] w-full h-[250px]">
          <Image
            src={"/images/illustration-grow-together.svg"}
            alt="grow-together-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative w-full h-[150px] hidden md:block">
        <Image
          src={"/images/bg-section-bottom-desktop-1.svg"}
          alt="bg-image"
          fill
          className="absolute bottom-0"
        />
      </div>
      <div className="relative w-full h-[80px] md:hidden block">
        <Image
          src={"/images/bg-section-bottom-mobile-1.svg"}
          alt="bg-image"
          fill
          className="absolute bottom-0 "
        />
      </div>
    </section>
  );
};

export default GrowTogether;
