import React from "react";
import { truncateString } from "../../utils/helper";
import playPauseButton from "../../assets/images/83707-play-button-pulse.json";
import Lottie from "lottie-react";

function SermonItemComponent({ props }) {
  return (
    <div className="sermon-item d-flex justify-content-center p-4 flex-column">
      <div className="sermon-thumbnail-container d-flex justify-content-center  ">
        <Lottie
          // style={{ width: "30%", height: "100%" }}
          className="play-pause-button-sermon "
          animationData={playPauseButton}
          autoplay={true}
        />
        <img src={props.thumbnail} className="img-fluid rounded" />
      </div>
      <p className="color-primary  fw-semibold text-center fs-md ">
        {props.title}
      </p>
      <span className="text-center fs-xsm">
        {truncateString(props.description, 200)}
      </span>
    </div>
  );
}

export default SermonItemComponent;
