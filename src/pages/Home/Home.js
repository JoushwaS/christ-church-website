import React from "react";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import ExplorerComponent from "../../components/ExplorerComponent/ExplorerComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutComponent />
      <CommunityComponent />
      <ExplorerComponent />
    </div>
  );
}

export default Home;
