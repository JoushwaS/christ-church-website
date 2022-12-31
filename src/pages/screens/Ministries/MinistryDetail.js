import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEdit, AiFillSave } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

import VideoPlayerComponent from "../../../components/VideoPlayerComponent/VideoPlayerComponent";
import {
  UPDATE_MINISTERIES_ACTION,
  CREATE_MINISTERIES_ACTION,
  GET_MINISTERY_ACTION,
} from "../../../redux/actions/actions";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function MinistryDetail(props) {
  const navigate = useNavigate();
  console.log(props);
  const dispatch = useDispatch();
  const { pageType, ministryId } = useParams();
  console.log(">>>>>>", { pageType });

  const [isEdit, setisEdit] = useState(false);
  const [previewImage, setpreviewImage] = useState(null);
  const [uploadImage, setuploadImage] = useState(null);

  const { ministry } = useSelector((state) => state.reducers);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  const [ministryItem, setministryItem] = useState();
  // HANDLERS
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      // setuploadImage(event.target.files[0]);
      setministryItem({
        ...ministryItem,
        file: event.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setministryItem({
      ...ministryItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (pageType == "ministery_details") {
      if (isEdit) {
        console.log(ministryItem);
        // return;
        dispatch(UPDATE_MINISTERIES_ACTION(ministryItem, token, ministry._id));
        setisEdit(!isEdit);
      } else {
        setisEdit(!isEdit);
      }
    } else {
      dispatch(CREATE_MINISTERIES_ACTION(ministryItem, token, navigate));
      console.log(ministryItem);
    }
  };

  useEffect(() => {
    if (ministryId) {
      dispatch(GET_MINISTERY_ACTION(ministryId));
    }
  }, [ministryId]);

  useEffect(() => {
    if (ministry) {
      console.log(">>>>", ministry);
    }
  }, [ministry]);

  return (
    <>
      {pageType === "ministery_details" ? (
        <div className="container-fluid blog_details">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <h1
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  // props.setPage("sermons");
                  navigate("/ministeries");
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
                {/* ministry previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  <img
                    className="img-fluid"
                    src={previewImage ? previewImage : ministry?.image}
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
                <div className="col-sm-12 col-md-8 p-3 ministry_header">
                  <h3 className="text-black fw-bold">Ministry Name:</h3>

                  {isEdit ? (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="ministry Name"
                      name="ministryName"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={ministry?.ministryName}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {ministry?.ministryName} </p>
                    </>
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {isEdit ? (
                    <textarea
                      type="text"
                      defaultValue={ministry?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  ) : (
                    <>
                      <p className="fs-5">{ministry?.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid ministery_details">
            <div className="d-flex bd-highlight">
              <div className="flex-grow-1 bd-highlight">
                <h1
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/ministeries");
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
                  {pageType === "ministery_details" ? (
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
                      Add ministry
                      <BiAddToQueue />
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="card p-3 blog_wrapper">
                <div className="row">
                  {/* ministry previewImage */}
                  <div className="col-sm-12 col-md-4 blog_image">
                    {pageType === "ministery_details" ? (
                      <img
                        className="img-fluid"
                        src={previewImage ? previewImage : ministry?.image}
                        alt="sermon_img"
                      />
                    ) : (
                      <img
                        className="img-fluid"
                        src={
                          previewImage
                            ? previewImage
                            : "https://via.placeholder.com/350x150"
                        }
                        alt="sermon_img"
                      />
                    )}

                    {pageType === "ministery_details" ? (
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
                  <div className="col-sm-12 col-md-8 p-3 ministry_header">
                    <h3 className="text-black fw-bold">Ministry Name:</h3>

                    {pageType === "ministery_details" ? (
                      isEdit ? (
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="ministry Name"
                          name="ministryName"
                          onChange={(e) => {
                            // console.log(e.target.value);
                            handleChange(e);
                          }}
                          defaultValue={ministry.ministryName}
                        />
                      ) : (
                        <>
                          <p className="fs-5"> {ministry?.ministryName} </p>
                        </>
                      )
                    ) : (
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="ministry Name"
                        name="ministryName"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        value={ministryItem?.ministryName}
                      />
                    )}

                    <h3 className="text-black pt-2">Description:</h3>

                    {pageType === "ministery_details" ? (
                      isEdit ? (
                        <textarea
                          type="text"
                          defaultValue={ministry?.description}
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Description"
                          name="description"
                          onChange={handleChange}
                        />
                      ) : (
                        <>
                          <p className="fs-5">{ministry?.description}</p>
                        </>
                      )
                    ) : (
                      <textarea
                        type="text"
                        value={ministryItem?.description}
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
        </>
      )}
    </>
  );
}

export default MinistryDetail;
