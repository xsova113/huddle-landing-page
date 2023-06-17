import React from "react";
import { Contact, FooterImage, Newsletters } from "./";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="text-white">
      <FooterImage />
      <div
        className={`flex flex-col-reverse md:flex-row justify-between bg-[#00252E] px-8 md:px-24 md:py-28 pb-12 pt-12 ${openSans.className} gap-20`}
      >
        <Contact />
        <Newsletters />
      </div>
    </footer>
  );
};

export default Footer;
