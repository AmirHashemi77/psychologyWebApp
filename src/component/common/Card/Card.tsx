import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PropsType {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  decription: string;
  tag: string;
}

const Card: FC<PropsType> = ({ id, image, title, subTitle, decription, tag }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-xl bg-hero w-full lg:w-[40%] h-[800px] md:h-[650px] shadow-2xl shadow-black flex-shrink-0">
      <div className="relative w-full h-[50%] overflow-hidden">
        <Image alt={tag} src={image} fill className="rounded-xl hover:scale-110 transition-all duration-300" objectFit="cover" objectPosition="center" />
      </div>
      <div className="flex flex-col items-start justify-between gap-5 p-5 h-1/2">
        <div className="flex items-start flex-col  w-full gap-4 flex-wrap">
          <h5 className="text-start font-semibold font-vazir text-xl text-primary-foreground">{title}</h5>
          <Link
            href=""
            className="border-2 border-primary-foreground bg-transparent rounded-3xl px-6 py-2 text-primary-foreground font-vazir text-nowrap hover:text-primary hover:bg-primary-foreground transition-all duration-300 font-semibold"
          >
            {tag}
          </Link>
        </div>
        <p className="text-start font-vazir text-lg text-secondary-foreground">{subTitle}</p>
        <p className="text-start font-vazir text-md text-secondary-foreground">{decription}</p>
        <Link href={`/blog/${id}`} className=" bg-primary-foreground rounded-3xl px-6 py-2 text-primary font-vazir font-semibold hover:scale-110 transition-all duration-300">
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
};
export default Card;
