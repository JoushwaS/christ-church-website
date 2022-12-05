import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogDetail(props) {
  const { blog } = useSelector((state) => state.blogs);
  return (
    <>
      <div className="container-fluid blog_details">
        <div className="d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">
            <h1
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                props.setPage("blogs");
              }}
            >
              <FaArrowLeft />
            </h1>
          </div>
          <div className="bd-highlight">
            <button className="btn btn-success px-5 py-2">Edit</button>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="card p-3 blog_wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-4 blog_image">
                <img src={blog?.image} alt="blog" />
              </div>
              <div className="col-sm-12 col-md-8 p-3 blog_header">
                <h1> {blog?.title} </h1>
                <h3 className="mt-5">Introduction</h3>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
              <div className="col-12 blog-footer">
                <h1 className="mt-5">Explanation</h1>
                <p className="mt-3">{blog?.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
