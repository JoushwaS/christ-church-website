import React from "react";
import YouTube from "react-youtube";
import YoutubeIframe from "../VideoPlayerComponent/VideoIframe.tsx";
function VideoPlayerComponent({ props }) {
  const opts = {
    height: "390",
    width: "1024",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div
      style={{ width: "40% !important" }}
      className="d-flex justify-content-center"
    >
      <YoutubeIframe videoId={props} videoTitle={"Testing"} />

      {/* <YouTube videoId={props} opts={opts} /> */}
    </div>
  );
}

export default VideoPlayerComponent;
