import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../utils/helper";
import {
  GET_SERMON_ACTION,
  GET_EVENT_ACTION,
  GET_BLOG_ACTION,
} from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { truncateString, checkDescriptionLength } from "../../utils/helper";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayerComponent from "../../components/AudioPlayerComponent/AudioPlayerComponent";
import VideoPlayerComponent from "../../components/VideoPlayerComponent/VideoPlayerComponent";
function ChildPage() {
  const [seeMore, setseeMore] = useState(false);

  const dispatch = useDispatch();
  const { sermon, event, blog } = useSelector((state) => state.reducers);
  const [childPageInfo, setchildPageInfo] = useState({
    blog: "",
    sermon: "",
    event: "",
  });
  const { sermonType, sermonId, eventId, blogId } = useParams();

  console.log("sermon>>>>>>", blogId);

  useEffect(() => {
    if (sermonId) {
      dispatch(GET_SERMON_ACTION(sermonId));
    } else if (eventId) {
      dispatch(GET_EVENT_ACTION(eventId));
    } else if (blogId) {
      dispatch(GET_BLOG_ACTION(blogId));
    }
  }, [sermonType, sermonId, eventId, blogId]);
  useEffect(() => {
    if (sermon) {
      setchildPageInfo({
        ...childPageInfo,
        sermon: sermon,
      });
    } else if (event) {
      setchildPageInfo({
        ...childPageInfo,
        event: event,
      });
    } else if (blog) {
      setchildPageInfo({
        ...childPageInfo,
        event: blog,
      });
    }
  }, [sermon, event, blog]);

  console.log("childPageInfo", childPageInfo);

  return (
    <div className="container-xl p-2">
      {sermonId && (
        <>
          <div className="row py-3">
            <div className="col-lg-4">
              <img
                src={childPageInfo?.sermon?.thumbnail}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8 pt-3">
              <div className="d-flex flex-column ">
                <h1 className="color-primary">
                  {childPageInfo?.sermon?.sermonName}
                </h1>

                <p>
                  {seeMore
                    ? childPageInfo?.sermon?.description
                    : truncateString(childPageInfo?.sermon?.description, 400)}

                  <span
                    style={{
                      display: checkDescriptionLength(
                        childPageInfo?.sermon?.description
                      )
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
          <div className="row ">
            <div className="col-lg-12">
              {sermonType == "audio" ? (
                <>
                  <div div className="">
                    <AudioPlayerComponent
                      props={childPageInfo?.sermon?.audioUrl}
                    />
                  </div>
                </>
              ) : (
                <>
                  <VideoPlayerComponent
                    props={childPageInfo?.sermon?.videoUrl}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
      {eventId && (
        <>
          <div className="row py-3">
            <div className="col-lg-4">
              <img src={event?.image} className="img-fluid" />
            </div>
            <div className="col-lg-8 pt-3">
              <div className="d-flex flex-column ">
                <h1 className="color-primary">{event?.eventName}</h1>

                <p>
                  {seeMore
                    ? event?.description
                    : truncateString(event?.description, 400)}

                  <span
                    style={{
                      display: checkDescriptionLength(event?.description)
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

                <div className="d-flex color-primary    flex-row justify-content-between">
                  <p className="fw-bold">
                    Date: {formatDate(event?.eventDate)}
                  </p>
                  <p className="fw-bold">Venue: {event?.eventVenue}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {blogId && (
        <>
          <div className="row py-3">
            <div className="col-lg-4">
              <img src={blog?.image} className="img-fluid" />
            </div>
            <div className="col-lg-8 pt-3">
              <div className="d-flex flex-column ">
                <h1 className="color-primary">{blog?.blogName}</h1>
                <p
                  style={{ display: blog?.subHeading != "" ? "block" : "none" }}
                  className="fw-semibold color-secondary"
                >
                  {blog?.subHeading}
                </p>
                <p>
                  {seeMore
                    ? blog?.description
                    : truncateString(blog?.description, 400)}

                  <span
                    style={{
                      display: checkDescriptionLength(blog?.description, 400)
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

                <div className="d-flex color-primary    flex-row justify-content-between">
                  <p className="fw-bold">Date: {formatDate(blog?.createdAt)}</p>
                  {/* <p className="fw-bold">Venue: {event?.eventVenue}</p> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChildPage;
