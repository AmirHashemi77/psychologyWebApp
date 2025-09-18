import CommentCard from "@/component/common/commentCard/CommentCard";
import AboutUsSection from "@/component/modules/home/components/AboutUsSection";
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
    </>
  );
}
