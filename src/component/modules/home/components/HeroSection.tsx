import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <div className="w-full h-screen bg-[#3a230e] relative overflow-hidden">
      <div className="flex items-center w-full h-full">
        <div className="flex items-center justify-center flex-col absolute w-1/2 h-full right-0 ">
          <h1 className="text-[#b98d5d] font-bold tex-center text-3xl font-vazir">مرکز روانشناسی دکتر خمسه</h1>
        </div>
        <div className="absolute left-0 w-1/2 h-full">
          <Image fill objectFit="cover" alt="hero-img" src="/images/Hero/heroImg.png" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
