import React, { useState, useEffect } from "react";
import SermonPageBgImg from "../../assets/images/SermonPageBgImg.png";
import SermonItemComponent from "../../components/SermonItemComponent/SermonItemComponent";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  GET_SERMONS_ACTION,
  GET_SERMON_ACTION,
  GET_SERMONS_TYPE_ACTION,
} from "../../redux/actions/actions";
import { padding } from "@mui/system";

function Sermons() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch();
  const { sermons } = useSelector((state) => state.reducers);

  const sermonTypeList = ["video", "audio"];
  const [sermonType, setsermonType] = useState("video");

  // console.log(sermons);

  const audioSermonList = [
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
    {
      title: "Christ Church Sermon Audio",
      thumbnail: SermonPageBgImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      url: "#",
    },
  ];

  const handleChangeSermonType = () => {};
  useEffect(() => {
    dispatch(GET_SERMONS_ACTION());
  }, []);

  return (
    <div className="container-xl ">
      {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center flex-row">
          {sermonTypeList.map((item) => {
            return (
              <p
                onClick={() => {
                  // dispatch();
                  setsermonType(item);
                }}
                className={`px-4 fw-semibold ${
                  sermonType === item ? "text-underline-thick" : ""
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div> */}
      {/*  */}
      <div className="row  gap-1">
        {/* <div className="sermons-list-container d-flex justify-content-center  flex-wrap"> */}
        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          //   responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          {sermons.map((item) => {
            return (
              <div className="col-lg-6 py-5">
                <SermonItemComponent props={item} />
              </div>
            );
          })}
        </Carousel>

        {/* {sermonType === "video"
            ? sermons?.map((item) => {
                return (
                  <div className="col-lg-3">
                    <SermonItemComponent props={item} />
                  </div>
                );
              })
            : audioSermonList.map((item) => {
                return (
                  <div className="col-lg-3">
                    <SermonItemComponent props={item} />
                  </div>
                );
              })} */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Sermons;
