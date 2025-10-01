import { FC } from "react";

const SignUpForm: FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex flex-col items-start gap-3 w-[90%]">
        <p className="text-sm text-card-foreground font-medium px-3 font-vazir">نام کاربری:</p>
        <input className="border-2 border-card-foreground rounded-2xl p-2 w-full text-card-foreground font-vazir " />
      </div>
      <div className="flex flex-col items-start gap-3 w-[90%]">
        <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> ایمیل:</p>
        <input className="border-2 border-card-foreground rounded-2xl p-2 w-full text-card-foreground font-vazir " />
      </div>
      <div className="flex flex-col items-start gap-3 w-[90%]">
        <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> رمز عبور:</p>
        <input type="password" className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir" />
      </div>
      <div className="flex flex-col items-start gap-3 w-[90%]">
        <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> شماره همراه:</p>
        <input className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir" />
      </div>
      <div className="flex flex-col lg:flex-row items-center w-[90%] gap-5 my-3">
        <button className="bg-card-foreground text-lg w-full rounded-2xl font-semibold font-vazir  p-2 cursor-pointer  text-card">ثبت نام</button>
      </div>
    </div>
  );
};
export default SignUpForm;
