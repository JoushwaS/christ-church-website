import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import OurPartnerItem from "../OurPartnerItem/OurPartnerItem";
import partnerLogo from "../../assets/images/Image 12.png";
import partnerLogo1 from "../../assets/images/Image 10.png";
import partnerLogo2 from "../../assets/images/Image 9.png";
import partnerLogo3 from "../../assets/images/Image 11.png";
import { useSelector, useDispatch } from "react-redux";
import { GET_OVERSEAPARTNERS_LIST_ACTION } from "../../redux/actions/actions";
function HomePartnersSection() {
  const dispatch = useDispatch();
  const { partners } = useSelector((state) => state.reducers);
  console.log("partners", partners);
  useEffect(() => {
    dispatch(GET_OVERSEAPARTNERS_LIST_ACTION());
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const carouselItemsList = [
  //   partnerLogo,
  //   partnerLogo1,
  //   partnerLogo2,
  //   partnerLogo3,
  // ];

  const tempPartnersData = [
    {
      name: "Dalcy Majeed",
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669313872/waayqguot7pka2ba4tz0.jpg",
      country: "Saudi Arabia",
      profession: "Nurse",
      description:
        "Without a doubt, with our children lies the future of our society. I'm Extremely Proud and Honoured to be a part of Christ Church to foster local children of our community where educational possibilities are being pursued.",
    },
  ];
  return (
    <div style={{ height: "70vh !important" }} className="  container-xl p-2">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="fs-2 color-primary">Overseas</h2>
          <h1 className="display-5 fw-semibold color-secondary">Partners</h1>
        </div>
      </div>
      {/* <div className="row py-3"> */}
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        //   responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
      >
        {partners?.map((item) => {
          return <OurPartnerItem props={item} />;
        })}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default HomePartnersSection;
