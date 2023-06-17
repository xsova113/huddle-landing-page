import Image from "next/image";

const FooterImage = () => {
  return (
    <>
      <div className="relative w-full h-[130px] hidden md:block">
        <Image
          src={"/images/bg-footer-top-desktop.svg"}
          alt="footer-bg"
          fill
          className="absolute top-0"
        />
      </div>
      <div className="relative w-full h-[50px] md:hidden block">
        <Image
          src={"/images/bg-footer-top-mobile.svg"}
          alt="footer-bg"
          fill
          className="absolute top-0"
        />
      </div>
    </>
  );
};

export default FooterImage;
