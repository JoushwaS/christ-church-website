import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helper";
function EventHomeItem({ props }) {
  return (
    <Link to={"/event/" + props?._id}>
      <div className="h-25  d-flex flex-column ">
        <h2 className="color-primary"> {props?.eventName}</h2>
        <p className=" color-primary  ">{props.description}</p>
        <div className="d-flex color-primary  primary-border-bottom  flex-row justify-content-between">
          <p className="fw-bold">Date: {formatDate(props?.eventDate)}</p>
          <p className="fw-bold">Venue: {props?.eventVenue}</p>
        </div>
      </div>
    </Link>
  );
}

export default EventHomeItem;
