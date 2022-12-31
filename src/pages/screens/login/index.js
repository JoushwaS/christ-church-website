import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IMAGES } from "../../../constant/images";
import { LOGIN } from "../../../redux/actions/authentication";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [eye, setEye] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(LOGIN(user, navigate));
    if (isAuthenticated) {
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="login"
        // style={{ backgroundImage: `url(${IMAGES.login_background})` }}
      >
        <img src={IMAGES.logo_icon} alt="logo" className="login-logo" />
        <div className="login-card">
          <div className="header">
            <h2>Log In</h2>
          </div>
          <div className="body px-4">
            <form className="mt-5" onSubmit={onSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}

              <label>Email</label>
              <div className="input_wrapper mt-2">
                <div className="icon">
                  <FiMail />
                </div>
                <input
                  // {...register("email")}
                  type="email"
                  className="theme-input"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>
              {errors.email && (
                <div className="error">{errors.email.message}</div>
              )}

              <label className="mt-3">Password</label>
              <div className="input_wrapper mt-2">
                <div className="icon">
                  <FiLock />
                </div>
                <input
                  // {...register("password")}
                  type={eye ? "text" : "password"}
                  className="theme-input"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                {/* <div className="icon">
                  {eye ? (
                    <FiEyeOff style={{ color: "grey" }} onClick={handleEye} />
                  ) : (
                    <FiEye style={{ color: "grey" }} onClick={handleEye} />
                  )}
                </div> */}
              </div>
              {errors.password && (
                <div className="error">{errors.password.message}</div>
              )}
              <div className="mt-2 col-md-12 d-flex forgot_password">
                <p>Forgot Password ?</p>
              </div>
              <div className="mt-3">
                <button className="login-btn" type="submit">
                  {loading ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
