import React from "react";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import ExplorerComponent from "../../components/ExplorerComponent/ExplorerComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBanner2 from "../../components/HomeBanner2/HomeBanner2";
import HomeEventsComponent from "../../components/HomeEventsComponent/HomeEventsComponent";
import HomeSermonComponent from "../../components/HomeSermonComponent/HomeSermonComponent";

function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutComponent />
      <CommunityComponent />
      <ExplorerComponent />
      <HomeEventsComponent />
      <HomeBanner2 />
      <HomeSermonComponent />
    </div>
  );
}

export default Home;
