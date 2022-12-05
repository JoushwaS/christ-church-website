import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiCamera, FiCheckCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../../../app/blogs";
import { Spinner, Modal } from "react-bootstrap";

const schema = yup.object({
  title: yup.string().required(),
  explanation: yup.string().required(),
});

export default function CreateBlog(props) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loading, error } = useSelector((state) => state.blogs);
  const upload = useRef(null);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("explanation", data.explanation);
    formData.append("image", file);
    const { payload } = await dispatch(createBlog({ data: formData, token }));

    if (payload.status) setShow(true);
  };
  return (
    <>
      <div className="container-fluid blog row">
        <div className="col-1">
          <h1
            onClick={(e) => {
              e.preventDefault();
              props.setPage("blogs");
            }}
          >
            <FaArrowLeft />
          </h1>
        </div>
        <div className="col-10 text-center">
          <h1>Blog Details</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12 mt-3">
            <div className="card p-3 blog_wrapper px-4">
              <div className="row">
                {image && (
                  <div className="col-6" style={{ maxHeight: "200px" }}>
                    <img
                      src={image}
                      alt="blog"
                      className="blog_image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}
                <div
                  style={{ maxHeight: "200px" }}
                  className={`${image ? "col-6" : "col-12"}  blog_image mt-2 p-5`}
                >
                  <button
                    className="pink_button_rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      upload.current.click();
                    }}
                  >
                    <FiCamera />
                  </button>

                  <h3 className="mt-3">Upload Cover Photo</h3>

                  <input
                    type="file"
                    ref={upload}
                    id="fileInput"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFile(file);
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setImage(e.target.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                    hidden
                  />
                </div>
                <div className="col-12 blog_input_wrapper p-3 mt-4">
                  <input
                    {...register("title")}
                    className="blog_input"
                    type="text"
                    placeholder="Blog Title"
                    id="title"
                  />
                </div>
                {errors.title && (
                  <div className="error" style={{ color: "red" }}>
                    {errors.title.message}
                  </div>
                )}

                <div className="col-12 blog_input_wrapper p-3 mt-4">
                  <textarea
                    {...register("explanation")}
                    className="blog_input"
                    type="text"
                    placeholder="Explanation"
                    rows={4}
                  ></textarea>
                </div>
                {errors.explanation && (
                  <div className="error" style={{ color: "red" }}>
                    {errors.explanation.message}
                  </div>
                )}

                <div className="col-12 d-flex justify-content-center mt-3">
                  <button
                    type="submit"
                    className="pink_button px-5 py-3"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {loading ? <Spinner animation="border" /> : "Save & Upload"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
          <h3 className="mt-3">Blog uploaded Successfully</h3>
        </Modal.Body>

        <div className="col-12 d-flex justify-content-center mt-3 mb-3">
          <button
            onClick={() => {
              setShow(false);
              props.setPage("blogs");
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
