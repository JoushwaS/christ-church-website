import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function HomeBanner() {
  return (
    <div className="homebanner-container pl-5 p-5 text-white">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="display-5 pb-3">Live With Agaphy!</h2>
            <h1 className="display-2 fw-bold ">
              Gods Love Never <br />
              Wears Out
            </h1>

            <a
              className="btn btn-lg border-1 fs-6 rounded bg-white secondary-border color-secondary "
              href="/about"
              role="button"
            >
              <BsFillArrowRightCircleFill className="mx-2" />
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
