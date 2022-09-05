import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles/index";
import Feed from "./pages/Feed";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Global />
      <SwitchProvider>
        <Feed />
      </SwitchProvider>
    </div>
  );
};

export default App;
