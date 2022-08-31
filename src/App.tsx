import { Global } from "./styles";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <Global />
      {/*  <LandingPage />*/}
      <Login />
    </div>
  );
}

export default App;
