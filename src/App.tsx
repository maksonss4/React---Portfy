import SwitchProvider from "./contexts/SwitchContext";
import AppRoutes from "./routes/routes";
import { Global } from "./styles";
//import { postList1 } from "./components/PostList/postTestes";
//import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="App">
      <SwitchProvider>
        <AppRoutes />
        {/*<PostList postList={postList1} />*/}
      </SwitchProvider>
      <Global />
    </div>
  );
};

export default App;
