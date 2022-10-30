import React from "react";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutComponent />
      <CommunityComponent />
    </div>
  );
}

export default Home;
