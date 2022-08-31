import { MouseEventHandler, ReactNode } from "react";
import { ButtonSTLD, IButtonSTLD } from "./Button.style";

export interface IButton extends IButtonSTLD {
  children: ReactNode;
  onClick?: MouseEventHandler;
  type?: string;
}

const Button = ({
  backgroundColor = "transparent",
  fontColor = "#fff",
  btWidth = "auto",
  btHeight = "auto",
  btMargin = "0",
  btPadding = "0",
  borderRadius = "0",
  onClick,
  children,
}: IButton) => {
  return (
    <ButtonSTLD
      onClick={onClick}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      btWidth={btWidth}
      btHeight={btHeight}
      btMargin={btMargin}
      btPadding={btPadding}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonSTLD>
  );
};

export default Button;
