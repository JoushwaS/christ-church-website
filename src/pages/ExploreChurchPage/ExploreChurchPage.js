import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_EXPLORE_INFO_ACTION } from "../../redux/actions/actions";
function ExploreChurchPage() {
  const dispatch = useDispatch();
  const { exploreChurchId } = useParams();
  const { exploreInfo } = useSelector((state) => state.reducers);
  console.log("exploreInfo", exploreInfo);
  useEffect(() => {
    dispatch(GET_EXPLORE_INFO_ACTION(exploreChurchId));
  }, []);
  return (
    <div className="container-xl p-2 h-100 explorerItem mt-5 mb-4">
      <div className="row ">
        <div className="col-lg-4 ">
          <div className=" p-4 m-3 d-flex text-center flex-column justify-content-center">
            <img src={exploreInfo?.imageLogo} className="pb-2" />
            <p className="fw-semibold color-primary fs-5 pb-2">
              {exploreInfo?.title}
            </p>
            {/* <span className=" fw-lighter">{props.description}</span> */}
          </div>
        </div>
        <div className="col-lg-8 ">
          <div>
            <h1 className="color-primary fw-semibold">{exploreInfo?.title}</h1>
            <p className=" fw-lighter ">{exploreInfo?.description}</p>
          </div>
        </div>
      </div>

      <div
        style={{ display: exploreInfo?.image ? "block" : "none" }}
        className="row pb-4"
      >
        <div className="col-lg-12">
          <img
            src={exploreInfo?.image}
            className=""
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreChurchPage;
