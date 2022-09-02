
import React from 'react';
import LandingPage from "./pages/LandingPage";
import { Global } from "./styles";

const App = () => {
  return (
    <div className="App">
      <Global />
      <LandingPage />
    </div>
  );
}

export default App;
