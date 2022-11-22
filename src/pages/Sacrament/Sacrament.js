import React, { useState } from "react";
// import Banner from "../../components/Banner/Banner";

function Sacrament() {
  // const sacramentTypeList = ["Video", "Audio"];
  // const [sacramentType, setsacramentType] = useState("Video");

  // const videoSermonList = [
  //   {
  //     title: "Christ Church Food Bank",
  //     thumbnail: "",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
  //     url: "#",
  //   },
  // ];
  return (
    <div className="container-xl p-4">
      {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center flex-row">
          {videoSermonList.map((item) => {
            return (
              <p
                onClick={() => {
                  setsacramentType(item);
                }}
                className={`px-4 fw-semibold ${
                  sacramentType == item ? "text-underline-thick" : ""
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default Sacrament;
