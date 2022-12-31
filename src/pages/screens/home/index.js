import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../../app/home";
import { IMAGES } from "../../../constant/images";
import {
  GET_OVERSEAPARTNERS_LIST_ACTION,
  GET_SERMONS_ACTION,
  GET_BLOGS_ACTION,
  GET_EVENTS_LIST_ACTION,
  GET_SACRAMENTS_LIST_ACTION,
  GET_MINISTERIES_LIST_ACTION,
} from "../../../redux/actions/actions";
export default function Home() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { partners, sacraments, events, sermons, blogs, ministeries } =
    useSelector((state) => state.reducers);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    dispatch(GET_OVERSEAPARTNERS_LIST_ACTION());
    dispatch(GET_SERMONS_ACTION());
    dispatch(GET_BLOGS_ACTION());
    dispatch(GET_MINISTERIES_LIST_ACTION());
    dispatch(GET_SACRAMENTS_LIST_ACTION());
    dispatch(GET_EVENTS_LIST_ACTION());
  }, [token]);
  useEffect(() => {
    if (partners && sacraments && events && sermons && blogs) {
      setCards([
        {
          icon: IMAGES.homeCardIcons[0],
          title: "Partners",
          value: partners?.length,
        },

        {
          icon: IMAGES.homeCardIcons[0],
          title: "sacraments",
          value: sacraments?.length,
        },
        {
          icon: IMAGES.homeCardIcons[0],
          title: "events",
          value: events?.length,
        },
        {
          icon: IMAGES.homeCardIcons[0],
          title: "sermons",
          value: sermons?.length,
        },
        {
          icon: IMAGES.homeCardIcons[0],
          title: "sermons",
          value: sermons?.length,
        },
        {
          icon: IMAGES.homeCardIcons[0],
          title: "blogs",
          value: blogs?.length,
        },
        {
          icon: IMAGES.homeCardIcons[0],
          title: "ministeries",
          value: ministeries?.length,
        },
      ]);
    }
  }, [partners, sacraments, events, sermons, blogs]);

  const loadingCard = [
    {
      icon: IMAGES.homeCardIcons[0],
      title: "Registered Users",
    },
    {
      icon: IMAGES.homeCardIcons[1],
      title: "active Users",
    },
    {
      icon: IMAGES.homeCardIcons[2],
      title: "de-active users",
    },
    {
      icon: IMAGES.homeCardIcons[3],
      title: "expired Users",
    },
    {
      icon: IMAGES.homeCardIcons[4],
      title: "block Users",
    },
    {
      icon: IMAGES.homeCardIcons[5],
      title: "deleted Users",
    },
    {
      icon: IMAGES.homeCardIcons[6],
      title: "blogs",
    },
  ];

  const valueFormatter = (value) => {
    if (value > 999 && value < 1000000) {
      return Math.abs(value) > 999
        ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + "K"
        : Math.sign(value) * Math.abs(value);
    }
    if (value > 999999 && value < 1000000000) {
      return Math.abs(value) > 999999
        ? Math.sign(value) * (Math.abs(value) / 1000000).toFixed(1) + "M"
        : Math.sign(value) * Math.abs(value);
    }
    return value;
  };

  return (
    <>
      <div className="container-fluid home">
        <div className="col-12 text-center">
          <h2>Dashboard</h2>
        </div>

        <div className="row">
          {loading
            ? loadingCard.map((element, index) => {
                return (
                  <div className="col-md-3 col-sm-6 mt-3" key={index}>
                    <div className="card dashboard_card">
                      <div className="card-body dashboard_card_body">
                        <img src={element.icon} alt="icon" />
                        <h5 className="mt-3">{element.title}</h5>
                        <p>...</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : cards.map((element, index) => {
                return (
                  <div className="col-md-3 col-sm-6 mt-3" key={index}>
                    <div className="card dashboard_card">
                      <div className="card-body dashboard_card_body">
                        <img src={element.icon} alt="icon" />
                        <h5 className="mt-3">{element.title}</h5>
                        <p>{valueFormatter(element.value)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
