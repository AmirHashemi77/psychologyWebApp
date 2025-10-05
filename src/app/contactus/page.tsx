"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Divider from "@/component/common/Divider";

const ContactUs: FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="main-container">
      <div className="section-container">
        <div className="bg-card w-full p-5 rounded-xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              <h4 className="title">تماس با ما</h4>
              <div className="flex flex-col items-start w-full gap-2">
                <h4 className="text-primary-foreground text-center text-lg md:text-xl lg:text-2xl font-vazir font-semibold mb-8">آدرس مراجعه حضوری:</h4>
                <ul className="flex flex-col items-start gap-4">
                  <li className="text-primary-foreground text-center text-sm font-vazir font-medium">سعادت آباد، انتهای بلوار کوهستان</li>
                  <li className="text-primary-foreground text-center text-sm font-vazir font-medium">تهران، شهرک غرب، بلوار دادمان، روبروی خیابان درختی</li>
                  <li className="text-primary-foreground text-center text-sm font-vazir font-medium">تهران، میدان پونک، ضلع شمال شرقی میدان پونک، کوچه رمضانی</li>
                </ul>
                <div className="w-full my-10">
                  <Divider />
                </div>
                <h4 className="text-primary-foreground text-center text-lg md:text-xl lg:text-2xl font-vazir font-semibold mb-8"> شماره تماس و کانال تلگرام:</h4>
                <ul className="flex flex-col items-start gap-4">
                  <li className="text-primary-foreground text-center text-sm font-vazir font-medium">Psychologist_Khamseh@</li>
                  <li className="text-primary-foreground text-start text-sm font-vazir font-medium text-wrap">
                    مراجعین عزیز لطفا توجه کنید :حتما قبل از مراجعه به مطب با شماره ۰۹۳۰۴۳۹۰۱۱۷ در تلگرام بصورت ارسال پیام، هماهنگی لازم را انجام دهید.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[600px] relative">
              <Image fill src="/images/contactus.png" alt="contactus" className="object-cover object-center rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ContactUs;
