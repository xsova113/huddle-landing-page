import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="text-white flex flex-col gap-7 md:w-1/3">
      <div className="relative w-[200px] h-[40px]">
        <Image
          src={"/images/logo2.svg"}
          fill
          alt="logo"
          className="fill-white"
        />
      </div>
      <p className="font-medium text-sm tracking-wider">
        Sunt nostrud sunt Lorem enim ex quis non aliqua veniam exercitation
        veniam est. Pariatur dolore officia proident aliquip anim pariatur
        laborum nisi nulla.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <FaPhoneVolume className="-rotate-45" size={23} color="white" />
          <span className="font-medium text-sm opacity-90">
            Phone: +1-543-123-4567
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <IoMdMail size={23} color="white" />
          <span className="font-medium text-sm opacity-90">
            example@huddle.com
          </span>
        </div>
      </div>

      <div className="flex gap-4 -ml-1 md:mt-10 mt-2">
        <AiFillFacebook
          size={40}
          className="hover:fill-sky-400 hover:-translate-y-1 transition cursor-pointer"
        />
        <AiOutlineInstagram
          size={40}
          className="hover:fill-sky-400 hover:-translate-y-1 transition cursor-pointer"
        />
        <AiFillTwitterSquare
          size={40}
          className="hover:fill-sky-400 hover:-translate-y-1 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Contact;
