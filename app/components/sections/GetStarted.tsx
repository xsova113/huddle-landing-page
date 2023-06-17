import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const GetStarted = () => {
  return (
    <section className="mb-32 md:mb-28 md:pt-20 md:pb-16 pb-20 flex flex-col text-center justify-center items-center gap-10">
      <h1 className="text-[#00252E] md:text-4xl text-3xl">
        Ready To Build Your Community?
      </h1>
      <button
        className={`py-4 px-12 font-bold md:py-6 md:px-24 bg-[#FF52BF] hover:bg-[#FF8FD8] rounded-full text-white transition ${openSans.className}`}
      >
        Get Started For Free
      </button>
    </section>
  );
};

export default GetStarted;
