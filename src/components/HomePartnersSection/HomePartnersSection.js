import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import partnerLogo from "../../assets/images/Image 12.png";
import partnerLogo1 from "../../assets/images/Image 10.png";
import partnerLogo2 from "../../assets/images/Image 9.png";
import partnerLogo3 from "../../assets/images/Image 11.png";
function HomePartnersSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const carouselItemsList = [
    partnerLogo,
    partnerLogo1,
    partnerLogo2,
    partnerLogo3,
  ];
  return (
    <div style={{ height: "70vh !important" }} className="  container-xl p-2">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="fs-2 color-primary">Overseas</h2>
          <h1 className="display-5 fw-semibold color-secondary">Partners</h1>
        </div>
      </div>
      <div className="row">
        {/* <Carousel
          infiniteLoop={true}
          autoPlay={true}
          emulateTouch={true}
          stopOnHover={true}
          showThumbs={false}
          swipeable={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          interval={6000}
        >
          {carouselItemsList.map((item) => {
            return (
              <div className="col-lg-4">
                <img className="img-fluid" src={item} alt={"partner-logo"} />
              </div>
            );
          })}
        </Carousel> */}

        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          //   responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          {carouselItemsList.map((item) => {
            return (
              <div className="col-lg-7">
                <img className="img-fluid" src={item} alt={"partner-logo"} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default HomePartnersSection;
