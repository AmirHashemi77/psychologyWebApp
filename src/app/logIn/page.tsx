"use client";
import LogInForm from "@/component/modules/login/LogInForm";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const LogIn: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-5"
    >
      <div className="flex item-center flex-col-reverse lg:flex-row gap-10  bg-card rounded-2xl p-5 shadow-2xl w-full my-40">
        <div className="flex flex-col items-center gap-5 lg:w-1/2 w-full">
          <h3 className="text-2xl text-center text-card-foreground font-bold font-vazir my-5">ورود به حساب کاربری</h3>
          <LogInForm />
        </div>
        <div className="lg:w-1/2 w-full max-lg:h-56  relative ">
          <Image src="/images/10.png" alt="login" fill className="object-cover rounded-2xl" />
        </div>
      </div>
    </motion.div>
  );
};
export default LogIn;
