import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../Banner/Banner";
export default function Layout({ children }) {
  let location = useLocation();
  const [currentLocation, setcurrentLocation] = useState(location);
  const allowBannerPages = [
    "/",

    "about",

    "sacrament",

    "ministeries",

    "sermons",

    "events",

    "blogs",

    "contact-us",
  ];
  const renderBanner = () => {
    allowBannerPages.map((item) => {
      if (currentLocation == "/") {
        // console.log(currentLocation == item);
        return <Banner />;
      } else if (currentLocation !== "/") {
        if (currentLocation == item) {
          // console.log(currentLocation);
          return <Banner />;
        }
      }
    });
  };

  useEffect(() => {
    if (
      currentLocation !== "/" &&
      allowBannerPages.indexOf(currentLocation.pathname?.slice(1))
    ) {
      console.log("yes");
    } else {
      console.log("no");
    }
    // if (location.pathname == "/") {
    //   setcurrentLocation("/");
    // } else {
    //   setcurrentLocation(location.pathname?.slice(1));
    // }
    // renderBanner();
  }, [location]);
  // console.log(currentLocation);
  return (
    <>
      <Header />
      {/* {currentLocation.pathname == "/" ? (
        <Banner />
      ) : (
        allowBannerPages.indexOf(
          currentLocation.pathname?.slice(1) ? <Banner /> : ""
        ) > -1
      )} */}
      {children}
      <Footer />
    </>
  );
}
