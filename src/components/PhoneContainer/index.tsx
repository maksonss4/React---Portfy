import { Phone } from "../PhoneFrame/styles";
import { PhoneBox } from "./styles";

function PhoneContainer() {
  return (
    <PhoneBox>
      <Phone slide="top" delay={1000} />
      <div>
        <Phone slide="top" delay={1200} />
        <Phone slide="bottom" delay={1200} />
      </div>
      <Phone slide="bottom" delay={1500} />
    </PhoneBox>
  );
}

export default PhoneContainer;
