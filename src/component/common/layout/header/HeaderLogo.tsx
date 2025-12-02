import Image from "next/image";
import { FC } from "react";

const HeaderLogo: FC = () => {
  return <Image width={90} height={190} src="/images/whiteLogo.svg" className="my-5" alt="logo" />;
};
export default HeaderLogo;
