import React from "react";
import { GiSpiderMask } from "react-icons/gi";

function CommunityComponent() {
  return (
    <div className="text-white communityComponentContainer container-xl py-4">
      <div className="row">
        <div className="col-lg-9">
          <div className="main-container p-5 d-flex flex-column rounded">
            <div className="child-container ps-2 pt-2 pb-2">
              {" "}
              <h3 className="">Our Groups</h3>
              <h1 className=" fw-semibold display-5">
                <span className="color-secondary ">Join</span> a
                <span className="color-primary"> Community: </span>
              </h1>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam ptua. At vero eos et accusam et justo
                duo dolores et ea rebum. Stet clita kasd gube.
              </p>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam ptua. At vero eos et accusam et justo
                duo dolores et ea rebum. Stet clita kasd gube.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">communityComponentContainer</div>
      </div>
    </div>
  );
}

export default CommunityComponent;
