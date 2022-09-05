import React from "react";
import { ISwitcher } from "./pages";
// export interface ICondicionalModal {
//     profile: boolean, 
//     addTech: boolean, 
//     updateTech: boolean 
//   }
export interface ISwitcherContext {
    switcher: ISwitcher;
    setSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
    condicionModal: boolean;
    setCondicionlModal: React.Dispatch<React.SetStateAction<boolean>>
    
}