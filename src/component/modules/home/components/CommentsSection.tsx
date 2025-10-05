"use client";

import CardSlider from "@/component/common/cardSlider/CardSlider";
import CommentCard from "@/component/common/commentCard/CommentCard";
import { FC } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    author: "مریم رضایی",
    comment: "دکتر خیلی با حوصله و دقیق به صحبت‌هام گوش دادن و راهکارهای عملی ارائه کردن.",
    date: "1402/10/15",
    reason: "مشاوره اضطراب",
    stars: 5,
  },
  {
    id: 2,
    author: "علی مرادی",
    comment: "فضای کلینیک آرامش‌بخش بود، فقط کمی زمان انتظار زیاد شد.",
    date: "1402/11/02",
    reason: "مشاوره افسردگی",
    stars: 4,
  },
  {
    id: 3,
    author: "سارا محمدی",
    comment: "خیلی از جلسه مشاوره راضی بودم، احساس می‌کنم دیدگاه تازه‌ای گرفتم.",
    date: "1402/11/20",
    reason: "مشاوره روابط",
    stars: 5,
  },
  {
    id: 4,
    author: "حسین کریمی",
    comment: "دکتر محترم بودن ولی انتظار داشتم بیشتر به جزئیات مشکل بپردازن.",
    date: "1402/12/05",
    reason: "مشاوره شغلی",
    stars: 3,
  },
  {
    id: 5,
    author: "نگار احمدی",
    comment: "جلسه خیلی کمکم کرد، الان بهتر می‌تونم استرسم رو مدیریت کنم.",
    date: "1402/12/18",
    reason: "مدیریت استرس",
    stars: 5,
  },
];

const CommentsSection: FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="main-container">
      <div className="section-container">
        <h4 className="title">تجربه مراجعین</h4>
        {/* <div className="flex flex-row items-center justify-between flex-wrap gap-10"> */}
        <CardSlider>
          {reviews.map((item) => {
            return <CommentCard auther={item.author} comment={item.comment} date={item.date} reason={item.reason} stars={item.stars} key={item.id} />;
          })}
        </CardSlider>
        {/* </div> */}
      </div>
    </motion.div>
  );
};
export default CommentsSection;
