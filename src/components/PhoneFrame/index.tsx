import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

const PhoneFrame = ({ slide, delay, children, main }: IPhoneFrameProps) => {
  return (
    <Phone slide={slide} delay={delay} className={main ? "main" : undefined}>
      <span className="phone__detail"></span>
      {children}
    </Phone>
  );
}

export default PhoneFrame;
