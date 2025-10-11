"use client";
import Card from "@/component/common/Card/Card";
import { FC } from "react";
import { motion } from "framer-motion";
import { toPersianNumber } from "@/utils/ToPersionDigits";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const DUMMY_DATA = [
  {
    id: "1",
    image: "/images/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png",
    title: "چطور استرس روزانه را مدیریت کنیم؟",
    subtitle: "راهنمایی برای آرامش ذهن",
    description: "در این مقاله با روش‌های علمی و کاربردی برای کاهش استرس آشنا می‌شوید تا بتوانید کیفیت زندگی خود را بهبود دهید.",
    tag: "مدیریت استرس",
  },
  {
    id: "2",
    image: "/images/ChatGPT Image Aug 15, 2025, 03_13_18 PM.png",
    title: "اهمیت خواب کافی در سلامت روان",
    subtitle: "چگونه بهتر بخوابیم؟",
    description: "خواب کافی یکی از ارکان مهم سلامت روان است. در این مقاله راهکارهایی برای بهبود کیفیت خواب بررسی می‌کنیم.",
    tag: "سلامت روان",
  },
  {
    id: "3",
    image: "/images/ChatGPT Image Aug 15, 2025, 03_21_42 PM.png",
    title: "مدیتیشن برای شروع روز",
    subtitle: "۵ دقیقه آرامش",
    description: "مدیتیشن کوتاه صبحگاهی می‌تواند سطح انرژی و تمرکز شما را برای کل روز افزایش دهد. روش انجام را بخوانید.",
    tag: "مدیتیشن",
  },
  {
    id: "4",
    image: "/images/ChatGPT Image Aug 15, 2025, 03_52_25 PM.png",
    title: "تقویت عزت نفس در زندگی روزمره",
    subtitle: "اعتماد به نفس بسازید",
    description: "با انجام تمرین‌های ساده روزانه، می‌توانید عزت نفس خود را افزایش دهید و با چالش‌های زندگی راحت‌تر روبه‌رو شوید.",
    tag: "رشد فردی",
  },
  {
    id: "5",
    image: "/images/ChatGPT Image Aug 15, 2025, 04_05_41 PM.png",
    title: "تأثیر شبکه‌های اجتماعی بر سلامت روان",
    subtitle: "فرصت یا تهدید؟",
    description: "در این مقاله بررسی می‌کنیم که چگونه استفاده از شبکه‌های اجتماعی می‌تواند هم به نفع و هم به ضرر سلامت روان باشد.",
    tag: "روانشناسی اجتماعی",
  },
];

const BlogsList: FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="main-container my-10">
      <div className="section-container">
        <h4 className="title">مقالات</h4>
        <div className="flex items-center justify-between gap-5 flex-wrap">
          {DUMMY_DATA.map((item) => {
            return <Card id={item.id} image={item.image} title={item.title} decription={item.description} subTitle={item.subtitle} tag={item.tag} key={item.id} />;
          })}
        </div>
        <ul className="relative w-full px-5 py-2 my-10 max-w-lg bg-card-foreground shadow-2xl rounded-3xl flex flex-row-reverse items-center justify-center gap-5 self-center">
          <div className="flex items-center justify-center cursor-pointer text-xl font-medium font-vazir text-center  rounded-full w-10 h-10 bg-card ">
            <FaChevronLeft className="text-card-foreground" />
          </div>
          <li className="flex items-center justify-center cursor-pointer text-xl font-medium font-vazir text-center text-card-foreground rounded-full w-10 h-10 bg-card ">{toPersianNumber(2)}</li>
          <span className="flex items-center justify-center text-card font-bold font-vazir w-10 h-10"> از</span>
          <li className="flex items-center justify-center cursor-pointer text-xl font-medium font-vazir text-center text-card-foreground rounded-full w-10 h-10 bg-card ">{toPersianNumber(10)}</li>
          <div className="flex items-center justify-center cursor-pointer text-xl font-medium font-vazir text-center  rounded-full w-10 h-10 bg-card ">
            <FaChevronRight className="text-card-foreground" />
          </div>
        </ul>
      </div>
    </motion.div>
  );
};
export default BlogsList;
