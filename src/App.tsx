import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";

const App = () => {
  return (
    <div className="App">
      <SwitchProvider>
        <AppRoutes />
      </SwitchProvider>
      <Global />
    </div>
  );
};

export default App;
