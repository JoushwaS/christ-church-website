import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactPlayer from "react-player";

interface IProps {
  videoId: string;
  autoPlay?: boolean;
  title: string;
}

const VideoIframe: React.FC<IProps> = (props) => {
  const { videoId, autoPlay, title } = props;
  const videoURL = `https://www.youtube.com/embed/-${videoId}?autoplay=1&mute=1&enablejsapi=1`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 360;
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  return (
    // <iframe
    //   ref={iframeRef}
    //   title={title}
    //   width="100%"
    //   height={`${videoHeight}px`}
    //   src={videoURL}
    //   frameBorder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
    // />
    // <div >
    <ReactPlayer
      ref={iframeRef}
      controls={true}
      height={`${videoHeight}px`}
      width="100%"
      url={"https://www.youtube.com/watch?v=" + videoId}
    />
    // </div>
  );
};

export default VideoIframe;
