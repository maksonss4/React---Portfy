import { IGeneralProps } from "../../interfaces/components";
import { Phone } from "../PhoneFrame/styles";
import { PhoneBox } from "./styles";

const PhoneContainer = ({children}: IGeneralProps) => {
  return (
    <PhoneBox>
      <Phone slide="top" delay={1000} className="main">
        {children}
      </Phone>
      <div>
        <Phone slide="top" delay={1200} />
        <Phone slide="bottom" delay={1200} />
      </div>
      <Phone slide="bottom" delay={1500} />
    </PhoneBox>
  );
}

export default PhoneContainer;
