import CardUser from "./components/CardUser";
import SwitchProvider from "./contexts/SwitchContext";
import Feed from "./pages/Feed";
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
        {/* <AppRoutes /> */}
        {/* <Feed /> */}
        <Dashboard/>
        {/* <CardUser iconMore={<MdAdd/>} iconPencil={<HiPencil/>} iconPaper={<BsFilePdf/>}/> */}
      </SwitchProvider>
    </div>
  );
};

export default App;
