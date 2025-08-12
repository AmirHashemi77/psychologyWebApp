import Image from "next/image";
import { FC } from "react";
import HeroBg from "./HeroBg";

const HeroSection: FC = () => {
  return (
    <div className="w-full h-screen bg-[#3a230e] bg-hero relative overflow-hidden">
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between w-full h-full">
        <div className="flex items-center justify-start xl:justify-center gap-5 flex-col w-full xl:w-1/2 h-full  ">
          <h1 className="text-[#ffe8bc] text-center font-bold tex-center text-3xl xl:text-5xl py-5 font-vazir">مرکز روانشناسی دکتر خمسه</h1>
          <h3 className="text-[#fdf5e6] text-center font-bold tex-center text-lg xl:text-xl font-vazir">در مسیر بهبود، تنها نیستید</h3>
          <h4 className="text-[#fdf5e6] text-center font-bold tex-center font-vazir text-sm xl:text-md">جلسات مشاوره حضوری و آنلاین برای کمک به رشد فردی و آرامش روان</h4>
        </div>
        <div className="relative w-full xl:w-1/2 h-full rounded-2xl">
          <Image fill objectFit="cover" alt="hero-img" src="/images/Hero/heroImg.png" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
