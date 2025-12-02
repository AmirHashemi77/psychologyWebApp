import AboutUsSection from "@/component/modules/AboutUs/AboutUsSection";
import HeroSection from "@/component/modules/Home/HeroSection";
import Services from "@/component/modules/Home/ServicesSection/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUsSection />
    </>
  );
}
