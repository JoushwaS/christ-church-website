import React from "react";
import AboutUsComponentImage from "../../assets/images/Rectangle 7.png";
function AboutComponent() {
  return (
    <div className=" py-2">
      <div className="container-xl  ">
        {" "}
        <div className="aboutComponentContainer  row flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row">
          <div className=" justify-content-md-center col-xxl-5 col-sm-12 col-lg-5 col-md-10 p-2 d-flex  flex-column">
            <div className="d-flex     ">
              <img className="overlay-img " src={AboutUsComponentImage} />
            </div>
            <div className="sq align-right d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none  "></div>
            <div className="sq align-left  d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none "></div>
          </div>
          <div className=" col-xxl-7 col-sm-12 col-lg-7 pb-4 pt-4 col-md-12 fw-light">
            {" "}
            <h2 className="color-primary text-lg-start text-xl-start  text-md-center text-xsm-center">
              About <span className="color-secondary">Us:</span>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam ptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              est Lorem ipsum dolor sit amet. m dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la
            </p>
            <h2 className="color-primary text-lg-start text-xl-start text-sm-center text-md-center">
              Our <span className="color-secondary">Mission:</span>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam ptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              est Lorem ipsum dolor sit amet. m dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
