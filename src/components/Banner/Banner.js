import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Banner() {
  let location = useLocation();
  const BannerPages = [
    { link: "/" },

    "about",

    "sacrament",

    "ministeries",

    "sermons",

    "events",

    "blogs",

    "contact-us",
  ];
  return <div>Banner</div>;
}

export default Banner;
