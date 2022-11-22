import React, { useState } from "react";
import SermonPageBgImg from "../../assets/images/SermonPageBgImg.png";
import SermonItemComponent from "../../components/SermonItemComponent/SermonItemComponent";

function Sermons() {
  const sermonTypeList = ["Video", "Audio"];
  const [sermonType, setsermonType] = useState("Video");

  const videoSermonList = [
    {
      title: "Christ Church Food Bank",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Food Bank",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Food Bank",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Food Bank",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
  ];
  return (
    <div className="container-xl p-4">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center flex-row">
          {sermonTypeList.map((item) => {
            return (
              <p
                onClick={() => {
                  setsermonType(item);
                }}
                className={`px-4 fw-semibold ${
                  sermonType == item ? "text-underline-thick" : ""
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div className="row">
        <div className=" d-flex justify-content-center   flex-wrap">
          {videoSermonList.map((item) => {
            return (
              <div className="col-lg-3">
                <SermonItemComponent props={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sermons;
