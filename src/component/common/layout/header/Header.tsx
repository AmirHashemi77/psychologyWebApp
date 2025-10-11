"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../sidebar/Sidebar";
import HeaderLogo from "./HeaderLogo";

const navBarArr = [
  {
    title: "خانه",
    url: "/",
  },
  {
    title: "مقالات",
    url: "/blogs",
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
    url: "/contactus",
  },
  {
    title: " درباره ما",
    url: "aboutus",
  },
];

const Header: FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="flex items-center justify-center fixed top-0 right-0 bg-black/60 z-50 w-full h-14 px-5">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* <h1 className="hidden lg:block text-primary-foreground font-bold">LOGO</h1> */}
        <HeaderLogo />
        <ul className="hidden lg:flex items-center gap-5">
          {navBarArr.map((item) => (
            <li className="text-primary-foreground text-md  font-vazir" key={item.url}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          {/* <li></li> */}
        </ul>

        <div className="flex items-center gap-5">
          <Link href="/logIn" className="bg-primary-foreground rounded-lg p-0.5 hover:bg-[#fbefd8b0] transition-all">
            <BiSolidLogIn className="text-primary text-2xl" />
          </Link>
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden bg-primary-foreground rounded-lg p-0.5 hover:bg-[#fbefd8b0] transition-all">
            <GiHamburgerMenu className="text-primary text-2xl" />
          </button>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </header>
  );
};
export default Header;
