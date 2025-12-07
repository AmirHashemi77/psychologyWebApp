import AboutUsSection from "@/component/modules/AboutUs/AboutUsSection";
import HeroSection from "@/component/modules/home/HeroSection";
import Services from "@/component/modules/home/ServicesSection/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUsSection />
    </>
  );
}
