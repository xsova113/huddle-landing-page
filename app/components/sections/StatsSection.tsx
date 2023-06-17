import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const StatsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-28 justify-between md:px-52 px-8">
      <div className={`flex flex-col gap-4 ${openSans.className}`}>
        <Image
          src={"/images/icon-communities.svg"}
          alt="comminities-icon"
          width={40}
          height={40}
        />
        <h1 className="md:text-8xl text-6xl text-[#00252E]">1.4k+</h1>
        <h3 className="text-[#00252E]/60 md:text-xl font-normal self-center">
          Communities Formed
        </h3>
      </div>

      <div className={`flex flex-col gap-4 ${openSans.className}`}>
        <Image
          src={"/images/icon-messages.svg"}
          alt="comminities-icon"
          width={40}
          height={40}
        />
        <h1 className="md:text-8xl text-6xl text-[#00252E]">2.7m+</h1>
        <h3 className="text-[#00252E]/60 md:text-xl font-normal self-center">
          Messages Sent
        </h3>
      </div>
    </section>
  );
};

export default StatsSection;
