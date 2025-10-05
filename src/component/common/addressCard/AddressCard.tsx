"use client";
import { FC } from "react";
import Image from "next/image";
import { toPersianNumber } from "@/utils/ToPersionDigits";
import { motion } from "framer-motion";

interface PropsType {
  image: string;
  title: string;
  address: string;
  phone: string;
}

const AddressCard: FC<PropsType> = ({ image, address, phone, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center bg-hero p-10 gap-7 rounded-2xl shadow-2xl col-span-12 md:col-span-6 min-h-[500px]"
    >
      <div className="w-full h-72 relative rounded-2xl">
        <Image src={image} alt={title} fill objectFit="cover" objectPosition="center" className="rounded-2xl" />
      </div>
      <h5 className="text-center font-semibold font-vazir text-2xl text-primary-foreground">{title}</h5>
      <div className="flex items-start gap-3">
        <p className="text-start font-vazir text-md text-secondary-foreground font-semibold text-nowrap">آدرس :</p>
        <p className="text-start font-vazir text-md text-secondary-foreground">{address}</p>
      </div>
      <div className="flex items-start gap-3">
        <p className="text-start font-vazir text-md text-secondary-foreground font-semibold text-nowrap">شماره تماس :</p>
        <p className="text-start font-vazir text-md text-secondary-foreground">{toPersianNumber(phone)}</p>
      </div>
    </motion.div>
  );
};
export default AddressCard;
