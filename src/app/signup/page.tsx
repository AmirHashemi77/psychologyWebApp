import SignUpForm from "@/component/modules/signup/SignUpForm";
import Image from "next/image";
import { FC } from "react";

const SignUp: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full max-w-4xl mx-auto px-5">
      <div className="flex item-center flex-col-reverse lg:flex-row gap-10  bg-card rounded-2xl p-5 shadow-2xl w-full my-40">
        <div className="flex flex-col items-center gap-5 lg:w-1/2 w-full">
          <h3 className="text-2xl text-center text-card-foreground font-bold font-vazir my-5"> ایجاد حساب کاربری</h3>
          <SignUpForm />
        </div>
        <div className="lg:w-1/2 w-full max-lg:h-56  relative ">
          <Image src="/images/ChatGPT Image Aug 15, 2025, 03_52_25 PM.png" alt="login" fill className="object-fill rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
