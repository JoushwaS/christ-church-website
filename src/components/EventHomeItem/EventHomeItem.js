import React from "react";

function EventHomeItem({ props }) {
  console.log("Props>>>>>>>>>>>>>.", props);
  return (
    <div className="h-25  d-flex flex-column ">
      <h2 className="color-primary"> {props.eventName}</h2>
      <p>{props.description}</p>
      <div className="d-flex color-primary  primary-border-bottom  flex-row justify-content-between">
        <p className="fw-bold">Date: {props.date}</p>
        <p className="fw-bold">Venue: {props.venue}</p>
      </div>
    </div>
  );
}

export default EventHomeItem;
