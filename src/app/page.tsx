import AboutUsSection from "@/component/modules/AboutUs/AboutUsSection";
import CommentSection from "@/component/modules/home-temp/CommentSection";
import HeroSection from "@/component/modules/home-temp/HeroSection";
import Services from "@/component/modules/home-temp/ServicesSection/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUsSection />
      <CommentSection />
    </>
  );
}
