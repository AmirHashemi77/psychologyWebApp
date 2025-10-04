import AboutUsSection from "@/component/modules/home/components/AboutUsSection";
import AddCommentsSection from "@/component/modules/home/components/AddCommentsSection";
import AddressSection from "@/component/modules/home/components/AddressSection";
import CommentsSection from "@/component/modules/home/components/CommentsSection";
import FaqSection from "@/component/modules/home/components/FaqSection";
import HeroSection from "@/component/modules/home/components/HeroSection";
import LastArticleSection from "@/component/modules/home/components/LastArticleSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastArticleSection />
      <AboutUsSection />
      <div className="w-full relative">
        <Image width={300} height={600} src="/images/vector-01.png" className="hidden md:block absolute z-0  -bottom-24 right-0 opacity-25" alt="vector" />
        <Image width={300} height={600} src="/images/vector-01.png" className="hidden md:block absolute z-0  -bottom-24 left-0 opacity-25" alt="vector" />
      </div>

      <CommentsSection />
      <AddCommentsSection />
      <AddressSection />
      <FaqSection />
    </>
  );
}
