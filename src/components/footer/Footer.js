import React from "react";
import appLogo from "../../assets/images/logo.jpeg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
function Footer() {
  const footerRoutes1 = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sacrament",
      link: "/sacrament",
    },
    {
      name: "Ministeries",
      link: "/ministeries",
    },
  ];
  const footerRoutes2 = [
    {
      name: "Sermons",
      link: "/sermons",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  return (
    // <footer className="container footer-container">
    //   <div className="footer-section">
    //     {/* <div className="footer-section-item "> */}
    //     <div className="footer-section-info w-50 ">
    //

    //       <p>
    //         Pariatur sit voluptate amet commodo voluptate culpa culpa
    //         reprehenderit deserunt.
    //       </p>

    //       <div className="social-icons">
    //         <FiFacebook className="app-icon" />
    //         <BsInstagram className="app-icon" />{" "}
    //         <FiYoutube className="app-icon" />{" "}
    //         <FiTwitter className="app-icon" />
    //       </div>
    //     </div>
    //     {/* </div> */}

    //     <div className="footer-section-item ">
    //       <p className="heading-2 color-primary underlined">Quick Link</p>

    //       {footerRoutes1.map((item) => {
    //         return (
    //           <Link className="color-black" to={item.link}>
    //             <p className="heading-sm font-bold pad-top-bottom">
    //               {" "}
    //               {item.name}
    //             </p>
    //           </Link>
    //         );
    //       })}
    //     </div>
    //     <div className="footer-section-item ">
    //       <p className="heading-2 color-primary underlined">Quick Link</p>

    //       {footerRoutes2.map((item) => {
    //         return (
    //           <Link className="color-black" to={item.link}>
    //             <p className="heading-sm font-bold pad-top-bottom">
    //               {" "}
    //               {item.name}
    //             </p>
    //           </Link>
    //         );
    //       })}
    //     </div>
    //     <div className="footer-section-item ">
    //       <p className="heading-2 color-primary underlined">Subscribe Here</p>
    //       <p className="heading-sm font-bold "> News Letter</p>

    //       <p className="pad-top-bottom-text-sm">
    //         Lorem ipsum dolor sit amet, consetetur sa
    //       </p>

    //       <div className="email-text-box primary-border">
    //         <input type={"email"} placeholder="Email Address" />
    //         <button>
    //           <AiOutlineArrowRight />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="container footer-container pt-5 pb-5">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex justify-content-center">
            <img src={appLogo} className="img-logo-sm" alt="app logo" />
          </div>
          <p className="fs-7 pt-3 pb-3 text-center">
            Pariatur sit voluptate amet commodo voluptate culpa culpa
            reprehenderit deserunt.{" "}
            <div className="pt-3 d-flex gap-4 justify-content-center">
              <FiFacebook className="fs-5 color-primary   pointer" />
              <BsInstagram className="fs-5 color-primary  " />{" "}
              <FiYoutube className="fs-5 color-primary " />{" "}
              <FiTwitter className="fs-5 color-primary  " />
            </div>
          </p>
        </div>
        <div className="col-md-3  text-xs-center text-md-right text-lg-right  ">
          <h3 className="fw-light underlined color-primary  ">Quick Links</h3>
          {footerRoutes1.map((item) => {
            return (
              <Link className="" to={item.link}>
                <p className="text-black fw-semibold py-1"> {item.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="col-md-3  text-xs-center text-md-right text-lg-right">
          {" "}
          <h3 className="fw-light underlined color-primary">Quick Links</h3>
          {footerRoutes2.map((item) => {
            return (
              <Link className="" to={item.link}>
                <p className="text-black fw-semibold py-1"> {item.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="col-md-3  text-xs-center text-md-right text-lg-right">
          {" "}
          <h3 className="fw-light underlined color-primary">Subscribe Here</h3>
          <p className="text-black fw-semibold pt-2 m-0"> News Letter</p>
          <span className="fs-7">
            Lorem ipsum dolor sit amet, consetetur sa
          </span>
          <div className="mt-2 w-100 form-group d-flex primary-border  rounded-pill ">
            <input
              type={"email"}
              required
              className="form-control d-flex  rounded-pill border-0 "
              placeholder="Email Address"
            />
            <button type="submit" className=" subcribe_button">
              {" "}
              <AiOutlineArrowRight className="fs-4  " />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
