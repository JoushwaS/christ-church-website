import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
import appLogo from "../../assets/images/logo.jpeg";
import { Container, Navbar, Nav } from "react-bootstrap";

// function Header() {
//   const headerRoutes = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "About",
//       link: "/about",
//     },
//     {
//       name: "Sacrament",
//       link: "/sacrament",
//     },
//     {
//       name: "Ministeries",
//       link: "/ministeries",
//     },
//     {
//       name: "Sermons",
//       link: "/sermons",
//     },
//     {
//       name: "Events",
//       link: "/events",
//     },
//     {
//       name: "Blogs",
//       link: "/blogs",
//     },
//     {
//       name: "Contact",
//       link: "/contact-us",
//     },
//   ];
//   return (
//     <header className="header-container">
//       <div className="upper-header-section">
//         <div className="upper-header-item">
//           <AiOutlineMail className="fs-6 p-top-10" />
//           <div>
//             <span className="vertical-line"></span>
//           </div>
//           <div className="upper-header-item-text">
//             <span> info@info.com</span>
//           </div>
//         </div>
//         <div className="upper-header-item">
//           <GrLocation className="fs-6 p-top-10" />
//           <div>
//             <span className="vertical-line"></span>
//           </div>
//           <div className="upper-header-item-text">
//             <span> eiusmod commodo laborum qui amet anim.</span>
//           </div>
//         </div>

//         <div className="upper-header-social">
//           {" "}
//           <FiFacebook className="fs-6 p-top-10" />
//           <BsInstagram className="fs-6 p-top-10" />{" "}
//           <FiYoutube className="fs-6 p-top-10" />{" "}
//           <FiTwitter className="fs-6 p-top-10" />
//         </div>
//       </div>
//       <div className="lower-header-section">
//         {/* <Link to={"/"}>
//         </Link> */}
//         <img src={appLogo} className="img-logo p-top-25" alt="app logo" />

//         {headerRoutes.map((item) => {
//           return (
//             <div className="lower-header-item">
//               <Link to={item.link}>
//                 <h3>{item.name}</h3>
//               </Link>
//             </div>
//           );
//         })}
//         <div className="lower-header-item">
//           <Link to={"/donate"}>
//             <button className="header-btn">Donate</button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
const Header = () => {
  const [open, setOpen] = useState(false);

  const headerRoutes = [
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
  const handleNavCollapse = (e) => {
    // e.preventDefault();
    setOpen(!open);
  };
  return (
    // <header>
    //   <div className="">
    //     <div className="container-xl">
    //       <nav className="">
    //         <div className=" row d-md-none d-lg-flex pt-4 pb-4 border-bottom-primary d-none">
    //           <div className="col-md-4  d-md-flex d-lg-flex flex-row gap-3 d-none ">
    //             {" "}
    //             <div className="d-flex flex-row gap-1 ">
    //               <AiOutlineMail className="mt-1 fs-5" />
    //               <div className="vertical-line "></div>
    //               <h4 className="fs-7 fw-light mt-2 mb-0"> info@info.com</h4>
    //             </div>
    //             <div className="d-flex flex-row gap-1 ">
    //               <GrLocation className="mt-1 fs-5" />
    //               <div className="vertical-line "></div>
    //               <h4 className="fs-7 fw-light mt-2 mb-0">
    //                 Lorem ipsum dolor sit amet.
    //               </h4>
    //             </div>
    //           </div>
    //           <div className="col-md-6"> </div>
    //           <div className="col-md-2 d-flex gap-4">
    //             <FiFacebook className="fs-5  " />
    //             <BsInstagram className="fs-5 " />{" "}
    //             <FiYoutube className="fs-5 " /> <FiTwitter className="fs-5 " />
    //           </div>
    //         </div>
    //         <div className="row d-flex flex-lg-row  pt-4 pb-4 ">
    //           <div className="col-lg-1 col-sm-12 d-flex justify-content-between  justify-content-between ">
    //             <img src={appLogo} className="img-logo " alt="app logo" />
    //             <Button
    //               className="d-lg-none d-sm-block "
    //               onClick={() => {
    //                 setOpen(!open);
    //               }}
    //               variant="light"
    //             >
    //               <GiHamburgerMenu />
    //             </Button>{" "}
    //             {/* <button
    //           type="button"

    //           // data-bs-toggle="collapse"
    //           // data-bs-target="#collapse"
    //           // aria-expanded="false"
    //           // aria-label="Toggle navigation"
    //         >

    //         </button> */}
    //           </div>
    //           <Collapse in={open}>
    //             <div className="  col-lg-11 col-md-12    d-lg-flex  flex-lg-row  flex-md-row  justify-content-around  flex-row ">
    //               {" "}
    //               {headerRoutes.map((item) => {
    //                 return (
    //                   <Link to={item.link}>
    //                     <p className="nav-item text-md-start text-lg-start fs-5 fw-semibold pt-4 pb-4 text-dark text-center">
    //                       {item.name}
    //                     </p>
    //                   </Link>
    //                 );
    //               })}
    //               <Link to={"/donate"}>
    //                 <button className=" nav-item header-btn text-white fw-semibold rounded pt-4 pb-4 w-100 border-0">
    //                   Donate
    //                 </button>{" "}
    //               </Link>
    //             </div>
    //           </Collapse>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    // breakpoint
    // <nav className=" bg-white text-black navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-xl px-8">
    //     <a className="navbar-brand" href="/">
    //
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className={`collapse navbar-collapse ${open ? " show" : ""} `}
    //       id="navbarSupportedContent"
    //     >
    //       <ul className="navbar-nav me-auto d-flex  ">
    //         {headerRoutes.map((item) => {
    //           return (
    //             <li className="nav-item px-sm-1 px-lg-1 px-xl-4 px-4 fw-semibold fs-5 text-sm-center text-md-center text-center ">
    //               <a className="nav-link " aria-current="page" href={item.link}>
    //                 {item.name}
    //               </a>
    //             </li>
    //           );
    //         })}
    //         <li className="nav-item px-sm-2 px-lg-2 px-3">
    //           <a
    //             className="header-btn text-white fw-semibold fs-6 text-center px-4 fw-semibold rounded nav-link "
    //             aria-current="page"
    //             href={"/donate"}
    //           >
    //             Donate{" "}
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar expanded={open} bg="light" expand="lg">
      <Container large className="px-8">
        <Navbar.Brand>
          {" "}
          <img src={appLogo} className="img-logo " alt="app logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setOpen(open ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {headerRoutes.map((item) => {
              return (
                <li className="nav-item px-sm-1 px-lg-1 px-xl-4 px-4 fw-semibold fs-5 text-sm-center text-md-center text-center ">
                  <Link to={item.link} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item px-sm-2 px-lg-2 px-3">
              <Link
                className="header-btn text-white fw-semibold fs-6 text-center px-4 fw-semibold rounded nav-link "
                aria-current="page"
                to={"/donate"}
              >
                Donate{" "}
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
