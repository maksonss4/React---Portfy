import { Global } from "./styles";
import { LandingPage } from "./pages/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Global />
      <LandingPage />
    </div>
  );
};

export default App;
