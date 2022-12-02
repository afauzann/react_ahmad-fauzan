import logo from "./logo.svg";
import "./App.css";
import SetupRouters from "./routers/SetupRouters";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <SetupRouters />
      </Provider>
    </>
  );
}

export default App;
