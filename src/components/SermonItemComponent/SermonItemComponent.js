import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/helper";
import playPauseButton from "../../assets/images/83707-play-button-pulse.json";
import Lottie from "lottie-react";

function SermonItemComponent({ props }) {
  console.log("props", props);
  return (
    <div className="sermon-item d-flex   flex-column">
      <Link to={"/sermon/" + props?.sermonType + "/" + props?._id}>
        <div className="sermon-thumbnail-container d-flex justify-content-center  ">
          <Lottie
            // style={{ width: "30%", height: "100%" }}
            className="play-pause-button-sermon "
            animationData={playPauseButton}
            autoplay={true}
          />
          <img
            src={props?.thumbnail}
            className="img-fluid w-100 h-100   rounded"
          />
        </div>
      </Link>
      <p className="color-primary  fw-semibold text-center fs-md ">
        {props?.sermonName}
      </p>
      <span className="text-center fs-xsm">
        {truncateString(props?.description, 200)}
      </span>
    </div>
  );
}

export default SermonItemComponent;
