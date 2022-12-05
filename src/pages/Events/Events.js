import React, { useState, useEffect } from "react";
import HomeEventsComponent from "../../components/HomeEventsComponent/HomeEventsComponent";
import HomeSermonItem from "../../components/HomeSermonItem/HomeSermonItem";

import BlogImg1 from "../../assets/images/Rectangle19.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Events() {
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

  const tempArray2 = [
    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },
    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },
    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },
    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },
    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },

    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },

    {
      backgroundImage: BlogImg1,
      hasEventInfo: true,
      eventInfo: {
        eventName: "Event Name",
        eventDetails:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        eventDate: "12/12/2022",
        eventVenue: "Parish Church",
      },
    },
  ];
  return (
    <div>
      <HomeEventsComponent props={{ bannerHeading: false }} />

      <div className="container-xl p-2">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fs-2 color-primary">Recent Events</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              responsive={responsive}
            >
              {tempArray2.map((item) => {
                return <HomeSermonItem props={item} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
