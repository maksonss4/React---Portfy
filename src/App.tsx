import { Global } from "./styles";
import AppRoutes from "./routes/routes";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <div className="App">
      <Global />
      <Feed />
      {/* <AppRoutes /> */}
      
    </div>
  );
};

export default App;
