import React, { useEffect, useState } from "react";
import EventHomeItem from "../EventHomeItem/EventHomeItem";
import { useSelector, useDispatch } from "react-redux";

function EventsListHome({ props }) {
  const { events } = useSelector((state) => state.reducers);

  // const { eventsList } = props;

  // const eventsList = [
  //   {
  //     eventName: "Event Name",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
  //     date: "12/12/2022",
  //     venue: "Parish Church",
  //   },
  //   {
  //     eventName: "Event Name",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
  //     date: "12/12/2022",
  //     venue: "Parish Church",
  //   },
  //   {
  //     eventName: "Event Name",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
  //     date: "12/12/2022",
  //     venue: "Parish Church",
  //   },
  // ];
  return (
    <div className="eventsListHomeContainer  d-flex flex-column  ">
      {events?.slice(0, 2).map((item) => {
        return <EventHomeItem props={item} />;
      })}
    </div>
  );
}

export default EventsListHome;
