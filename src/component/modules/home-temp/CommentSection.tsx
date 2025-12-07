import AnimationSlider from "@/component/common/animatedSlider/AnimationSlider";
import { FC } from "react";

const CommentSection: FC = () => {
  return (
    <div className=" w-full px-5 mt-44 mx-auto">
      <div className="flex flex-col items-center gap-5 w-full">
        <h3 className="text-foreground font-bold font-vazir text-4xl mb-3">نــظــرات مـــراجـعیــن</h3>
        <AnimationSlider />
      </div>
    </div>
  );
};
export default CommentSection;
