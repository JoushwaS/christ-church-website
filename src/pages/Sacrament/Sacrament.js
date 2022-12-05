import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SacramentItem from "../../components/SacramentItem/SacramentItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  GET_EVENTS_LIST_ACTION,
  GET_SACRAMENTS_LIST_ACTION,
} from "../../redux/actions/actions";

function Sacrament() {
  const dispatch = useDispatch();
  const { sacraments } = useSelector((state) => state.reducers);

  const tempSacrament = [
    {
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669316032/kw3burrwz0xksygriyfh.png",

      sacramentName: "BAPTISM",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      sacramentVenue: "christ church drigh road ",
      sacramentDate: "2022-12-11",
    },
    {
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669316032/kw3burrwz0xksygriyfh.png",

      sacramentName: "BAPTISM",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      sacramentVenue: "christ church drigh road ",
      sacramentDate: "2022-12-11",
    },
    {
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669316032/kw3burrwz0xksygriyfh.png",

      sacramentName: "BAPTISM",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      sacramentVenue: "christ church drigh road ",
      sacramentDate: "2022-12-11",
    },
    {
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669316032/kw3burrwz0xksygriyfh.png",

      sacramentName: "BAPTISM",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      sacramentVenue: "christ church drigh road ",
      sacramentDate: "2022-12-11",
    },
    {
      image:
        "https://res.cloudinary.com/dbk1sma3e/image/upload/v1669316032/kw3burrwz0xksygriyfh.png",

      sacramentName: "BAPTISM",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      sacramentVenue: "christ church drigh road ",
      sacramentDate: "2022-12-11",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(sacraments);

  useEffect(() => {
    dispatch(GET_SACRAMENTS_LIST_ACTION());
  }, []);

  return (
    <div className="container-xl p-4">
      <div className="row py-3">
        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          //   responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          {sacraments?.map((item) => {
            return <SacramentItem props={item} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Sacrament;
