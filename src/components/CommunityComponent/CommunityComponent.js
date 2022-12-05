import React from "react";
import { GiSpiderMask } from "react-icons/gi";
import CommunityComponentCircleImage from "../../assets/images/Ellipse1Main.png";
function CommunityComponent() {
  return (
    <div className="text-white communityComponentContainer container-xl py-4">
      {/*  */}

      <div className="row">
        <div className="col-lg-9 col-md-12 ">
          <div className="main-container d-flex flex-column ps-0 pt-5 pb-5 d-flex flex-column rounded">
            <div className="child-container d-flex ps-4 pt-4 pb-4">
              {" "}
              <div className="child-content">
                <h3 className="">Our Groups</h3>
                <h1 className=" fw-semibold display-5">
                  <span className="color-secondary ">Join</span> our
                  <span className="color-primary"> Community </span>
                </h1>
                {/* <h6 className="fs-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam ptua. At vero eos et accusam et justo
                  duo dolores et ea rebum. Stet clita kasd gube.
                </h6> */}
                {/* <h6 className="fs-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam ptua. At vero eos et accusam et justo
                  duo dolores et ea rebum. Stet clita kasd gube.
                </h6> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 text-black ">
          <img src={CommunityComponentCircleImage} className="community-img" />
        </div>
      </div>
    </div>
  );
}

export default CommunityComponent;
