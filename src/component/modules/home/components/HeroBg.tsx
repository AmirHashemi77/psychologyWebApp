import { FC } from "react";
import "../style/animatebg.css";
const HeroBg: FC = () => {
  return (
    <div className="container">
      <div className="bound"></div>
      <div className="main_spinner">
        <div className="center_mass"></div>
        <div className="dot dot_1"></div>
        <div className="dot dot_2"></div>
      </div>
    </div>
  );
};
export default HeroBg;
