import { Global } from "./styles";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <Global />
      <AppRoutes />
    </div>
  );
}

export default App;
