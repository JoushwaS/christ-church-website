import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchBlogs, deleteBlog, actions } from "../../../app/blogs";

export default function Blogs(props) {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const { blogs } = useSelector((state) => state.blogs);
  const [show, setShow] = useState(false);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogs(token));
  }, [dispatch, token]);

  return (
    <>
      <div className="container-fluid blog">
        <div className="d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">
            <h1>Recent Blog</h1>
          </div>
          <div className="bd-highlight">
            <button
              className="btn pink_button"
              onClick={(e) => {
                e.preventDefault(props.setPage("create_blog"));
              }}
            >
              <FaBlog /> Add New Blog
            </button>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="card p-3 blog_wrapper">
            {blogs?.map((item, index) => {
              return (
                // <Link
                //   to="/blog_details"
                //   key={index}
                //   onClick={(e) => {
                //     e.preventDefault();
                //     props.setPage("blog_details");
                //   }}
                // >
                <div className="blog-card mt-3" key={item._id ? item._id : index}>
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage: `url(${item?.image})`,
                      }}
                    ></div>
                  </div>
                  <div className="description">
                    <h1>{item?.title}</h1>
                    <p>{item?.explanation}</p>
                    <div className="d-flex mt-5" style={{ justifyContent: "flex-end" }}>
                      <button
                        className="btn btn-info text-white px-5 py-2"
                        onClick={(e) => {
                          dispatch(actions.setBlog(item));
                          e.preventDefault(props.setPage("blog_details"));
                        }}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-danger mx-2 px-5 py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setBlogId(item._id);
                          setShow(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                // </Link>
              );
            })}

            {blogs?.length > 5 && (
              <div className="d-flex justify-content-center mt-5">
                <button className="btn pink_button">See More</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Blog Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this blog?</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                deleteBlog({
                  token,
                  blogId,
                })
              );
              setShow(false);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-info"
            onClick={(e) => {
              e.preventDefault(setShow(false));
            }}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
