import React from "react";
import pastorImage from "../../assets/images/pastorSampleImage.png";
export const SermonButton = (props) => {
  return (
    <button className="sermonButton border-white rounded-pill">
      {props.text}
    </button>
  );
};
function HomeSermonComponent() {
  return (
    <div className="homeSermonComponent py-5 text-white ">
      <div className="homesermon-container d-flex flex-lg-row flex-sm-column ">
        <div className="d-flex justify-content-center  m-0">
          <div className="d-flex flex-column ">
            <h1 className="fs-1 ">Your First step to happiness</h1>
            <p className="fs-5 text-decoration-underline">Topic</p>
            <p className="fs-5 ">Two Sins, Abandoned God, Broken Cisterns</p>
            <p className="fs-5 ">Date : {new Date().toDateString()}</p>

            <div className="d-flex gap-4 ">
              <SermonButton text="Watch Sermons" />
              <SermonButton text="All Sermons" />
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-end">
          <img className="img-pastor" src={pastorImage} alt="sermon " />
        </div>
      </div>

      {/* </div>
      </div> */}
    </div>
  );
}

export default HomeSermonComponent;
