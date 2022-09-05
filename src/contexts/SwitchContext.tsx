import { createContext, useState } from "react";
import { IGeneralProps } from "../interfaces/components";
import { ISwitcherContext } from "../interfaces/contexts";
import { ISwitcher } from "../interfaces/pages";


export const SwitchContext = createContext<ISwitcherContext>({} as ISwitcherContext);

const SwitchProvider = ({ children }: IGeneralProps) => {
  const [screenSwitcher, setScreenSwitcher] = useState<ISwitcher>({
    login: false,
    register: false,
  });
  const [condicionModal, setCondicionlModal] = useState<boolean>(false);

  return (
    <SwitchContext.Provider value={{screenSwitcher, setScreenSwitcher, condicionModal, setCondicionlModal}}>{children}</SwitchContext.Provider>
  );
};

export default SwitchProvider;
