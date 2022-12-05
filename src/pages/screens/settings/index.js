import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FiLock, FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../../app/auth";
import { Modal } from "react-bootstrap";

const schema = yup.object({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup.string().required("New password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export default function Settings() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const [eye, setEye] = useState(false);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const upload = useRef(null);

  const handleEye = () => {
    setEye(!eye);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("currentPassword", data.currentPassword);
    formData.append("newPassword", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("profileImage", file);
    const { payload } = await dispatch(updatePassword({ data: formData, token }));

    if (payload.status) setShow(true);
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="container-fluid setting">
        <div className="col-12 text-center">
          <h1>Settings</h1>
        </div>

        <div className="col-12 mt-3">
          <div className="card p-3 setting_wrapper">
            <div className="card-body ">
              <div className="col-12 d-flex align-items-center">
                <div
                  className="image_preview"
                  id="bleep"
                  style={{
                    backgroundImage: `url(${
                      image
                        ? image
                        : user?.image
                        ? user.image
                        : "https://via.placeholder.com/200"
                    })`,
                    backgroundSize: "contain",
                  }}
                >
                  <button className="btn camera_btn">
                    <FaCamera
                      onClick={() => {
                        upload.current.click();
                      }}
                    />
                    <input
                      ref={upload}
                      type="file"
                      id="fileInput"
                      onChange={(e) => {
                        imageHandler(e);
                      }}
                      hidden
                    />
                  </button>
                </div>
                <div className="mx-3">
                  <h3 style={{ textTransform: "capitalize" }}>
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <h5>Application Admin</h5>
                </div>
              </div>
              <div className="row mt-5 setting_bottom d-flex">
                <div className="col-md-6 col-sm-12">
                  <div className="col-12">
                    <span className="text-center">
                      <h3>Password Update</h3>
                    </span>
                    <img src={file} alt="" />
                    <div className="card update_password_card">
                      <div className="card-body">
                        {/* FORM START  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="input-group">
                            <div className="icon1">
                              <FiLock />
                            </div>
                            <input
                              {...register("currentPassword")}
                              type={eye ? "text" : "password"}
                              className="theme-input"
                              id="current_password"
                              placeholder="Current Password"
                            />
                            <div className="icon1">
                              {eye ? (
                                <FiEyeOff onClick={handleEye} />
                              ) : (
                                <FiEye onClick={handleEye} />
                              )}
                            </div>
                          </div>
                          {errors.currentPassword && (
                            <div
                              className="error"
                              style={{ color: "red", textAlign: "left" }}
                            >
                              {errors.currentPassword.message}
                            </div>
                          )}
                          <div className="input-group mt-4">
                            <div className="icon1">
                              <FiLock />
                            </div>
                            <input
                              {...register("newPassword")}
                              type={eye ? "text" : "password"}
                              className="theme-input"
                              id="new_password"
                              placeholder="New Password"
                            />
                            <div className="icon1">
                              {eye ? (
                                <FiEyeOff onClick={handleEye} />
                              ) : (
                                <FiEye onClick={handleEye} />
                              )}
                            </div>
                          </div>
                          {errors.newPassword && (
                            <div
                              className="error"
                              style={{ color: "red", textAlign: "left" }}
                            >
                              {errors.newPassword.message}
                            </div>
                          )}
                          <div className="input-group mt-4">
                            <div className="icon1">
                              <FiLock />
                            </div>
                            <input
                              {...register("confirmPassword")}
                              type={eye ? "text" : "password"}
                              className="theme-input"
                              id="confirm_password"
                              placeholder="Confirm Password"
                            />
                            <div className="icon1">
                              {eye ? (
                                <FiEyeOff onClick={handleEye} />
                              ) : (
                                <FiEye onClick={handleEye} />
                              )}
                            </div>
                          </div>
                          {errors.confirmPassword && (
                            <div
                              className="error"
                              style={{ color: "red", textAlign: "left" }}
                            >
                              {errors.confirmPassword.message}
                            </div>
                          )}
                          <div className="mt-4">
                            <button
                              className="pink_button btn full_width_btn"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-sm-12 d-flex">
                  <hr />
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="col-12 ">
                    <span className="text-center">
                      <h3>Notification Settings</h3>
                    </span>
                    <div className="card notification_card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h4>New User Sign up</h4>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <h4>New Chat Room</h4>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FiCheckCircle size={100} color="#f54d83" />
          <h3 className="mt-3">Profile updated Successfully</h3>
        </Modal.Body>

        <div className="col-12 d-flex justify-content-center mt-3 mb-3">
          <button
            onClick={() => {
              setShow(false);
            }}
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#f54d83",
              paddingTop: "0.7rem",
              paddingBottom: "0.7rem",
              paddingInline: "2rem",
              color: "white",
              border: "none",
              textTransform: "capitalize",
              borderRadius: "1rem",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
