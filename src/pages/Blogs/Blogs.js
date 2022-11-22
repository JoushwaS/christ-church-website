import React from "react";
import BlogImg1 from "../../assets/images/BlogImg1.png";
import BlogImg2 from "../../assets/images/BlogImg2.png";
import BlogImg3 from "../../assets/images/BlogImg3.png";
import ColumnItem from "../../components/ColumnItem/ColumnItem";
function Blogs() {
  const blogsData = [
    {
      blogName: "Blogs Name",
      subHeading: "Introduction:",
      blogImg: BlogImg1,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      blogName: "Blogs Name",
      subHeading: "Introduction:",
      blogImg: BlogImg2,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      blogName: "Blogs Name",
      subHeading: "Introduction:",
      blogImg: BlogImg3,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
  ];
  return (
    <div className="blogs-container container-xl p-4">
      {blogsData.map((item, index) => {
        const blogItem = { ...item, index };
        return <ColumnItem props={blogItem} />;
      })}
    </div>
  );
}

export default Blogs;
