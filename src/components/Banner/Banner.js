import React, { useEffect, useState } from "react";
// import {  } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import AboutBannerImg from "../../assets/images/Rectangle32.png";
import SacramentPageBannerImg from "../../assets/images/SacramentPageBannerImg.png";
import SermonPageBgImg from "../../assets/images/SermonPageBgImg.png";
import ContactPageBannerImg from "../../assets/images/ContactPageBannerImg.png";
import BlogPageBannerImg from "../../assets/images/BlogPageBannerImg.png";
function Banner() {
  let location = useLocation();
  const { sermonType, sermonId, eventId, blogId, exploreChurchId } =
    useParams();

  const [BannerPageText, setBannerPageText] = useState("");
  const [bannerImg, setbannerImg] = useState();
  const BannerPages = [
    { link: "/about", text: "About Us", bannerImg: AboutBannerImg },
    {
      link: "/explore-church",
      text: "Explore Our Parish",
      bannerImg: AboutBannerImg,
    },
    {
      link: "/sacrament",
      text: "Sacrament",
      bannerImg: SacramentPageBannerImg,
    },
    {
      link: "/events",
      text: "Events",
      bannerImg: SacramentPageBannerImg,
    },
    { link: "/ministeries", text: "Ministeries", bannerImg: AboutBannerImg },
    { link: "/sermons", text: "Sermons", bannerImg: SermonPageBgImg },
    {
      link: "/sermon",
      text: "Sermons",
      bannerImg: SermonPageBgImg,
    },
    { link: "/blogs", text: "Blogs", bannerImg: BlogPageBannerImg },
    {
      link: "/contact-us",
      text: "Contact Us ",
      bannerImg: ContactPageBannerImg,
    },
    {
      link: "/donate",
      text: "Donate ",
      bannerImg: ContactPageBannerImg,
    },
  ];

  const getParamsBannerInfo = (sermonLink) => {
    const result = BannerPages.filter((item) => item.link == sermonLink);

    return result[0];
  };

  const renderBannerInfo = () => {
    BannerPages.map((item) => {
      if (item.link === location.pathname) {
        setBannerPageText(item.text);
        setbannerImg(item.bannerImg);
      } else if (
        sermonType ||
        sermonId ||
        eventId ||
        blogId ||
        exploreChurchId
      ) {
        if (sermonType) {
          const info = getParamsBannerInfo("/sermon");

          setBannerPageText(info.text);
          setbannerImg(info.bannerImg);
        } else if (eventId) {
          const info = getParamsBannerInfo("/events");

          setBannerPageText(info.text);
          setbannerImg(info.bannerImg);
        } else if (blogId) {
          const info = getParamsBannerInfo("/blogs");

          setBannerPageText(info.text);
          setbannerImg(info.bannerImg);
        } else if (exploreChurchId) {
          const info = getParamsBannerInfo("/explore-church");

          setBannerPageText(info.text);
          setbannerImg(info.bannerImg);
        }
      }
    });
  };

  useEffect(() => {
    console.log("location", location);
    renderBannerInfo();
  }, [location.pathname]);

  return (
    <>
      {bannerImg !== "" && (
        <div
          className="banner-container pl-5 p-5 text-white d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `
     url(${bannerImg})`,
          }}
        >
          <div className="d-flex flex-column">
            <h1 className="display-3 fw-semibold">{BannerPageText}</h1>
            <div className="d-flex justify-content-center">
              {" "}
              <span>Home </span>
              <span className="px-2">{" > "}</span>
              <span>{BannerPageText}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
