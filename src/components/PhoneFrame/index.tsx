import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

const PhoneFrame = ({ slide, delay, children, ...rest }: IPhoneFrameProps) => {
  return (
    <Phone slide={slide} delay={delay} {...rest}>
      {children}
    </Phone>
  );
};

export default PhoneFrame;
