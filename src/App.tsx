import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles/index";


const App = () => {
  return (
    <div className="App">
      <Global />
      <SwitchProvider>
        <AppRoutes />{" "}
      </SwitchProvider>
    </div>
  );
};

export default App;
