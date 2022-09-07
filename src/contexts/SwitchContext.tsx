import { createContext, useState } from "react";
import { IGeneralProps } from "../interfaces/components";
import { ISwitcherContext } from "../interfaces/contexts";
import { ISwitcher } from "../interfaces/pages";
import { IGeneralAnimations } from "../interfaces/styles";

export const SwitchContext = createContext<ISwitcherContext>(
  {} as ISwitcherContext
);

const SwitchProvider = ({ children }: IGeneralProps) => {
  const [screenSwitcher, setScreenSwitcher] = useState<ISwitcher>({
    login: false,
    register: false,
  });
  const [condicionModal, setCondicionlModal] = useState<boolean>(false);
  const [hideFL, setHideFL] = useState(true);
  const [animation, setAnimation] = useState<IGeneralAnimations>({
    form: "",
    friendList: "",
    text: "fade-in 1 250ms linear",
  });

  return (
    <SwitchContext.Provider
      value={{
        screenSwitcher,
        setScreenSwitcher,
        condicionModal,
        setCondicionlModal,
        animation,
        setAnimation,
        hideFL,
        setHideFL,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
