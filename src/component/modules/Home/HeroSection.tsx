import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <div className="h-screen w-full relative ">
      <Image src="/images/Hero/Gemini_Generated_Image_bdpp7zbdpp7zbdpp.png" fill alt="heroImg" className="object-cover lg:object-fill z-0" />
      <div className="absolute top-0 right-0 h-screen w-full bg-black/50 lg:hidden" />
      <div className="absolute left-1/2  lg:left-1/6 top-[14%] -translate-x-1/2 lg:translate-x-0 ">
        <div className="flex flex-col items-start gap-6 ">
          <h1 className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold  font-vazir leading-14 lg:leading-24">
            مـــرکز روانـــشنــاسی <br /> دکتر مــــرضیه خـــمســه
          </h1>
          <div className="flex items-center gap-4 px-3">
            <p className="text-secondary font-vazir font-medium text-nowrap text-sm lg:text-base">زوج درمانی</p>
            <p className="text-secondary-foreground font-vazir font-medium text-sm lg:text-base">.</p>
            <p className="text-secondary font-vazir font-medium text-nowrap text-sm lg:text-base">مدیریت استرس</p>
            <p className="text-secondary-foreground font-vazir font-medium text-sm lg:text-base">.</p>
            <p className="text-secondary font-vazir font-medium text-nowrap text-sm lg:text-base">طرحواره‌درمانی</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
