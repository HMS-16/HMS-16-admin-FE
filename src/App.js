import "./App.css";
import { Provider } from "react-redux";
import Routers from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
