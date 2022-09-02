import { Phone } from "../PhoneFrame/styles";
import { PhoneBox, PhoneContent } from "./styles";

const PhoneContainer = () => {
  return (
    <PhoneBox>
      <Phone slide="top" delay={1000} className="main">
        <span></span>
        <PhoneContent aSettings="picture-transition-1 infinite 26s linear" />
      </Phone>
      <div>
        <Phone slide="top" delay={1200}>
          <span></span>
          <PhoneContent aSettings="picture-transition-2 infinite 28s linear" />
        </Phone>
        <Phone slide="bottom" delay={1200}>
          <span></span>
          <PhoneContent aSettings="picture-transition-3 infinite 30s linear" />
        </Phone>
      </div>
      <Phone slide="bottom" delay={1500}>
        <span></span>
        <PhoneContent aSettings="picture-transition-4 infinite 32s linear" />
      </Phone>
    </PhoneBox>
  );
};

export default PhoneContainer;
