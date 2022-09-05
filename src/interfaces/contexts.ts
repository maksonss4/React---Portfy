import { ISwitcher } from "./pages";

export interface ISwitcherContext {
    screenSwitcher: ISwitcher;
    setScreenSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
}