import Image from "next/image";
import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const YourUsers = () => {
  return (
    <section className="py-28 md:py-24">
      <div className="relative w-full h-[120px] hidden md:block">
        <Image
          src={"/images/bg-section-top-desktop-2.svg"}
          alt="bg-image"
          fill
          className="absolute top-0"
        />
      </div>

      <div className="relative w-full h-[110px] md:hidden block">
        <Image
          src={"/images/bg-section-top-mobile-2.svg"}
          alt="bg-image"
          fill
          className="absolute top-0"
        />
      </div>

      <div className="bg-[#F5FAFF] flex flex-col-reverse md:flex-row py-10 pb-20 md:py-8 md:px-28 px-8 items-center md:gap-20 gap-12 max-md:text-center">
        <div className="flex flex-col md:flex-1 gap-8">
          <h1 className="md:text-4xl text-2xl text-[#00252E]">Your Users</h1>
          <p
            className={`${openSans.className} font-medium max-md:text-sm text-[#00252E]/70`}
          >
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>

        <div className="relative md:flex-1 md:h-[400px] w-full h-[250px]">
          <Image
            src={"/images/illustration-your-users.svg"}
            alt="grow-together-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative w-full h-[100px] hidden md:block">
        <Image
          src={"/images/bg-section-bottom-desktop-2.svg"}
          alt="bg-image"
          fill
          className="absolute bottom-0"
        />
      </div>
      <div className="relative w-full h-[90px] md:hidden block">
        <Image
          src={"/images/bg-section-bottom-mobile-2.svg"}
          alt="bg-image"
          fill
          className="absolute bottom-0 "
        />
      </div>
    </section>
  );
};

export default YourUsers;
