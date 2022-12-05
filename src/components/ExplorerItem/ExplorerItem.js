// import { iteratorSymbol } from "immer//internal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExplorerItem({ props }) {
  console.log(props);
  return (
    <Link to={"/explore-church/" + props?._id}>
      <div className="explorerItem p-4 m-3 d-flex text-center flex-column justify-content-center">
        <img src={props.imageLogo} className="pb-2" />
        <p className="fw-semibold color-primary fs-5 pb-2">{props.title}</p>
        {/* <span className=" fw-lighter">{props.description}</span> */}
      </div>
    </Link>
  );
}

export default ExplorerItem;
