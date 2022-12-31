import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit, AiFillSave } from "react-icons/ai";

import { Link } from "react-router-dom";
import { truncateString } from "../../../utils/helper";
// import { fetchUsers } from "../../../app/users";
import {
  GET_CONTENT_ACTION,
  UPDATE_CONTENT_ACTION,
} from "../../../redux/actions/actions";
function Content() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setloading] = useState(true);
  const { content } = useSelector((state) => state.reducers);
  const [isEdit, setisEdit] = useState(false);
  const [previewImage, setpreviewImage] = useState({
    logo: "",
    aboutBanner: "",
    sacramentBanner: "",
    ministryBanner: "",
    sermonBanner: "",
    eventBanner: "",
    blogBanner: "",
  });
  const [uploadImage, setuploadImage] = useState(null);
  const [contentItem, setcontentItem] = useState();

  // console.log("content", content);

  // handle Events

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const prvImg = URL.createObjectURL(event.target.files[0]);
      setpreviewImage({
        ...previewImage,
        [event.target.name]: prvImg,
      });
      // setuploadImage(event.target.files[0]);
      setcontentItem({
        ...contentItem,
        [event.target.name]: event.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setcontentItem({
      ...contentItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (isEdit) {
      console.log(contentItem);
      // return;
      dispatch(UPDATE_CONTENT_ACTION(contentItem, token));
      setisEdit(!isEdit);
    } else {
      setisEdit(!isEdit);
    }
  };
  useEffect(() => {
    dispatch(GET_CONTENT_ACTION());
  }, [token]);

  useEffect(() => {
    if (content) {
      setloading(false);
    }
  }, [content]);
  return (
    <>
      <div className="container-fluid content_details m-0 p-0">
        <div className="row">
          <div className="col-12 text-center">
            <div className="col-lg-12">
              <h1 className="fw-bold">Website Content</h1>
            </div>
          </div>
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              {/* <h1
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  // props.setPage("sermons");
                  navigate("/sermons");
                }}
              >
                <FaArrowLeft />
              </h1> */}
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
        </div>

        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>App Logo</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 d-flex flex-direction-column justify-content-center blog_image ">
                  <img
                    className="img-fluid"
                    src={previewImage.logo ? previewImage.logo : content?.logo}
                    alt="sermon_img"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="logo"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>Social Media </h2>
              <div className="row">
                <div className="col-sm-12 col-md-4   blog_image ">
                  {/* EMAIL */}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Email: </p>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.email}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Email : </p>
                      <p className="fs-4 fw-light"> {content?.email} </p>
                    </>
                  )}
                  {/* LOCATION */}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Location: </p>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="location"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.location}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Location : </p>
                      <p className="fs-4 fw-light"> {content?.location} </p>
                    </>
                  )}
                  {/* facebook */}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Facebook: </p>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="facebookLink"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.facebookLink}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Facebook : </p>
                      <p className="fs-4 fw-light"> {content?.facebookLink} </p>
                    </>
                  )}
                  {/* Twitter*/}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Twitter: </p>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="twitterLink"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.twitterLink}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Twitter : </p>
                      <p className="fs-4 fw-light"> {content?.twitterLink} </p>
                    </>
                  )}
                  {/* Youtube*/}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Youtube: </p>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="youtubeLink"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.youtubeLink}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Youtube : </p>
                      <p className="fs-4 fw-light"> {content?.youtubeLink} </p>
                    </>
                  )}
                  {/* Mission Statement*/}
                  {isEdit ? (
                    <>
                      <p className="fs-4 py-2 m-0">Mission Statement: </p>
                      <textarea
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        name="missionStatement"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={content?.missionStatement}
                      />
                    </>
                  ) : (
                    <>
                      <p className="fs-4">Mission Statement : </p>
                      <p className="fs-4 fw-light">
                        {" "}
                        {content?.missionStatement}{" "}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT BANNER */}
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>About Banner</h2>
              <div className="row">
                <div
                  className={`col-sm-12 ${
                    isEdit ? "col-md-7" : "col-md-12 "
                  }d-flex flex-direction-column justify-content-center blog_image `}
                >
                  <img
                    className="img-fluid"
                    src={
                      previewImage.aboutBanner
                        ? previewImage.aboutBanner
                        : content?.aboutBanner
                    }
                    alt="aboutBanner"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="aboutBanner"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sacrament Banner */}
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>Sacrament Banner</h2>
              <div className="row">
                <div
                  className={`col-sm-12 ${
                    isEdit ? "col-md-7" : "col-md-12 "
                  }d-flex flex-direction-column justify-content-center blog_image `}
                >
                  <img
                    className="img-fluid"
                    src={
                      previewImage.sacramentBanner
                        ? previewImage.sacramentBanner
                        : content?.sacramentBanner
                    }
                    alt="aboutBanner"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="sacramentBanner"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ministry Banner */}
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>Ministry Banner</h2>
              <div className="row">
                <div
                  className={`col-sm-12 ${
                    isEdit ? "col-md-7" : "col-md-12 "
                  }d-flex flex-direction-column justify-content-center blog_image `}
                >
                  <img
                    className="img-fluid"
                    src={
                      previewImage.ministryBanner
                        ? previewImage.ministryBanner
                        : content?.ministryBanner
                    }
                    alt="ministryBanner"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="ministryBanner"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sermon Banner */}
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>Sermon Banner</h2>
              <div className="row">
                <div
                  className={`col-sm-12 ${
                    isEdit ? "col-md-7" : "col-md-12 "
                  }d-flex flex-direction-column justify-content-center blog_image `}
                >
                  <img
                    className="img-fluid"
                    src={
                      previewImage.sermonBanner
                        ? previewImage.sermonBanner
                        : content?.sermonBanner
                    }
                    alt="sermonBanner"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="sermonBanner"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog Banner*/}
        <div className=" row ">
          <div className="col-12 mt-3">
            <div className="card p-3 ">
              <h2>Blog Banner</h2>
              <div className="row">
                <div
                  className={`col-sm-12 ${
                    isEdit ? "col-md-7" : "col-md-12 "
                  }d-flex flex-direction-column justify-content-center blog_image `}
                >
                  <img
                    className="img-fluid"
                    src={
                      previewImage.blogBanner
                        ? previewImage.blogBanner
                        : content?.blogBanner
                    }
                    alt="blogBanner"
                  />
                  {isEdit ? (
                    <input
                      type="file"
                      name="blogBanner"
                      onChange={onImageChange}
                      className="filetype p-4"
                      id="group_image"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
