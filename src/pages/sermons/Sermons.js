import React, { useState } from "react";
import SermonPageBgImg from "../../assets/images/SermonPageBgImg.png";
import SermonItemComponent from "../../components/SermonItemComponent/SermonItemComponent";

function Sermons() {
  const sermonTypeList = ["Video", "Audio"];
  const [sermonType, setsermonType] = useState("Video");

  const videoSermonList = [
    {
      title: "Christ Church Sermon Video",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Video",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Video",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Video",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
  ];
  const audioSermonList = [
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
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
                  sermonType === item ? "text-underline-thick" : ""
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div className="row">
        <div className="sermons-list-container d-flex justify-content-center  flex-wrap">
          {sermonType === "Video"
            ? videoSermonList.map((item) => {
                return (
                  <div className="col-lg-3">
                    <SermonItemComponent props={item} />
                  </div>
                );
              })
            : audioSermonList.map((item) => {
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
