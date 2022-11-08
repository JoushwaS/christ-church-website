import React from "react";
import pastorImage from "../../assets/images/pastorSampleImage.png";
export const SermonButton = (props) => {
  return (
    <button
      className="sermonButton border-white rounded-pill"
      style={{
        width: "12rem",
        height: "4rem",
      }}
    >
      {props.text}
    </button>
  );
};
function HomeSermonComponent() {
  return (
    <div className="homeSermonComponent container-lg py-5 text-white ">
      <img className=" homesermon-image" src={pastorImage} alt="sermon " />

      <div className="homesermon-container rounded-pill container-fluid  ">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="fs-1 ">Your First step to happiness</h1>
            <p className="fs-5 text-decoration-underline">Topic</p>
            <p className="fs-5 ">Two Sins, Abandoned God, Broken Cisterns</p>
            <p className="fs-5 ">Date : {new Date().toDateString()}</p>

            <div className="d-flex gap-4 ">
              <SermonButton text="Watch Sermons" />
              <SermonButton text="All Sermons" />
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSermonComponent;
