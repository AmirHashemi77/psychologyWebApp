import type { FC, SetStateAction } from "react";
// import { useRegisterStore } from "../../../store/register/store";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdArticle, MdClose } from "react-icons/md";
// import HeaderLogo from "../header/HeaderLogo";
import SideBarItem from "./SliderBarItem";
import { FaUserDoctor } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

interface Iprops {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<Iprops> = ({ isSidebarOpen, setSidebarOpen }) => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //       setSidebarOpen(true);
  //     } else {
  //       setSidebarOpen(false);
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const verifyToken = useRegisterStore((state) => state.verifyToken);

  const data = [
    {
      href: "/",
      icon: <FaHome className="text-primary-foreground" />,
      title: "خانه",
      dropdownItems: [],
    },
    // {
    //   href: verifyToken ? "/profile" : "/register",
    //   icon: verifyToken ? <IoPersonSharp className="text-primary" /> : <RiLoginBoxFill className="text-primary" />,
    //   title: verifyToken ? "پروفایل" : "ورود / ثبت نام",
    //   dropdownItems: [],
    // },
    {
      href: "/services",
      icon: <FaUserDoctor className="text-primary-foreground" />,
      title: "خدمات",
      dropdownItems: [],
    },
    {
      href: "#",
      icon: <IoIosHelpCircle className="text-primary-foreground" />,
      title: "نوبت دهی",
      dropdownItems: [],
    },
    {
      href: "#",
      icon: <MdArticle className="text-primary-foreground" />,
      title: "مقالات",
      dropdownItems: [],
    },
    {
      href: "#",
      icon: <TbFileCv className="text-primary-foreground" />,
      title: "درباره ما",
      dropdownItems: [],
    },
    {
      href: "#",
      icon: <FaPhoneAlt className="text-primary-foreground" />,
      title: "تماس ما",
      dropdownItems: [],
    },
  ];

  return (
    <>
      {isSidebarOpen && <div className="md:hidden fixed inset-0 bg-black/80   z-30" onClick={() => setSidebarOpen(false)} />}
      <div className={`md:hidden fixed top-0 right-0 z-50 w-72 shadow-md rounded-md h-screen transition-transform duration-700 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} `}>
        <div className="h-full px-3 py-4  z-[1000003] bg-primary ">
          <MdClose className="md:hidden cursor-pointer text-primary-foreground w-5 h-5 fixed left-3 top-5" onClick={() => setSidebarOpen(false)} />
          <div className="fixed right-3 top-4">
            <h1 className=" text-primary-foreground font-bold">LOGO</h1>
          </div>
          <div className="w-full mt-14 flex flex-col items-center">
            {data.map((item, index) => (
              <SideBarItem key={index} href={item.href} icon={item.icon} title={item.title} dropdownItems={item.dropdownItems} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
