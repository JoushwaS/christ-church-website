import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import HomeSermonItem from "../HomeSermonItem/HomeSermonItem";
import MaskGroup3 from "../../assets/images/Mask Group 3.png";
import MaskGroup4 from "../../assets/images/Mask Group 4.png";
import MaskGroup5 from "../../assets/images/Mask Group 5.png";

import BlogImg1 from "../../assets/images/Rectangle19.png";

function HomeRecentSermonComponent() {
  const tempArray1 = [
    {
      backgroundImage: MaskGroup3,
      hasEventInfo: false,
      eventInfo: {
        eventName: "",
        eventDetails: "",
        eventDate: "",
        eventVenue: "",
      },
    },
    {
      backgroundImage: MaskGroup4,
      hasEventInfo: false,
      eventInfo: {
        eventName: "",
        eventDetails: "",
        eventDate: "",
        eventVenue: "",
      },
    },
    {
      backgroundImage: MaskGroup5,
      hasEventInfo: false,
      eventInfo: {
        eventName: "",
        eventDetails: "",
        eventDate: "",
        eventVenue: "",
      },
    },
  ];
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
  ];
  return (
    <div className="home-recent-sermon-component  container-xl p-2">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="fs-2 color-primary">Recent</h2>
          <h1 className="display-5 fw-semibold color-secondary">
            Sermons Series
          </h1>
        </div>
      </div>

      <div className="row">
        <div className=" col-lg-12 d-flex justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-center  flex-wrap pt-4">
          {tempArray1.map((item) => {
            return <HomeSermonItem props={item} />;
          })}
        </div>
        <div className=" d-flex h-50 p-3 flex-row-reverse">
          <Link className="color-primary" to={"#"}>
            <span>See All</span>
            <span>
              <BiRightArrowAlt />
            </span>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="fs-2 color-primary">Blog</h2>
          <h1 className="display-5 fw-semibold color-secondary">Articles</h1>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-height col-lg-12"> */}
        <div className=" col-lg-12 d-flex justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-center  flex-wrap pt-4">
          {tempArray2.map((item) => {
            return <HomeSermonItem props={item} />;
          })}
          {/* </div> */}
        </div>
        <div className=" d-flex h-50 p-3 flex-row-reverse">
          <Link className="color-primary" to={"#"}>
            <span>See All</span>
            <span>
              <BiRightArrowAlt />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeRecentSermonComponent;
