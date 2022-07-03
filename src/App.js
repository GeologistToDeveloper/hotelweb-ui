import { Fragment } from "react";
import { Provider } from "react-redux";
// import AdminRoutes from "./routes/AdminRoutes";
// import CustomerRoutes from "./routes/CustomerRoutes";
import store from "./store/store";
import AllRoutes from "./routes/AllRoutes";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <NavBar/>
        <AllRoutes />
      </Provider>
    </Fragment>
  );
}

export default App;
