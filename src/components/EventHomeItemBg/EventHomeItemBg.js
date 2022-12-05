import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventHomeBgImg from "../../assets/images/Rectangle19.png";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../utils/helper";

function EventHomeItemBg() {
  const { events } = useSelector((state) => state.reducers);

  const [eventInfo, seteventInfo] = useState({});
  useEffect(() => {
    if (events?.length !== 0) {
      seteventInfo(events[0]);
    }
  }, [events]);

  console.log("eventInfo", eventInfo);

  return (
    <Link to={"/event/" + eventInfo?._id}>
      <div className="eventHomeBgComponent  rounded-ex">
        <img
          alt="event home background "
          className=" rounded-ex"
          src={eventInfo?.image}
        />
        <div className="eventHomeBgComponentDetail  text-white d-flex gap-3 rounded flex-column">
          {" "}
          <h1 className="mb-0">{eventInfo?.eventName} </h1>
          <p className=" fw-light mb-0 ">{eventInfo?.description} </p>
          <div className="d-flex flex-row justify-content-between">
            <span className="">Date: {formatDate(eventInfo?.eventDate)}</span>
            <span className="">Venue: {eventInfo?.eventVenue}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventHomeItemBg;
