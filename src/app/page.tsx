import AboutUsSection from "@/component/modules/home/components/AboutUsSection";
import AddCommentsSection from "@/component/modules/home/components/AddCommentsSection";
import AddressSection from "@/component/modules/home/components/AddressSection";
import CommentsSection from "@/component/modules/home/components/CommentsSection";
import FaqSection from "@/component/modules/home/components/FaqSection";
import HeroSection from "@/component/modules/home/components/HeroSection";
import LastArticleSection from "@/component/modules/home/components/LastArticleSection";
import Image from "next/image";

export default function Home() {
  const copy = async () => {
    await navigator.clipboard.writeText(
      "vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICLwn4ep8J+HqkBmcmVlX3dvcmxsZC1WNDI5IiwKICAiYWRkIjogImdhbGxlcnk0LmZyZWV3b3JsbGQtaXIubmV0IiwKICAicG9ydCI6IDM1OTE4LAogICJpZCI6ICJhZDliMTM1Ni0yYzYwLTRhZjYtYTE5ZS0wZTJkMTUyZjE0ZGMiLAogICJzY3kiOiAiYXV0byIsCiAgIm5ldCI6ICJ0Y3AiLAogICJ0eXBlIjogIm5vbmUiLAogICJ0bHMiOiAibm9uZSIKfQ=="
    );
  };
  return (
    <>
      <HeroSection />
      <LastArticleSection />
      <AboutUsSection />
      <div className="w-full relative hidden 2xl:block">
        <Image width={300} height={600} src="/images/vector-01.png" className=" absolute z-0  -bottom-24 right-0 opacity-25" alt="vector" />
        <Image width={300} height={600} src="/images/vector-01.png" className=" absolute z-0  -bottom-24 left-0 opacity-25" alt="vector" />
      </div>
      <CommentsSection />
      <AddCommentsSection />
      <AddressSection />
      <FaqSection />
      <button>کپی</button>
    </>
  );
}
