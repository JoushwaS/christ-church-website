import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Layout from "../components/layout/layout";
import Events from "../pages/Events/Events";
import Sacrament from "../pages/Sacrament/Sacrament";
import Contact from "../pages/Contact/Contact";
import Sermons from "../pages/sermons/Sermons";
import Blogs from "../pages/Blogs/Blogs";
import Ministeries from "../pages/Ministries/Ministeries";
import Donate from "../pages/Donate/Donate";
import Banner from "../components/Banner/Banner";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AboutComponent from "../components/AboutComponent/AboutComponent";
export default function Navigation() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Home />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/ministeries"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Ministeries />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/donate"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Donate />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/sermons"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Sermons />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/sacrament"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Sacrament />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/blogs"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Blogs />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/contact-us"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Contact />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/events"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <Events />
          </Layout>
          //   </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          //   <Suspense fallback={<FullScreenLoader />}>
          <Layout>
            <About />
          </Layout>
          //   </Suspense>
        }
      />
    </Routes>
  );
}
