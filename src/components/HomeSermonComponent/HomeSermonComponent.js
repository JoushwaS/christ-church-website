import { useSelector, useDispatch } from "react-redux";
import { GET_SERMONS_ACTION } from "../../redux/actions/actions";
import React, { useState, useEffect } from "react";
import { formatDate } from "../../utils/helper";
import pastorImage from "../../assets/images/pastorSampleImage.png";

export const SermonButton = (props) => {
  const { sermonType, _id } = props?.sermonItem;
  return (
    <>
      {props.text == "All Sermons" ? (
        <a href={"/sermons"}>
          <button className="sermonButton border-white rounded-pill">
            {props.text}
          </button>
        </a>
      ) : (
        <a href={"/sermon/" + sermonType + "/" + _id}>
          <button className="sermonButton border-white rounded-pill">
            {props.text}
          </button>
        </a>
      )}
    </>
  );
};
function HomeSermonComponent() {
  const [sermonInfo, setsermonInfo] = useState();
  const dispatch = useDispatch();

  const { sermons } = useSelector((state) => state.reducers);
  useEffect(() => {
    dispatch(GET_SERMONS_ACTION());
  }, []);
  console.log("sermonInfo", sermonInfo);
  useEffect(() => {
    if (sermons?.length) {
      setsermonInfo(sermons[0]);
    }
  }, [sermons]);

  return (
    <div className="homeSermonComponent py-2 text-white ">
      <div className="homesermon-container d-flex flex-lg-row flex-sm-column ">
        <div className="d-flex justify-content-center  m-0">
          <div className="d-flex flex-column justify-content-center ">
            <h1 className="fs-1 ">{sermonInfo?.sermonName}</h1>
            <p className="fs-5 text-decoration-underline">Topic</p>
            <p className="fs-5 ">{sermonInfo?.description}</p>
            <p className="fs-5 ">Date : {formatDate(sermonInfo?.createdAt)}</p>

            <div className="d-flex gap-4 ">
              <SermonButton
                text="Watch Sermons"
                sermonItem={sermonInfo ? sermonInfo : ""}
              />
              <SermonButton
                text="All Sermons"
                sermonItem={sermonInfo ? sermonInfo : ""}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-end">
          <img className="img-pastor" src={pastorImage} alt="sermon " />
        </div>
      </div>

      {/* </div>
      </div> */}
    </div>
  );
}

export default HomeSermonComponent;
