import AboutUsSection from "@/component/modules/home/components/AboutUsSection";
import AddCommentsSection from "@/component/modules/home/components/AddCommentsSection";
import AddressSection from "@/component/modules/home/components/AddressSection";
import CommentsSection from "@/component/modules/home/components/CommentsSection";
import FaqSection from "@/component/modules/home/components/FaqSection";
import HeroSection from "@/component/modules/home/components/HeroSection";
import LastArticleSection from "@/component/modules/home/components/LastArticleSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastArticleSection />
      <AboutUsSection />
      <CommentsSection />
      <AddCommentsSection />
      <AddressSection />
      <FaqSection />
    </>
  );
}
