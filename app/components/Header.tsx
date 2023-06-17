import Image from "next/image";
import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="md:px-24 md:py-12 px-8 py-12">
      <nav className="flex justify-between items-center">
        <div className="relative w-[150px] h-[30px] md:w-[195px] md:h-[35px]">
          <Image src={"/images/logo.svg"} alt="logo" fill />
        </div>

        <button
          className={`${openSans.className} font-normal max-md:text-sm hover:border-[#FF8FD8] border border-[#FF52BF] rounded-full px-8 max-md:px-6 py-2`}
        >
          Try It Free
        </button>
      </nav>
    </header>
  );
};

export default Header;
