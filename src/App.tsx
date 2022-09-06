import UsersAPI from "./backup/users";
import AuthProvider from "./contexts/AuthContext";
import NotificationProvider from "./contexts/NotificationContext";
import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";

const App = () => {
  return (
    <div className="App">
      <Global />
      <NotificationProvider>
        <AuthProvider>
          <SwitchProvider>
            {/* <AppRoutes /> */}
            <UsersAPI />
          </SwitchProvider>
        </AuthProvider>
      </NotificationProvider>
    </div>
  );
};

export default App;
