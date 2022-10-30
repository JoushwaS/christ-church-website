import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// IMPORTING REDUX PROVIDER
import { Provider } from "react-redux";
// GETTING STORE TO PROVIDE TO REDUX PROVIDER
import store from "./redux/store.js";
import { ToastContainer } from "react-toastify";

import Navigation from "./navigation/navigation";

// stylesheets

import "./assets/StyleSheets/Sass/global.scss";
function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="bottom-left"
          closeOnClick={true}
          pauseOnHover={false}
        />
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
