import React from "react";
import Lottie from "lottie-react";
import playPauseButton from "../../assets/images/83707-play-button-pulse.json";
function HomeBanner2() {
  return (
    <div className="homeBanner2-container  p-5 text-white text-sm-center  d-flex align-items-center flex-xxl-row flex-xl-row  flex-lg-row flex-sm-column flex-column   ">
      <div className="homebanner-text-section    ">
        {" "}
        <h1 className="display-3 fw-semibold mb-0   ">
          Help them through your donation whenever they are in need
        </h1>
      </div>
      <div className="video-section d-flex flex-column justify-content-center ">
        <div className="d-flex justify-content-center align-items-center">
          <Lottie
            // style={{ width: "30%", height: "100%" }}
            className="play-pause-button "
            animationData={playPauseButton}
            autoplay={true}
          />
        </div>

        <h2 className="fs-2">Watch Video </h2>
      </div>
    </div>
  );
}

export default HomeBanner2;
