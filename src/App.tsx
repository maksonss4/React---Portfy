import { Global } from "./styles";
// import { LandingPage } from "./pages/LandingPage";
import { Resgister } from "./pages/Register";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Global />
      <LandingPage />
      {/* <Resgister /> */}
    </div>
  );
}

export default App;
