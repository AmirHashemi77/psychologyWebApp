import Image from "next/image";
import { FC } from "react";

const FooterLogo: FC = () => {
  return <Image width={150} height={250} src="/images/whiteLogo.svg" className="my-5" alt="logo" />;
};
export default FooterLogo;
