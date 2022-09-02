import CardUser from "./components/CardUser";
import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";
import {MdAdd} from "react-icons/md"
import {HiPencil} from "react-icons/hi"
import {BsFilePdf} from "react-icons/bs"
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Global />
      <SwitchProvider>
        <AppRoutes />
      </SwitchProvider>
    </div>
  );
};

export default App;
