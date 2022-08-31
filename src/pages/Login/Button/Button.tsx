import { ButtonSTLD, IButtonSTLD } from "./Button.style";

const Button = ({
  backgroundColor = "transparent",
  fontColor = "#000",
  btWidth = "auto",
  btHeight = "auto",
  btMargin = "0",
  btPadding = "0",
  borderRadius = "0",
  borderColor = "#000",
  onClick,
  children,
}: IButtonSTLD) => {
  return (
    <ButtonSTLD
      onClick={onClick}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      btWidth={btWidth}
      btHeight={btHeight}
      btMargin={btMargin}
      btPadding={btPadding}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonSTLD>
  );
};

export default Button;
