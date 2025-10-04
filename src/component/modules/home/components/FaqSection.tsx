"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "مشاوره روانشناسی چند جلسه طول می‌کشد؟",
    answer: "تعداد جلسات بسته به نوع مشکل و شرایط هر فرد متفاوت است. برخی مراجعین در چند جلسه به نتیجه می‌رسند و برخی نیاز به جلسات بیشتری دارند.",
  },
  {
    question: "مدت زمان هر جلسه چقدر است؟",
    answer: "معمولاً هر جلسه بین ۴۵ تا ۶۰ دقیقه طول می‌کشد.",
  },
  {
    question: "آیا امکان برگزاری جلسات به‌صورت آنلاین وجود دارد؟",
    answer: "بله، جلسات هم به‌صورت حضوری و هم آنلاین (تماس تصویری) برگزار می‌شوند.",
  },
  {
    question: "در چه زمینه‌هایی خدمات روانشناسی ارائه می‌دهید؟",
    answer: "خدمات شامل درمان اضطراب، افسردگی، مشکلات ارتباطی، مشاوره خانواده، درمان وسواس، مشاوره کودک و نوجوان و بهبود مهارت‌های فردی می‌باشد.",
  },
  {
    question: "آیا فقط بزرگسالان را پذیرش می‌کنید؟",
    answer: "خیر، علاوه بر بزرگسالان، کودکان و نوجوانان نیز پذیرش می‌شوند.",
  },
  {
    question: "چطور می‌توانم وقت مشاوره رزرو کنم؟",
    answer: "از طریق وب‌سایت و سیستم رزرو آنلاین می‌توانید وقت مشاوره انتخاب کنید. همچنین می‌توانید با شماره مطب تماس بگیرید.",
  },
  {
    question: "آیا امکان تغییر یا لغو وقت وجود دارد؟",
    answer: "بله، در صورت اطلاع قبلی، امکان تغییر یا لغو وقت وجود دارد.",
  },
  {
    question: "هزینه هر جلسه چقدر است؟",
    answer: "هزینه هر جلسه بسته به نوع مشاوره (حضوری یا آنلاین) و مدت زمان جلسه متفاوت است. جزئیات در بخش رزرو آنلاین نمایش داده می‌شود.",
  },
  {
    question: "آیا بیمه تکمیلی خدمات مشاوره را پوشش می‌دهد؟",
    answer: "برخی بیمه‌های تکمیلی بخشی از هزینه جلسات را پوشش می‌دهند. بهتر است با بیمه خود تماس بگیرید.",
  },
  {
    question: "آیا اطلاعات جلسات محرمانه باقی می‌ماند؟",
    answer: "بله، تمامی اطلاعات شما و محتوای جلسات کاملاً محرمانه بوده و فقط بین روانشناس و مراجعه‌کننده باقی می‌ماند.",
  },
  {
    question: "چه مدت طول می‌کشد تا نتیجه مشاوره مشخص شود؟",
    answer: "این موضوع بستگی به نوع مشکل، میزان همکاری فرد و استمرار در جلسات دارد. برخی تغییرات در چند جلسه و برخی در طولانی‌مدت قابل مشاهده‌اند.",
  },
  {
    question: "آیا همه افراد به یک اندازه از جلسات روانشناسی بهره می‌برند؟",
    answer: "اثربخشی جلسات بستگی به تعهد و همکاری فرد، نوع مشکل و شرایط زندگی او دارد. با این حال، اکثر افراد بهبود قابل توجهی را تجربه می‌کنند.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="main-container">
      <div className="flex flex-col items-center gap-5 my-10">
        <h4 className="title self-start">سوالات متداول</h4>
        <div className="flex flex-col items-center gap-5 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full border-2 border-primary-foreground text-primary-foreground rounded-2xl shadow-sm font-vazir">
              <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-4 text-right">
                <span className="font-medium font-vazir">{faq.question}</span>
                <span className="ml-2 text-primary-foreground font-vazir text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div key="content" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                    <div className="p-4 text-primary-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
