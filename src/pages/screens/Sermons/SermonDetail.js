import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEdit, AiFillSave } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

import VideoPlayerComponent from "../../../components/VideoPlayerComponent/VideoPlayerComponent";
import {
  UPDATE_SERMON_ACTION,
  CREATE_SERMON_ACTION,
  GET_SERMON_ACTION,
} from "../../../redux/actions/actions";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function SermonDetail(props) {
  const navigate = useNavigate();
  console.log(props);
  const dispatch = useDispatch();
  const { pageType, sermonId } = useParams();
  console.log(">>>>>>", { pageType });
  const [previewMedia, setpreviewMedia] = useState(false);
  const [previewAddMedia, setpreviewAddMedia] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [previewImage, setpreviewImage] = useState(null);
  const [uploadImage, setuploadImage] = useState(null);

  const { sermon } = useSelector((state) => state.reducers);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  const [sermonItem, setsermonItem] = useState();
  // HANDLERS
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      // setuploadImage(event.target.files[0]);
      setsermonItem({
        ...sermonItem,
        thumbnail: event.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setsermonItem({
      ...sermonItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (pageType == "sermon_details") {
      if (isEdit) {
        console.log(sermonItem);
        // return;
        dispatch(UPDATE_SERMON_ACTION(sermonItem, token, sermon._id));
        setisEdit(!isEdit);
      } else {
        setisEdit(!isEdit);
      }
    } else {
      dispatch(CREATE_SERMON_ACTION(sermonItem, token, navigate));
      console.log(sermonItem);
    }
  };
  useEffect(() => {
    if (sermonId) {
      dispatch(GET_SERMON_ACTION(sermonId));
    }
  }, [sermonId]);

  // useEffect(() => {
  //   if (sermon) {
  //     setsermonItem(sermon);
  //   }
  // }, [sermon, sermonId]);

  return (
    <>
      {pageType === "sermon_details" ? (
        <div className="container-fluid blog_details">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <h1
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  // props.setPage("sermons");
                  navigate("/sermons");
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
                {/* SERMON previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  <img
                    src={previewImage ? previewImage : sermon?.thumbnail}
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
                      placeholder="Sermon Name"
                      name="sermonName"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={sermon.sermonName}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {sermon?.sermonName} </p>
                    </>
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {isEdit ? (
                    <textarea
                      type="text"
                      defaultValue={sermon?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  ) : (
                    <>
                      <p className="fs-5">{sermon?.description}</p>
                    </>
                  )}
                  <h3 className="text-black pt-2">Sermon Type:</h3>

                  {isEdit ? (
                    <div className="dropdown">
                      <Dropdown
                        onSelect={(evt) => {
                          console.log(evt);
                          setsermonItem({
                            ...sermonItem,
                            sermonType: evt,
                          });
                        }}
                      >
                        <Dropdown.Toggle
                          className="bg-primary-color "
                          variant="success"
                          id="dropdown-basic"
                        >
                          Select Sermon Type{" "}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#" eventKey="video">
                            Video
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  ) : (
                    <>
                      <p className="fs-5">{sermon?.sermonType}</p>
                    </>
                  )}

                  {/* Video Id  */}

                  {sermon?.sermonType == "video" ? (
                    <>
                      <h3 className="text-black pt-2">Video Id:</h3>
                      <>
                        {isEdit ? (
                          <input
                            type="text"
                            defaultValue={sermon?.videoUrl}
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Video Url"
                            name="videoUrl"
                            onChange={handleChange}
                          />
                        ) : (
                          <>
                            <p className="fs-5">{sermon?.videoUrl}</p>
                          </>
                        )}
                      </>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="pt-4">
                    <button
                      className="btn btn-primary px-5 py-2"
                      onClick={() => {
                        setpreviewMedia(!previewMedia);
                      }}
                    >
                      {previewMedia
                        ? "Hide Media Preview"
                        : "Show Media Preview"}{" "}
                    </button>
                  </div>
                </div>
                {/* YOUTUBE VUDEO PLAYER */}
                <div
                  style={{ display: previewMedia ? "block" : "none" }}
                  className="col-12 blog-footer"
                >
                  <VideoPlayerComponent props={sermon?.videoUrl} />
                  {/* <ReactPlayer
                    controls={true}
                    url={"https://www.youtube.com/watch?v=" + sermon?.videoUrl}
                  /> */}
                  {/* </div> */}
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
                  navigate("/sermons");
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
                {pageType === "sermon_details" ? (
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
                    Add Sermon
                    <BiAddToQueue />
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card p-3 blog_wrapper">
              <div className="row">
                {/* SERMON previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  {pageType === "sermon_details" ? (
                    <img
                      src={previewImage ? previewImage : sermon?.thumbnail}
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

                  {pageType === "sermon_details" ? (
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

                  {pageType === "sermon_details" ? (
                    isEdit ? (
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Sermon Name"
                        name="sermonName"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        defaultValue={sermon.sermonName}
                      />
                    ) : (
                      <>
                        <p className="fs-5"> {sermon?.sermonName} </p>
                      </>
                    )
                  ) : (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Sermon Name"
                      name="sermonName"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      value={sermonItem?.sermonName}
                    />
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {pageType === "sermon_details" ? (
                    isEdit ? (
                      <textarea
                        type="text"
                        defaultValue={sermon?.description}
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                      />
                    ) : (
                      <>
                        <p className="fs-5">{sermon?.description}</p>
                      </>
                    )
                  ) : (
                    <textarea
                      type="text"
                      value={sermonItem?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  )}
                  <h3 className="text-black pt-2">Sermon Type:</h3>

                  {pageType === "sermon_details" ? (
                    isEdit ? (
                      <div className="dropdown">
                        <Dropdown
                          onSelect={(evt) => {
                            console.log(evt);
                            setsermonItem({
                              ...sermonItem,
                              sermonType: evt,
                            });
                          }}
                        >
                          <Dropdown.Toggle
                            className="bg-primary-color "
                            variant="success"
                            id="dropdown-basic"
                          >
                            Select Sermon Type{" "}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#" eventKey="video">
                              Video
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ) : (
                      <>
                        <p className="fs-5">{sermon?.sermonType}</p>
                      </>
                    )
                  ) : (
                    <Dropdown
                      onSelect={(evt) => {
                        console.log(evt);
                        setsermonItem({
                          ...sermonItem,
                          sermonType: evt,
                        });
                      }}
                    >
                      <Dropdown.Toggle
                        className="bg-primary-color "
                        variant="success"
                        id="dropdown-basic"
                      >
                        Select Sermon Type{" "}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#" eventKey="video">
                          Video
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}

                  {/* Video Id  */}

                  {pageType === "sermon_details" ? (
                    sermon?.sermonType == "video" ? (
                      <>
                        <h3 className="text-black pt-2">Video Id:</h3>
                        <>
                          {isEdit ? (
                            <input
                              type="text"
                              defaultValue={sermon?.videoUrl}
                              className="form-control form-control-lg"
                              id="exampleFormControlInput1"
                              placeholder="Video Url"
                              name="videoUrl"
                              onChange={handleChange}
                            />
                          ) : (
                            <>
                              <p className="fs-5">{sermon?.videoUrl}</p>
                            </>
                          )}
                        </>
                      </>
                    ) : (
                      ""
                    )
                  ) : (
                    <>
                      <h3 className="text-black pt-2">Video Id:</h3>

                      <input
                        type="text"
                        value={sermonItem?.videoUrl}
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Video Url"
                        name="videoUrl"
                        onChange={handleChange}
                      />
                    </>
                  )}
                  <div className="pt-4">
                    {pageType == "sermon_details" ? (
                      <button
                        className="btn btn-primary px-5 py-2"
                        onClick={() => {
                          setpreviewMedia(!previewMedia);
                        }}
                      >
                        {previewMedia
                          ? "Hide Media Preview"
                          : "Show Media Preview"}{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary px-5 py-2"
                        onClick={() => {
                          if (sermonItem?.videoUrl) {
                            setpreviewAddMedia(!previewAddMedia);
                          } else {
                            toast.error("Please add a video Url!");
                          }
                        }}
                      >
                        {previewAddMedia
                          ? "Hide Media Preview"
                          : "Show Media Preview"}{" "}
                      </button>
                    )}
                  </div>
                </div>
                {/* YOUTUBE VIDEO PLAYER */}
                {pageType == "sermon_details" ? (
                  <div
                    style={{ display: previewMedia ? "block" : "none" }}
                    className="col-12 blog-footer"
                  >
                    <VideoPlayerComponent props={sermon?.videoUrl} />
                  </div>
                ) : (
                  <div
                    style={{ display: previewAddMedia ? "block" : "none" }}
                    className="col-12 blog-footer"
                  >
                    <VideoPlayerComponent
                      // controls={true}
                      props={
                        "https://www.youtube.com/watch?v=" +
                        sermonItem?.videoUrl
                      }
                    />
                    {/* <VideoPlayerComponent props={sermonItem?.videoUrl} /> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SermonDetail;
