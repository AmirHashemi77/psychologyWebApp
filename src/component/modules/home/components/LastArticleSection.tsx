import Card from "@/component/common/Card/Card";
import { FC } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    image: "/images/Hero/heroImg.png",
    title: "چطور استرس روزانه را مدیریت کنیم؟",
    subtitle: "راهنمایی برای آرامش ذهن",
    description: "در این مقاله با روش‌های علمی و کاربردی برای کاهش استرس آشنا می‌شوید تا بتوانید کیفیت زندگی خود را بهبود دهید.",
    tag: "مدیریت استرس",
  },
  {
    id: "2",
    image: "/images/Hero/heroImg.png",
    title: "اهمیت خواب کافی در سلامت روان",
    subtitle: "چگونه بهتر بخوابیم؟",
    description: "خواب کافی یکی از ارکان مهم سلامت روان است. در این مقاله راهکارهایی برای بهبود کیفیت خواب بررسی می‌کنیم.",
    tag: "سلامت روان",
  },
  {
    id: "3",
    image: "/images/Hero/heroImg.png",
    title: "مدیتیشن برای شروع روز",
    subtitle: "۵ دقیقه آرامش",
    description: "مدیتیشن کوتاه صبحگاهی می‌تواند سطح انرژی و تمرکز شما را برای کل روز افزایش دهد. روش انجام را بخوانید.",
    tag: "مدیتیشن",
  },
  {
    id: "4",
    image: "/images/Hero/heroImg.png",
    title: "تقویت عزت نفس در زندگی روزمره",
    subtitle: "اعتماد به نفس بسازید",
    description: "با انجام تمرین‌های ساده روزانه، می‌توانید عزت نفس خود را افزایش دهید و با چالش‌های زندگی راحت‌تر روبه‌رو شوید.",
    tag: "رشد فردی",
  },
  {
    id: "5",
    image: "/images/Hero/heroImg.png",
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
        <div className="flex flex-row items-center justify-between flex-wrap gap-10">
          {DUMMY_DATA.map((item) => {
            return <Card id={item.id} image={item.image} title={item.title} decription={item.description} subTitle={item.subtitle} tag={item.tag} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default LastArticleSection;
