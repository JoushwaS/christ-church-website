import React, { useState } from "react";
import { truncateString, checkDescriptionLength } from "../../utils/helper";

function SacramentItem({ props }) {
  const [seeMore, setseeMore] = useState(false);

  return (
    <div>
      <div className="row py-3">
        <div className="col-lg-3">
          <img src={props?.image} className="img-fluid " />
        </div>
        <div className="col-lg-9 pt-3">
          <div className="d-flex flex-column ">
            <h1 className="color-primary">{props?.sacramentName}</h1>

            <p>
              {seeMore
                ? props?.description
                : truncateString(props?.description, 400)}

              <span
                style={{
                  display: checkDescriptionLength(props?.description)
                    ? ""
                    : "none",
                }}
                onClick={() => {
                  setseeMore(!seeMore);
                }}
                className="p-2 color-primary text-underline-primary cursor-pointer"
              >
                {seeMore ? "See Less" : "See More"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SacramentItem;
