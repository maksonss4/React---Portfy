import { Global } from "./styles";
import { LandingPage } from "./pages/LandingPage";
import { Resgister } from "./pages/Register";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Global />
      <Post
        src="https://i.pinimg.com/736x/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg"
        h2="Raimundo"
        p="Boa tarde gente, esse sou eu, o raimundo, tenho 18 anos e sou dev frontendssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
      />
      {/* <LandingPage />
      <Resgister /> */}
    </div>
  );
}

export default App;
