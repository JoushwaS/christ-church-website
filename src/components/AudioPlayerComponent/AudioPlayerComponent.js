import React from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function AudioPlayerComponent({ props }) {
  console.log(props);
  return (
    <>
      <AudioPlayer
        autoPlay
        src={props}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </>
  );
}

export default AudioPlayerComponent;
