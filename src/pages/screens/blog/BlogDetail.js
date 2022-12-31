import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEdit, AiFillSave } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

import VideoPlayerComponent from "../../../components/VideoPlayerComponent/VideoPlayerComponent";
import {
  UPDATE_BLOG_ACTION,
  CREATE_BLOG_ACTION,
  GET_BLOG_ACTION,
} from "../../../redux/actions/actions";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function BlogDetail(props) {
  const navigate = useNavigate();
  console.log(props);
  const dispatch = useDispatch();
  const { pageType, blogId } = useParams();
  console.log(">>>>>>", { pageType });

  const [isEdit, setisEdit] = useState(false);
  const [previewImage, setpreviewImage] = useState(null);
  const [uploadImage, setuploadImage] = useState(null);

  const { blog } = useSelector((state) => state.reducers);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  const [blogItem, setblogItem] = useState();
  // HANDLERS
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      // setuploadImage(event.target.files[0]);
      setblogItem({
        ...blogItem,
        file: event.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setblogItem({
      ...blogItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (pageType == "blog_details") {
      if (isEdit) {
        console.log(blogItem);
        // return;
        dispatch(UPDATE_BLOG_ACTION(blogItem, token, blog._id));
        setisEdit(!isEdit);
      } else {
        setisEdit(!isEdit);
      }
    } else {
      dispatch(CREATE_BLOG_ACTION(blogItem, token, navigate));
      console.log(blogItem);
    }
  };

  useEffect(() => {
    if (blogId) {
      dispatch(GET_BLOG_ACTION(blogId));
    }
  }, [blogId]);

  // useEffect(() => {
  //   if (blog) {
  //     setblogItem(blog);
  //   }
  // }, [blog, blogId]);

  return (
    <>
      {pageType === "blog_details" ? (
        <div className="container-fluid blog_details">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <h1
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  // props.setPage("sermons");
                  navigate("/blogs");
                }}
              >
                <FaArrowLeft />
              </h1>
            </div>
            <div className="">
              <button
                className="btn bg-primary-color px-5 py-2 text-white"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {isEdit ? (
                  <span className="">
                    Save
                    <AiFillSave />
                  </span>
                ) : (
                  <span>
                    Edit
                    <AiOutlineEdit />
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card p-3 blog_wrapper">
              <div className="row">
                {/* blog previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  <img
                    src={previewImage ? previewImage : blog?.image}
                    alt="sermon_img"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-sm-12 col-md-8 p-3 blog_header">
                  <h3 className="text-black fw-bold">Topic:</h3>

                  {isEdit ? (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="blog Name"
                      name="blogName"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={blog.blogName}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {blog?.blogName} </p>
                    </>
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {isEdit ? (
                    <textarea
                      type="text"
                      defaultValue={blog?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  ) : (
                    <>
                      <p className="fs-5">{blog?.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid blog_details">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <h1
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/blogs");
                  // props.setPage("sermons");
                }}
              >
                <FaArrowLeft />
              </h1>
            </div>
            <div className="">
              <button
                className="btn bg-primary-color px-5 py-2 text-white"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {pageType === "blog_details" ? (
                  isEdit ? (
                    <span className="">
                      Save
                      <AiFillSave />
                    </span>
                  ) : (
                    <span>
                      Edit
                      <AiOutlineEdit />
                    </span>
                  )
                ) : (
                  <span className="">
                    Add blog
                    <BiAddToQueue />
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card p-3 blog_wrapper">
              <div className="row">
                {/* blog previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  {pageType === "blog_details" ? (
                    <img
                      src={previewImage ? previewImage : blog?.image}
                      alt="sermon_img"
                    />
                  ) : (
                    <img
                      src={
                        previewImage
                          ? previewImage
                          : "https://via.placeholder.com/350x150"
                      }
                      alt="sermon_img"
                    />
                  )}

                  {pageType === "blog_details" ? (
                    isEdit ? (
                      <input
                        type="file"
                        onChange={onImageChange}
                        className="filetype p-4"
                        id="group_image"
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    <input
                      type="file"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  )}
                </div>
                <div className="col-sm-12 col-md-8 p-3 blog_header">
                  <h3 className="text-black fw-bold">Topic:</h3>

                  {pageType === "blog_details" ? (
                    isEdit ? (
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="blog Name"
                        name="blogName"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={blog.blogName}
                      />
                    ) : (
                      <>
                        <p className="fs-5"> {blog?.blogName} </p>
                      </>
                    )
                  ) : (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="blog Name"
                      name="blogName"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      value={blogItem?.blogName}
                    />
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {pageType === "blog_details" ? (
                    isEdit ? (
                      <textarea
                        type="text"
                        defaultValue={blog?.description}
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                      />
                    ) : (
                      <>
                        <p className="fs-5">{blog?.description}</p>
                      </>
                    )
                  ) : (
                    <textarea
                      type="text"
                      value={blogItem?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
