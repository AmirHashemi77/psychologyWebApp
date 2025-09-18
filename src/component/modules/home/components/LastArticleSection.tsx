import Card from "@/component/common/card/Card";
import CardSlider from "@/component/common/cardSlider/CardSlider";
import { FC } from "react";

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

const LastArticleSection: FC = () => {
  return (
    <div className="main-container">
      <div className="section-container">
        <h4 className="title">آخرین مقالات</h4>
        {/* <div className="flex flex-row items-center justify-between flex-wrap gap-10"> */}
        <CardSlider>
          {DUMMY_DATA.map((item) => {
            return <Card id={item.id} image={item.image} title={item.title} decription={item.description} subTitle={item.subtitle} tag={item.tag} key={item.id} />;
          })}
        </CardSlider>
        {/* </div> */}
      </div>
    </div>
  );
};
export default LastArticleSection;
