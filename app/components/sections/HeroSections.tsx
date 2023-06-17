import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const HeroSections = () => {
  return (
    <section className="px-8 md:px-16 md:py-10 md:mt-28 mt-20">
      <div className="flex flex-col md:px-12 gap-12 text-center items-center">
        <h1 className="md:text-5xl text-2xl text-[#00252E]">
          Build The Community Your Fans Will Love
        </h1>
        <p
          className={`${openSans.className} font-[600] md:w-1/2 text-[#00252E]/80`}
        >
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          className={`${openSans.className} font-semibold rounded-full bg-[#FF52BF] hover:bg-[#FF8FD8] px-14 py-4 text-white shadow-lg transition`}
        >
          Get Started For Free
        </button>
        <div className="relative w-full md:h-[720px] h-[300px] mt-6 md:mt-12">
          <Image
            src={"/images/screen-mockups.svg"}
            alt="bg desktop img"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
