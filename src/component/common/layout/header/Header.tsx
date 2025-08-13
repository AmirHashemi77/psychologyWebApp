import Link from "next/link";
import { FC } from "react";
import { BiSolidLogIn } from "react-icons/bi";

const navBarArr = [
  {
    title: "خانه",
    url: "/",
  },
  {
    title: "مقالات",
    url: "/article",
  },
  {
    title: "خدمات",
    url: "/services",
  },
  {
    title: "نوبت دهی",
    url: "/visit",
  },
  {
    title: "تماس با ما",
    url: "/contact-us",
  },
  {
    title: " درباره ما",
    url: "about-us",
  },
];

const Header: FC = () => {
  return (
    <header className="flex items-center justify-center fixed top-0 right-0 bg-black/70 z-50 w-full h-14 px-5">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <h1 className="text-[#fbefd8] font-bold">LOGO</h1>
        <ul className="flex items-center gap-5">
          {navBarArr.map((item) => (
            <li className="text-[#fbefd8] text-md  font-vazir" key={item.url}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <li></li>
        </ul>
        <div className="flex items-center gap-5">
          <Link href="/login" className="bg-[#fbefd8] rounded-lg p-0.5 hover:bg-[#fbefd8b0] transition-all">
            <BiSolidLogIn className="text-[#120b04] text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
