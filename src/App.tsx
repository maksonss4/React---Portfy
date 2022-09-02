import SwitchProvider from "./contexts/SwitchContext";
import Feed from "./pages/Feed";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";

const App = () => {
  return (
    <div className="App">
      <Global />
      <SwitchProvider>
        {/* <AppRoutes /> */}
        <Feed />
      </SwitchProvider>
    </div>
  );
};

export default App;
