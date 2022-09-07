import UsersAPI from "./backup/users";
import AuthProvider from "./contexts/AuthContext";
import NotificationProvider from "./contexts/NotificationContext";
import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles/index";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Global />
      <NotificationProvider>
        <AuthProvider>
          <SwitchProvider>
            <AppRoutes />
            {/* <Dashboard />*/}
          </SwitchProvider>
        </AuthProvider>
      </NotificationProvider>
    </div>
  );
};

export default App;
