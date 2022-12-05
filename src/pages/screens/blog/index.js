import { lazy, Suspense, useState } from "react";
import LoadingScreen from "../loading";

export default function Blog(props) {
  // COMPONENTS
  const Blogs = lazy(() => import("./blogs"));
  const CreateBlog = lazy(() => import("./create"));
  const BlogDetail = lazy(() => import("./details"));

  // STATE MANAGEMENT
  const [page, setPage] = new useState(props.page); // NAVIGATION
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        {page === "blogs" ? (
          <Blogs setPage={setPage} />
        ) : page === "create_blog" ? (
          <CreateBlog setPage={setPage} />
        ) : (
          <BlogDetail setPage={setPage} />
        )}
      </Suspense>
    </>
  );
}
