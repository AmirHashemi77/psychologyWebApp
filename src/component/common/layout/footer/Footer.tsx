import Link from "next/link";
import { FC } from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-black p-5 mt-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-28 md:gap-10 md:flex-row w-full items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-32">
            <Link className="font-extrabold text-5xl text-[#fbefd8]" href="/">
              LOGO
            </Link>
            <div className="flex flex-col gap-2">
              <p className="text-[#fbefd8] text-3xl font-semibold font-vazir">دسترسی ها</p>
              <Link className="text-[#fbefd8] text-sm lg:text-lg font-vazir hover:text-[#fbefd8ce] transition-all duration-200" href="">
                سوالات متداول
              </Link>
              <Link className="text-[#fbefd8] text-sm lg:text-lg font-vazir hover:text-[#fbefd8ce] transition-all duration-200" href="">
                نوبت دهی
              </Link>
              <Link className="text-[#fbefd8] text-sm lg:text-lg font-vazir hover:text-[#fbefd8ce] transition-all duration-200" href="">
                مقالات
              </Link>
              <Link className="text-[#fbefd8] text-sm lg:text-lg font-vazir hover:text-[#fbefd8ce] transition-all duration-200" href="">
                درباره ما
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="text-[#fbefd8] text-xl font-semibold font-vazir">ما را دنبال کنید :</p>
            <div className="flex items-center gap-5">
              <Link href="">
                <FaFacebook className="text-3xl  text-[#fbefd8ce] hover:text-[#fbefd8] transition-all duration-200" />
              </Link>
              <Link href="">
                <FaInstagram className="text-3xl  text-[#fbefd8ce] hover:text-[#fbefd8] transition-all duration-200" />
              </Link>
              <Link href="">
                <FaWhatsapp className="text-3xl  text-[#fbefd8ce] hover:text-[#fbefd8] transition-all duration-200" />
              </Link>
              <Link href="">
                <FaTelegram className="text-3xl  text-[#fbefd8ce] hover:text-[#fbefd8] transition-all duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
