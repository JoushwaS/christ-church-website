import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import { truncateString } from "../../utils/helper";
function ColumnItem({ props }) {
  const [seeMore, setseeMore] = useState(false);

  return (
    <>
      {props.index % 2 == 0 ? (
        <div className="row py-3">
          <div className="col-lg-4">
            <img
              src={props.blogImg || props.ministryImg}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8 pt-3">
            <div className="d-flex flex-column ">
              <h1 className="color-primary">
                {props.blogName || props.minsitryName}
              </h1>
              <p
                style={{
                  display: props.subHeading != "" ? "block" : "none",
                }}
                className="fw-semibold color-secondary"
              >
                {props.subHeading}
              </p>
              <p>
                {seeMore
                  ? props.description
                  : truncateString(props.description, 400)}

                <span
                  onClick={() => {
                    setseeMore(!seeMore);
                  }}
                  className="color-primary text-underline-primary"
                >
                  {seeMore ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row py-3">
          <div className="col-lg-8 pt-3">
            <div className="d-flex flex-column ">
              <h1 className="color-primary">
                {" "}
                {props.blogName || props.minsitryName}
              </h1>
              <p
                style={{ display: props.subHeading != "" ? "block" : "none" }}
                className="fw-semibold color-secondary"
              >
                {props.subHeading}
              </p>
              <p>
                {seeMore
                  ? props.description
                  : truncateString(props.description, 400)}

                <span
                  onClick={() => {
                    setseeMore(!seeMore);
                  }}
                  className="color-primary text-underline-primary"
                >
                  {seeMore ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={props.blogImg || props.ministryImg}
              className="img-fluid"
            />{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default ColumnItem;
