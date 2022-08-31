import { Global } from "./styles";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/Login/LoginPage";
import { Register } from "./pages/Register";
function App() {
  return (
    <div className="App">
      <Global />
      {/* <LandingPage /> */}
      <Register />
      {/* <Login /> */}
    </div>
  );
}

export default App;
