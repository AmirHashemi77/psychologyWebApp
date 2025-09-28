import AboutUsSection from "@/component/modules/home/components/AboutUsSection";
import AddressSection from "@/component/modules/home/components/AddressSection";
import CommentsSection from "@/component/modules/home/components/CommentsSection";
import HeroSection from "@/component/modules/home/components/HeroSection";
import LastArticleSection from "@/component/modules/home/components/LastArticleSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastArticleSection />
      <AboutUsSection />
      <CommentsSection />
      <AddressSection />
    </>
  );
}
