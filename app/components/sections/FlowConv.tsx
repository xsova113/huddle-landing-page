import Image from "next/image";
import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const FlowConv = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row-reverse md:px-28 px-8 items-center md:gap-20 gap-12 max-md:text-center">
        <div className="flex flex-col md:flex-1 gap-8">
          <h1 className="md:text-4xl text-2xl text-[#00252E]">
            Flowing Conversations
          </h1>
          <p
            className={`${openSans.className} font-medium max-md:text-sm text-[#00252E]/70`}
          >
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>

        <div className="relative md:flex-1 md:h-[400px] w-full h-[250px]">
          <Image
            src={"/images/illustration-flowing-conversation.svg"}
            alt="grow-together-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FlowConv;
