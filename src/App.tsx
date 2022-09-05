import CardUser from "./components/CardUser";
import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";

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
