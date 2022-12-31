import { useState, Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// COMPONENTS
import SideBar from "../components/sidebar";
import Header from "../components/header";

// PAGES
import Home from "../pages/screens/home";
import Sermons from "../pages/screens/Sermons/Sermons";
import Blog from "../pages/screens/blog/blogs";
import OverSeaPartners from "../pages/screens/OverSeaPartners/OverSeaPartners";
import OverSeaPartnerDetail from "../pages/screens/OverSeaPartners/OverSeaPartnerDetail";
import Ministeries from "../pages/screens/Ministries/Ministeries";
import MinistryDetail from "../pages/screens/Ministries/MinistryDetail";
import BlogDetail from "../pages/screens/blog/BlogDetail";
import Chat from "../pages/screens/chat";
import Help from "../pages/screens/help";
import Settings from "../pages/screens/settings";
import Login from "../pages/screens/login";
import Contact from "../pages/screens/help/contact";
import Content from "../pages/screens/Content/Content";
import { useSelector } from "react-redux";
import SermonDetail from "../pages/screens/Sermons/SermonDetail";

// PROTECTED ROUTE
const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const token = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const registerOptionalParamRoute = (optionalParams, element) => {
    if (optionalParams.length === 0) return <Fragment />;

    const param = optionalParams[0];
    optionalParams.splice(0, 1);

    return (
      <Route path={param} element={element}>
        {registerOptionalParamRoute(optionalParams, element)}
      </Route>
    );
  };

  const registerOptionalParams = (path, element) => {
    const params = path.split("/");
    let basePath = "";
    let optionalParams = [];

    for (let i = 0; i < params.length; i++) {
      if (params[i] === "") continue;

      if (!params[i].includes("?")) basePath += "/" + params[i];
      else optionalParams.push(params[i].substr(0, params[i].length - 1));
    }

    return (
      <Route path={basePath} key={basePath} element={element}>
        {registerOptionalParamRoute(optionalParams, element)}
      </Route>
    );
  };

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
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <Home />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/sermons"
                      element={
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <Sermons />
                        </PrivateRoute>
                      }
                    />
                    {registerOptionalParams(
                      "/sermons/:pageType?/:sermonId?",
                      <PrivateRoute isAuth={isAuthenticated || token}>
                        <SermonDetail />
                      </PrivateRoute>
                    )}
                    <Route
                      path="/blogs"
                      element={
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <Blog />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/ministeries"
                      element={
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <Ministeries />
                        </PrivateRoute>
                      }
                    />
                    {registerOptionalParams(
                      "/ministeries/:pageType?/:ministryId?",
                      <PrivateRoute isAuth={isAuthenticated || token}>
                        <MinistryDetail />
                      </PrivateRoute>
                    )}
                    <Route
                      path="/overseapartners"
                      element={
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <OverSeaPartners />
                        </PrivateRoute>
                      }
                    />
                    {registerOptionalParams(
                      "/overseapartners/:pageType?/:ministryId?",
                      <PrivateRoute isAuth={isAuthenticated || token}>
                        <OverSeaPartnerDetail />
                      </PrivateRoute>
                    )}
                    <Route
                      path="/content"
                      element={
                        <PrivateRoute isAuth={isAuthenticated || token}>
                          <Content />
                        </PrivateRoute>
                      }
                    />

                    {registerOptionalParams(
                      "/blogs/:pageType?/:blogId?",
                      <PrivateRoute isAuth={isAuthenticated || token}>
                        <BlogDetail />
                      </PrivateRoute>
                    )}

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
