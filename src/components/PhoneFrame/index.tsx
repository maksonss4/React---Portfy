import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

function PhoneFrame({ slide, delay }: IPhoneFrameProps) {
  return (
    <Phone slide={slide} delay={delay}>
      <span className="phone__detail"></span>
      <div className="phone__content"></div>
    </Phone>
  );
}

export default PhoneFrame;
