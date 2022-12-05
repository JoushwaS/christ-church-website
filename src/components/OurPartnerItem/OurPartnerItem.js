import React, { useState } from "react";
import { truncateString, checkDescriptionLength } from "../../utils/helper";

function OurPartnerItem({ props }) {
  const [seeMore, setseeMore] = useState(false);

  return (
    <div>
      <div className="row py-3">
        <div className="col-lg-3">
          <img src={props.image} className="img-fluid rounded" />
        </div>
        <div className="col-lg-9 pt-3">
          <div className="d-flex flex-column ">
            <h1 className="color-primary">{props.name}</h1>
            <p>
              <span className="color-primary fw-semibold"> Country: </span>
              <span>{props.country}</span>
            </p>
            <p>
              <span className="color-primary fw-semibold"> Profession: </span>
              <span>{props.profession}</span>
            </p>
            <p>
              {props.description}

              {/* <span
                style={{
                  display: checkDescriptionLength(props.description)
                    ? ""
                    : "none",
                }}
                onClick={() => {
                  setseeMore(!seeMore);
                }}
                className="p-2 color-primary text-underline-primary cursor-pointer"
              >
                {seeMore ? "See Less" : "See More"}
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartnerItem;
