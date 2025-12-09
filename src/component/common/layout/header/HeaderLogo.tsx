import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HeaderLogo: FC = () => {
  return (
    <Link href="/">
      <Image width={90} height={190} src="/images/whiteLogo.svg" className="my-5" alt="logo" />
    </Link>
  );
};
export default HeaderLogo;
