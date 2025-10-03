import { FC } from "react";

const AddCommentsSection: FC = () => {
  return (
    <div className="main-container">
      <div className="section-container">
        <h4 className="title">تجربه ات را اضافه کن</h4>
        <div className="bg-card w-1/2 p-5 rounded-xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-start gap-3 w-full">
              <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> نام:</p>
              <input type="text" className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
            </div>
            <div className="flex flex-col items-start gap-3 w-full">
              <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> ایمیل :</p>
              <input type="text" className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
            </div>
            <div className="flex flex-col items-start gap-3 w-full">
              <p className="text-sm text-card-foreground font-medium px-3 font-vazir"> نظر شما :</p>
              <textarea className="border-2 border-card-foreground rounded-2xl p-2 w-full text-primary-foreground font-vazir focus:outline-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCommentsSection;
