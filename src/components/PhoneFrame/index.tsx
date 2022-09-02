import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

const PhoneFrame = ({ slide, delay, ...rest }: IPhoneFrameProps) => {
  const bgFrames = [
    "https://i.ibb.co/JCbpLNd/Dashboard.png",
    "https://i.ibb.co/fQF2kHt/Feed.png",
    "https://i.ibb.co/wsYLjFV/Curriculo.png",
    "https://i.ibb.co/m0XhH3w/News.png"
  ];

  return (
    <Phone slide={slide} frame={bgFrames} delay={delay} {...rest} >
      <div className="phone__detail"></div>
    </Phone>
  );
}

export default PhoneFrame;
