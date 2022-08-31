import React from "react";
import { Global } from "./styles";
import { LandingPage } from "./components/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Global />
      <LandingPage />
    </div>
  );
}

export default App;
