"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AddCommentsSection: FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="main-container">
      <div className="section-container">
        <h4 className="title">تجربه ات را اضافه کن</h4>
        <div className="bg-card w-full p-5 rounded-xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              <div className="flex flex-col items-start gap-3 w-full">
                <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> نام:</p>
                <input type="text" className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> ایمیل :</p>
                <input type="text" className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> نظر شما :</p>
                <textarea className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
              </div>
              <button className="bg-card-foreground text-card rounded-2xl px-4 py-3 w-full font-vazir text-center font-medium my-5 cursor-pointer">ثبت نظر</button>
            </div>
            <div className="w-full lg:w-1/2 h-[600px] relative">
              <Image fill src="/images/comment.png" alt="comment" className="object-cover object-center rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AddCommentsSection;
