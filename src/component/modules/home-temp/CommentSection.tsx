import AnimationSlider from "@/component/common/AnimatedSlider/AnimationSlider";
import Image from "next/image";
import { FC } from "react";

const CommentSection: FC = () => {
  return (
    <div className=" w-full px-5 mt-32 mx-auto overflow-hidden relative">
      <Image src="/images/vector.png" width={500} height={400} alt="comment" className="hidden lg:block absolute -left-20 -top-20 2xl:top-0 -z-10 opacity-50 rotate-45" />
      <div className="flex flex-col items-center gap-5 w-full">
        <h3 className="text-foreground font-bold font-vazir text-3xl md:text-4xl ">نــظــرات مـــراجـعیــن</h3>
        <p className="text-xl text-foreground/70 font-medium font-vazir">آنـــچه مراجــعین دربـاره تـجربــه‌شان مــــی‌گویــند</p>
        <AnimationSlider />
      </div>
    </div>
  );
};
export default CommentSection;
