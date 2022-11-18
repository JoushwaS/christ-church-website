import React from "react";

function HomeSermonItem({ props }) {
  console.log(" sermon itemprops>>>>>>>>>", props);
  return (
    <div className="sermon-item-container rounded">
      <img
        alt={"sermon"}
        src={props?.backgroundImage}
        className="rounded img-fluid"
      />

      {props.hasEventInfo && (
        <div className="sermon-item-info  text-white d-flex gap-2 flex-column rounded flex-column">
          {" "}
          <span className="mb-0 fs-xsm ">{props.eventInfo.eventName} </span>
          <p className=" fw-light mb-0 fs-xsm ">
            {props.eventInfo.eventDetails}
          </p>
          <div className="d-flex flex-row justify-content-between fs-xsm ">
            <p>Date:{props.eventInfo.eventDate}</p>
            <p>Venue:{props.eventInfo.eventVenue}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeSermonItem;
