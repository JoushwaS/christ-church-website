import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import ExplorerComponent from "../../components/ExplorerComponent/ExplorerComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBanner2 from "../../components/HomeBanner2/HomeBanner2";
import HomeEventsComponent from "../../components/HomeEventsComponent/HomeEventsComponent";
import HomePartnersSection from "../../components/HomePartnersSection/HomePartnersSection";
import HomeRecentSermonComponent from "../../components/HomeRecentSermonComponent/HomeRecentSermonComponent";
import HomeSermonComponent from "../../components/HomeSermonComponent/HomeSermonComponent";
import { GET_CONTENT_ACTION } from "../../redux/actions/actions";
function Home() {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.reducers);

  // console.log("website content>>>", content);

  useEffect(() => {
    dispatch(GET_CONTENT_ACTION());
  }, []);

  return (
    <div>
      {/* <HomeBanner /> */}
      <AboutComponent />
      <CommunityComponent />
      <ExplorerComponent />
      <HomeEventsComponent props={{ bannerHeading: true }} />
      <HomeBanner2 />
      <HomeSermonComponent />
      <HomeRecentSermonComponent />
      <HomePartnersSection />
    </div>
  );
}

export default Home;
