import { FC } from "react";
import AnimateCarousel from "@/component/common/animateCarousel/AnimateCarousel";
import AddressCard from "@/component/common/addressCard/AddressCard";

// interface PropsType {}
const clinics = [
  {
    title: "کلینیک سعادت آباد",
    address: "سعادت آباد، انتهای بلوار کوهستان",
    phone: "09304390117",
    image: "/images/ChatGPT Image Sep 1, 2025, 12_50_04 PM.png",
  },
  {
    title: "مطب شهرک غرب",
    address: "تهران، شهرک غرب، بلوار دادمان، روبروی خیابان درختی",
    phone: "09304390117",
    image: "/images/ChatGPT Image Sep 1, 2025, 12_50_04 PM.png",
  },
  {
    title: "مطب میدان پونک",
    address: "تهران، میدان پونک، ضلع شمال شرقی میدان پونک، کوچه رمضانی",
    phone: "09304390117",
    image: "/images/ChatGPT Image Sep 1, 2025, 12_50_04 PM.png",
  },
];

const AddressSection: FC = () => {
  return (
    <div className="main-container">
      <div className="flex flex-col items-center gap-5 my-10">
        <h4 className="title self-start">آخرین مقالات</h4>
        <div className="grid grid-cols-12  items-center justify-between gap-5">
          {clinics.map((item) => {
            return <AddressCard phone={item.phone} address={item.address} image={item.image} title={item.title} key={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AddressSection;
