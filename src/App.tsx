import { Global } from "./styles";
import { LandingPage } from "./pages/LandingPage";
import { postList1 } from "./components/PostList/postTestes";
import PostList from "./components/PostList";
const App = () => {
  return (
    <div className="App">
      <Global />
      {/* <LandingPage />*/}
      {/*<PostList postList={postList1} />*/}
    </div>
  );
};

export default App;
