// import { iteratorSymbol } from "immer//internal";
import React from "react";

function ExplorerItem({ props }) {
  console.log(props);
  return (
    <div className="explorerItem p-4 m-3 d-flex text-center flex-column justify-content-center">
      <img src={props.icon} className="pb-2" />
      <p className="fw-semibold color-primary fs-5 pb-2">{props.cardHeading}</p>
      <span className=" fw-lighter">{props.description}</span>
    </div>
  );
}

export default ExplorerItem;
