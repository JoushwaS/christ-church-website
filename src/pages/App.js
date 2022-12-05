import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

// NAVIGATIONS
import LoadingScreen from "./screens/loading";

// MAIN STYLING
import "../assets/scss/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const Navigation = lazy(() => import("../navigation/navigate"));
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <Navigation />
      </Suspense>
    </>
  );
}

export default App;
