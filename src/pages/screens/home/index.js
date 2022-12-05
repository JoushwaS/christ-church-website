import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../../app/home";
import { IMAGES } from "../../../constant/images";

export default function Home() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { loading, error, data } = useSelector((state) => state.home);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    dispatch(fetchHome(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (data) {
      setCards([
        {
          icon: IMAGES.homeCardIcons[0],
          title: "Registered Users",
          value: data?.registered,
        },
        {
          icon: IMAGES.homeCardIcons[1],
          title: "active Users",
          value: data?.active,
        },
        {
          icon: IMAGES.homeCardIcons[2],
          title: "de-active users",
          value: data?.inactive,
        },
        {
          icon: IMAGES.homeCardIcons[3],
          title: "expired Users",
          value: data?.expired,
        },
        {
          icon: IMAGES.homeCardIcons[4],
          title: "block Users",
          value: data?.blocked,
        },
        {
          icon: IMAGES.homeCardIcons[5],
          title: "deleted Users",
          value: data?.deleted,
        },
        {
          icon: IMAGES.homeCardIcons[6],
          title: "blogs",
          value: data?.blogs,
        },
      ]);
    }
  }, [data]);

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
        {/* CARDS  */}
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
