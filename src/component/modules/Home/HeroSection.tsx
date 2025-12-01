import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <div className="h-screen w-full relative">
      <Image src="/images/Hero/Gemini_Generated_Image_bdpp7zbdpp7zbdpp.png" fill alt="heroImg" />
      <div className="absolute left-1/6 top-1/4">
        <div className="flex flex-col items-start gap-6 ">
          <h1 className="text-primary-foreground text-6xl font-semibold font-vazir leading-24">
            مرکز روانشناسی <br /> دکتر مرضیه خمسه
          </h1>
          <div className="flex items-center gap-4 px-3">
            <p className="text-secondary font-vazir font-medium ">زوج درمانی</p>
            <p className="text-secondary-foreground font-vazir font-medium ">.</p>
            <p className="text-secondary font-vazir font-medium ">مدیریت استرس</p>
            <p className="text-secondary-foreground font-vazir font-medium ">.</p>
            <p className="text-secondary font-vazir font-medium ">مهارت نه گفتن</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
