import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// COMPONENTS
import SideBar from "../components/sidebar";
import Header from "../components/header";

// PAGES
import Home from "../pages/screens/home";
import Users from "../pages/screens/users";
import Blog from "../pages/screens/blog";
import Chat from "../pages/screens/chat";
import Help from "../pages/screens/help";
import Settings from "../pages/screens/settings";
import Login from "../pages/screens/login";
import Contact from "../pages/screens/help/contact";
import { useSelector } from "react-redux";

// PROTECTED ROUTE
const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const token = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={token || isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/*"
          element={
            <div
              className="wrapper"
              style={{
                overflow: toggle && "hidden",
              }}
            >
              <SideBar toggle={toggle} setToggle={setToggle} />
              <div className="main">
                <Header setToggle={setToggle} toggle={toggle} />
                <div className="container-fluid mt-5">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Home />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/users"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Users />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/blog"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Blog page={"blogs"} />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/chat_rooms"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Chat />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/help"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Help />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Contact />
                        // </PrivateRoute>
                      }
                    />
                    <Route
                      path="/settings"
                      element={
                        // <PrivateRoute isAuth={isAuthenticated || token}>
                        <Settings />
                        // </PrivateRoute>
                      }
                    />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}
