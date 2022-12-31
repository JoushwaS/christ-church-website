import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "../loading";
import { useLocation, useParams } from "react-router-dom";
// import { renderPage } from "../../../utils/helper";
export default function Sermon(props) {
  const location = useLocation();
  const { pageType } = useParams();
  const [currentPage, setcurrentPage] = useState();
  // COMPONENTS
  const Sermons = lazy(() => import("./Sermons"));
  console.log(pageType);
  const SermonDetail = lazy(() => import("./SermonDetail"));

  // const pages = [
  //   {
  //     name: "sermons",
  //     component: <Sermons />,
  //   },
  //   {
  //     name: "sermon_details",
  //     component: <SermonDetail />,
  //   },
  //   {
  //     name: "create_sermon",
  //     component: <SermonDetail />,
  //   },
  // ];
  // STATE MANAGEMENT
  const [page, setPage] = new useState(props.page); // NAVIGATION

  const renderPage = (page) => {
    return (
      <>
        {currentPage === "all" ? (
          <Sermons page={page} setPage={setPage} />
        ) : currentPage === "sermon_details" ? (
          <SermonDetail page={page} setPage={setPage} />
        ) : currentPage === "create_sermon" ? (
          <SermonDetail page={page} setPage={setPage} />
        ) : (
          // <Sermons page={page} setPage={setPage} />
          ""
        )}
      </>
    );
  };
  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  useEffect(() => {
    setcurrentPage(pageType);
  }, [pageType]);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>{renderPage(page)}</Suspense>
    </>
  );
}
