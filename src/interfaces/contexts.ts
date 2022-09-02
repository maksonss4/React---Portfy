import { ISwitcher } from "./pages";

export interface ISwitcherContext {
    switcher: ISwitcher;
    setSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
}