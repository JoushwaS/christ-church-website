import React from "react";
import EventHomeBgImg from "../../assets/images/Rectangle19.png";

function EventHomeItemBg() {
  return (
    <div
      // style={{
      //   backgroundPosition: "center",
      //   // backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundImage: `url(${EventHomeBgImg})`,
      // }}
      className="eventHomeBgComponent  rounded-ex"
    >
      <img
        alt="event home background "
        className=" rounded-ex"
        src={EventHomeBgImg}
      />
      <div className="eventHomeBgComponentDetail p-4 text-white d-flex gap-3 rounded flex-column">
        {" "}
        <h1 className="mb-0">Event Name </h1>
        <p className=" fw-light mb-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </p>
        <div className="d-flex flex-row justify-content-between">
          <p>Date:12/12/2022</p>
          <p>Date:12/12/2022</p>
        </div>
      </div>
    </div>
  );
}

export default EventHomeItemBg;
