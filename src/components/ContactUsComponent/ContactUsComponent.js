import React, { useState } from "react";
// import appLogo from "../../assets/images/logo.png";
import appLogo from "../../assets/images/applogo.png";

import { FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";

import DioceseLogo from "../../assets/images/diocese_logo.png";
import { FormControl, TextField } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function ContactUsComponent() {
  const label = { inputProps: { "aria-label": "Agree to terms" } };
  const [agreeTerms, setagreeTerms] = useState(false);
  const [contact, setcontact] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  return (
    <div className="contact-us-component ">
      <div className="contact-section  justify-content-center align-items-center flex-column ">
        <div className="d-flex justify-content-center">
          <img src={appLogo} className="img-logo-lg" alt="app logo" />
        </div>
        <p className="fs-7 pt-3 pb-3 text-center ">
          <span className="text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempo{" "}
          </span>
          <div className="pt-4 d-flex gap-4 justify-content-center">
            <FiFacebook className="fs-5 color-primary   pointer" />
            <BsInstagram className="fs-5 color-primary  " />{" "}
            <FiYoutube className="fs-5 color-primary " />{" "}
            <FiTwitter className="fs-5 color-primary  " />
          </div>
        </p>
      </div>
      <div className="contact-section  flex-column   ">
        <h1 className=" color-primary text-center">Contact</h1>
        <FormControl className="container-xl  d-flex gap-4">
          <div className="row">
            <div className="col-lg-6">
              <TextField
                fullWidth
                size="small"
                name="firstName"
                sx={{
                  "& .MuiInput-underline::before":
                    contact.firstName !== ""
                      ? { borderBottomColor: "#841424" }
                      : { borderBottomColor: "#841424" },
                }}
                onChange={(e) => {
                  setcontact({
                    ...contact,
                    [e.target.name]: e.target.value,
                  });
                }}
                // className="border-bottom-primary"
                id="first-name"
                label="First Name"
                variant="standard"
              />
            </div>
            <div className="col-lg-6">
              <TextField
                fullWidth
                size="small"
                name="lastName"
                sx={{
                  "& .MuiInput-underline::before":
                    contact.lastName !== ""
                      ? { borderBottomColor: "#841424" }
                      : { borderBottomColor: "#841424" },
                }}
                onChange={(e) => {
                  setcontact({
                    ...contact,
                    [e.target.name]: e.target.value,
                  });
                }}
                id="last-name"
                label="Last Name"
                variant="standard"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <TextField
                fullWidth
                size="small"
                name="email"
                sx={{
                  "& .MuiInput-underline::before":
                    contact.email !== ""
                      ? { borderBottomColor: "#841424" }
                      : { borderBottomColor: "#841424" },
                }}
                onChange={(e) => {
                  setcontact({
                    ...contact,
                    [e.target.name]: e.target.value,
                  });
                }}
                id="email-address"
                label="Email Address"
                variant="standard"
              />
            </div>
            <div className="col-lg-6">
              <TextField
                fullWidth
                size="small"
                name="contactNumber"
                sx={{
                  "& .MuiInput-underline::before":
                    contact.contactNumber !== ""
                      ? { borderBottomColor: "#841424" }
                      : { borderBottomColor: "#841424" },
                }}
                onChange={(e) => {
                  setcontact({
                    ...contact,
                    [e.target.name]: e.target.value,
                  });
                }}
                id="contact-no"
                type="number"
                label="Contact Number"
                variant="standard"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <TextField
                name="message"
                sx={{
                  "& .MuiInput-underline::before":
                    contact.message !== ""
                      ? { borderBottomColor: "#841424" }
                      : { borderBottomColor: "#841424" },
                }}
                onChange={(e) => {
                  setcontact({
                    ...contact,
                    [e.target.name]: e.target.value,
                  });
                }}
                fullWidth
                id="contact-message"
                label="Message"
                multiline
                variant="standard"
                rows={4}
                // defaultValue=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex">
                <Checkbox
                  checked={agreeTerms}
                  onChange={() => {
                    setagreeTerms(!agreeTerms);
                  }}
                  size="small"
                  {...label}
                />
                <span className="fs-7 py-3">
                  I am Agree with all{" "}
                  <span className="color-primary primary-underlined">
                    Terms & Conditions
                  </span>
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <button
                disabled={agreeTerms ? false : true}
                className={`border-0 submitBtn ${
                  agreeTerms ? "btn-enabled" : "btn-disabled"
                } text-white`}
                type="submit"
                onClick={() => {
                  console.log("user", contact);
                }}
              >
                <span className="fs-7">Submit</span>
              </button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default ContactUsComponent;
