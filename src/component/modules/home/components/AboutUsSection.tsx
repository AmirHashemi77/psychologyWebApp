import Image from "next/image";
import { FC } from "react";

const educationAndProfessionalBackground = [
  "دانشجویی دکتری روانشناسی علوم و تحقیقات تهران",
  "کارشناسی ارشد رشته روانشناسی از دانشگاه خوارزمی تهران",
  "کارشناسی رشته علوم تربیتی از دانشگاه علامه طباطبایی",
  "مولف ۸ جلد کتاب در زمینه‌های روانشناسی",
  "تدریس دروس مهارت‌های زندگی در دوره ابتدایی",
  "چاپ مقالات با موضوع روانشناسی در ماهنامه مرکز مشاوره شرکت ملی نفت",
];
const completedCourses = [
  "دوره رفتار درمانی - شناختی (CBT) در دانشگاه تهران",
  "دوره طرح واره درمانی",
  "دوره سبک‌های فرزندپروری در دانشگاه تهران",
  "دوره درمانی هیجان مدار",
  "دوره تشخیص و درمان اختلالات یادگیری در دانشگاه الزهراء",
];
const membershipsAndLicenses = [
  "عضو انجمن روانشناسی امریکا (APA)",
  "عضو سازمان نظام روانشناسی و مشاوره ایران",
  "عضو انجمن روانشناسی ایران",
  "عضو سرای اهل قلم",
  "دارای پروانه اشتغال از سازمان نظام روانشناسی و مشاوره ایران",
];

const AboutUsSection: FC = () => {
  return (
    <div className="main-container">
      <div className="section-container">
        <h4 className="title">درباره ما</h4>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 w-full h-screen">
          <div className="flex flex-col items-start gap-5 w-full xl:w-1/2 p-5 h-full overflow-y-auto no-scrollbar">
            <h5 className="text-primary-foreground text-center text-base md:text-xl lg:text-2xl font-vazir font-semibold my-5 ">مرضیه خمسه</h5>

            <p className="text-primary-foreground text-right font-bold  py-5 font-vazir leading-11">
              دکتر مرضیه خمسه یک روان درمانگر و روانشناس ایرانی عضو انجمن روانشناسی امریکا (APA) بیش از 16 سال تجربه در مشاوره (جلسات روان تحلیلی) به صورت حضوری و غیر حضوری (آنلاین) به ایرانیان داخل و
              خارج از کشور در زمینه های خدمات : روان درمانگر تحلیلی / زوج درمانگر / طرحواره درمانی روان درمانگر فردی و روابط بین فردی مشاوره قبل از ازدواج و پیش بینی مشاوره نوجوان و بلوغ مشاوره بهداشت
              روان کنترل ذهن و عدم تمرکز/ اضطراب / استرس / کمال گرایی افراطی مشاوره آنلاین و مشاوره تلفنی آموزش مهارتهای زندگی شامل: کنترل خشم و پرخاشگری، حل مسئله، عدم اعتماد به نفس، نه گفتن، روابط
              اجتماعی و…
            </p>
            <h5 className="text-primary-foreground text-center text-base md:text-xl lg:text-2xl font-vazir font-semibold my-5 ">سوابق تحصیل وحرفه ای:</h5>
            <div className="flex flex-row w-full flex-wrap gap-3 items-center px-3">
              {educationAndProfessionalBackground.map((item) => (
                <p key={item} className="p-3 bg-primary-foreground text-primary text-sm font-medium rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
            <h5 className="text-primary-foreground text-center text-base md:text-xl lg:text-2xl font-vazir font-semibold my-5 "> دوره های گذرانده شده:</h5>
            <div className="flex flex-row w-full flex-wrap gap-3 items-center px-3">
              {completedCourses.map((item) => (
                <p key={item} className="p-3 bg-primary-foreground text-primary text-sm font-medium rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
            <h5 className="text-primary-foreground text-center text-base md:text-xl lg:text-2xl font-vazir font-semibold my-5 ">عضویت در انجمن ها:</h5>
            <div className="flex flex-row w-full flex-wrap gap-3 items-center px-3">
              {membershipsAndLicenses.map((item) => (
                <p key={item} className="p-3 bg-primary-foreground text-primary text-sm font-medium rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative w-full xl:w-1/2 h-full rounded-2xl bg-transparent p-5">
            <Image fill objectFit="contain" alt="hero-img" src="/images/ChatGPT Image Sep 1, 2025, 12_50_04 PM.png" className="rounded-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsSection;
