import React from "react";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import ExplorerComponent from "../../components/ExplorerComponent/ExplorerComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeEventsComponent from "../../components/HomeEventsComponent/HomeEventsComponent";

function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutComponent />
      <CommunityComponent />
      <ExplorerComponent />
      <HomeEventsComponent />
    </div>
  );
}

export default Home;
