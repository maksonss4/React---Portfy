import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <div className="App">
      <Global />
      <SwitchProvider>
        {/*<AppRoutes />*/}
        <Feed />
      </SwitchProvider>
    </div>
  );
};

export default App;
