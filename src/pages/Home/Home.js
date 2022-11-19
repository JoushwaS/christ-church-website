import React from "react";

import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CommunityComponent from "../../components/CommunityComponent/CommunityComponent";
import ExplorerComponent from "../../components/ExplorerComponent/ExplorerComponent";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeBanner2 from "../../components/HomeBanner2/HomeBanner2";
import HomeEventsComponent from "../../components/HomeEventsComponent/HomeEventsComponent";
import HomePartnersSection from "../../components/HomePartnersSection/HomePartnersSection";
import HomeRecentSermonComponent from "../../components/HomeRecentSermonComponent/HomeRecentSermonComponent";
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
      <HomeRecentSermonComponent />
      <HomePartnersSection />
    </div>
  );
}

export default Home;
