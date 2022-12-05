import React, { useState, useEffect } from "react";
import { GET_SERMON_ACTION } from "../../redux/actions/actions";

// import
import { truncateString, checkDescriptionLength } from "../../utils/helper";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function ChildPageItem({ props }) {
  const [seeMore, setseeMore] = useState(false);
  console.log(props);

  const { sermon, event, blog } = props ? props : "";
  // useEffect(() => {
  //   if (sermonId) {
  //     dispatch(GET_SERMON_ACTION(sermonId));
  //   }
  // }, [sermonType, sermonId, eventId, blogId]);
  return (
    <>
      {sermon && (
        <>
          <div className="row py-3">
            <div className="col-lg-4">
              <img src={sermon?.thumbnail} className="img-fluid" />
            </div>
            <div className="col-lg-8 pt-3">
              <div className="d-flex flex-column ">
                <h1 className="color-primary">{sermon?.sermonName}</h1>

                <p>
                  {seeMore
                    ? sermon?.description
                    : truncateString(sermon?.description, 400)}

                  <span
                    style={{
                      display: checkDescriptionLength(sermon.description)
                        ? ""
                        : "none",
                    }}
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
          <div className="row py-3">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center">
                {props?.sermon?.sermonType == "audio" ? (
                  <>
                    <AudioPlayer
                      autoPlay
                      src={props?.sermon?.audioUrl}
                      onPlay={(e) => console.log("onPlay")}
                      // other props here
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ChildPageItem;
