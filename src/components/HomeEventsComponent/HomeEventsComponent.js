import React from "react";
import EventHomeItemBg from "../EventHomeItemBg/EventHomeItemBg";
import EventsListHome from "../EventsListHome/EventsListHome";
// import EventHomeBgImg from "../../assets/images/Rectangle 19.png";
function HomeEventsComponent({ props }) {
  console.log(props);
  return (
    <div className="homeEventsComponentContainer container-xl p-2">
      {props.bannerHeading && (
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fs-2 color-primary">Join Us</h2>
            <h1 className="display-5 fw-semibold color-secondary">
              Up Coming Events
            </h1>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xsm-12 d-flex justify-content-center p-2">
          <EventHomeItemBg />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xsm-12 ">
          <EventsListHome />
        </div>
      </div>
    </div>
  );
}

export default HomeEventsComponent;
