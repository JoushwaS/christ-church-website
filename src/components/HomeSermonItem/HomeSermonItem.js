import React from "react";
import { Link } from "react-router-dom";
import { formatDate, truncateString } from "../../utils/helper";
function HomeSermonItem({ props }) {
  console.log(" sermon itemprops>>>>>>>>>", props);
  return (
    <Link
      to={
        props?.blogName
          ? "/blog/" + props._id
          : "/sermon/" + props.sermonType + "/" + props._id
      }
    >
      <div className="sermon-item-container rounded">
        <img
          style={{ height: props?.sermonName ? "38vh" : "" }}
          alt={"sermon"}
          src={props?.thumbnail || props?.image}
          className="rounded img-fluid"
        />

        <div className="sermon-item-info  text-white d-flex gap-2 flex-column rounded flex-column">
          {" "}
          <span className="mb-0 fs-xsm fw-bold ">
            {props?.blogName || props?.sermonName}{" "}
          </span>
          <p className=" fw-light mb-0 fs-xsm ">
            {truncateString(props?.description, 80)}
          </p>
          <div className="d-flex flex-row justify-content-between fs-xsm ">
            <p>Date:{formatDate(props?.createdAt)}</p>
            {/* <p>Venue:{props.eventInfo.eventVenue}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeSermonItem;
