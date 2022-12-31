import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEdit, AiFillSave } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

import VideoPlayerComponent from "../../../components/VideoPlayerComponent/VideoPlayerComponent";
import {
  UPDATE_OVERSEAPARTNER_ACTION,
  CREATE_OVERSEAPARTNER_ACTION,
  GET_OVERSEAPARTNER_ACTION,
} from "../../../redux/actions/actions";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function OverSeaPartnerDetail(props) {
  const navigate = useNavigate();
  console.log(props);
  const dispatch = useDispatch();
  const { pageType, partnerId } = useParams();
  console.log(">>>>>>", { pageType });

  const [isEdit, setisEdit] = useState(false);
  const [previewImage, setpreviewImage] = useState(null);
  const [uploadImage, setuploadImage] = useState(null);

  const { partner } = useSelector((state) => state.reducers);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  const [partnerItem, setpartnerItem] = useState();
  // HANDLERS
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      // setuploadImage(event.target.files[0]);
      setpartnerItem({
        ...partnerItem,
        file: event.target.files[0],
      });
    }
  };
  const handleChange = (e) => {
    setpartnerItem({
      ...partnerItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (pageType == "partner_details") {
      if (isEdit) {
        console.log(partnerItem);
        // return;
        dispatch(UPDATE_OVERSEAPARTNER_ACTION(partnerItem, token, partner._id));
        setisEdit(!isEdit);
      } else {
        setisEdit(!isEdit);
      }
    } else {
      dispatch(CREATE_OVERSEAPARTNER_ACTION(partnerItem, token, navigate));
      console.log(partnerItem);
    }
  };

  useEffect(() => {
    if (partnerId) {
      dispatch(GET_OVERSEAPARTNER_ACTION(partnerId));
    }
  }, [partnerId]);

  useEffect(() => {
    if (partner) {
      console.log(">>>>", partner);
    }
  }, [partner]);

  return (
    <>
      {pageType === "partner_details" ? (
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
                {/* partner previewImage */}
                <div className="col-sm-12 col-md-4 blog_image">
                  <img
                    className="img-fluid"
                    src={previewImage ? previewImage : partner?.image}
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
                <div className="col-sm-12 col-md-8 p-3 partner_header">
                  <h3 className="text-black fw-bold">Partner Name:</h3>

                  {isEdit ? (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="partner Name"
                      name="name"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={partner?.name}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {partner?.name} </p>
                    </>
                  )}
                  <h3 className="text-black fw-bold">Country:</h3>

                  {isEdit ? (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Country"
                      name="country"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={partner?.country}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {partner?.country} </p>
                    </>
                  )}
                  <h3 className="text-black fw-bold">Profession:</h3>

                  {isEdit ? (
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Profession"
                      name="profession"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      defaultValue={partner?.profession}
                    />
                  ) : (
                    <>
                      <p className="fs-5"> {partner?.profession} </p>
                    </>
                  )}

                  <h3 className="text-black pt-2">Description:</h3>

                  {isEdit ? (
                    <textarea
                      type="text"
                      defaultValue={partner?.description}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Description"
                      name="description"
                      onChange={handleChange}
                    />
                  ) : (
                    <>
                      <p className="fs-5">{partner?.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid partner_details">
            <div className="d-flex bd-highlight">
              <div className="flex-grow-1 bd-highlight">
                <h1
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/overseapartners");
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
                  {pageType === "partner_details" ? (
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
                      Add partner
                      <BiAddToQueue />
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="card p-3 blog_wrapper">
                <div className="row">
                  {/* partner previewImage */}
                  <div className="col-sm-12 col-md-4 blog_image">
                    {pageType === "partner_details" ? (
                      <img
                        className="img-fluid"
                        src={previewImage ? previewImage : partner?.image}
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

                    {pageType === "partner_details" ? (
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
                  <div className="col-sm-12 col-md-8 p-3 partner_header">
                    <h3 className="text-black fw-bold">Partner Name:</h3>

                    {pageType === "partner_details" ? (
                      isEdit ? (
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Partner Name"
                          name="name"
                          onChange={(e) => {
                            // console.log(e.target.value);
                            handleChange(e);
                          }}
                          defaultValue={partner?.name}
                        />
                      ) : (
                        <>
                          <p className="fs-5"> {partner?.name} </p>
                        </>
                      )
                    ) : (
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Partner Name"
                        name="name"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          handleChange(e);
                        }}
                        value={partnerItem?.name}
                      />
                    )}
                    <h3 className="text-black fw-bold pt-3">Country:</h3>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Country"
                      name="country"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      value={partnerItem?.country}
                    />
                    <h3 className="text-black fw-bold pt-3">Profession:</h3>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Profession"
                      name="profession"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        handleChange(e);
                      }}
                      value={partnerItem?.profession}
                    />

                    <h3 className="text-black pt-3">Description:</h3>

                    {pageType === "partner_details" ? (
                      isEdit ? (
                        <textarea
                          type="text"
                          defaultValue={partner?.description}
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Description"
                          name="description"
                          onChange={handleChange}
                        />
                      ) : (
                        <>
                          <p className="fs-5">{partner?.description}</p>
                        </>
                      )
                    ) : (
                      <textarea
                        type="text"
                        value={partnerItem?.description}
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

export default OverSeaPartnerDetail;
