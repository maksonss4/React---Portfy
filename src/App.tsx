import AuthProvider from "./contexts/AuthContext";
import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles/index";

const App = () => {
  return (
    <div className="App">
      <Global />
      <AuthProvider>
        <SwitchProvider>
          <AppRoutes />
        </SwitchProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
