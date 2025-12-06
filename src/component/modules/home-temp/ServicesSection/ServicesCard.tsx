import { FC } from "react";

interface Iprops {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const ServicesCard: FC<Iprops> = ({ icon, subtitle, title }) => {
  return (
    <div className="flex flex-col items-center gap-5 h-[200px] w-full md:w-1/2 lg:w-1/3 p-5 shrink-0">
      {icon}
      <h3 className="text-center font-semibold font-vazir text-foreground">{title}</h3>
      <p className="text-center font-semibold font-vazir text-foreground/50">{subtitle}</p>
    </div>
  );
};
export default ServicesCard;
