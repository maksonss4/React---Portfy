import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

const PhoneFrame = ({ slide, delay, children, ...rest }: IPhoneFrameProps) => {
  const { switcher } = useContext(SwitchContext);
  console.log(switcher)
  return (
    <Phone slide={slide} delay={delay} {...rest} >
      {children}
    </Phone>
  );
}

export default PhoneFrame;
