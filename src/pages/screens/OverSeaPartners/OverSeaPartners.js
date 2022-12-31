import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Placeholder } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { truncateString } from "../../../utils/helper";

import { useNavigate, useParams } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

import { fetchBlogs, deleteBlog, actions } from "../../../app/blogs";
import {
  GET_OVERSEAPARTNERS_LIST_ACTION,
  GET_OVERSEAPARTNER_ACTION,
  DELETE_OVERSEAPARTNER_ACTION,
} from "../../../redux/actions/actions";
export default function OverSeaPartner(props) {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  const { partners, partner } = useSelector((state) => state.reducers);
  const [show, setShow] = useState(false);
  const [blogId, setBlogId] = useState(null);
  const [focus, setfocus] = useState("all");

  const handleFilter = (value) => {
    setfocus(value);
  };

  // console.log("blogs", blogs);
  useEffect(() => {
    dispatch(GET_OVERSEAPARTNERS_LIST_ACTION());
  }, [token]);
  useEffect(() => {
    if (partners?.length != 0) {
      setloading(false);
    }
  }, [partners]);
  return (
    <>
      <div className="container-fluid users_info">
        <div className="col-12 text-center">
          <h2>OverSeas Partners List</h2>
        </div>
        <div className="d-flex bd-highlight mt-5">
          <div className="flex-grow-1 bd-highlight buttons_wrapper"></div>
          <button
            onClick={(e) => {
              navigate("/overseapartners/create_partner");
            }}
            className="btn fs-5 bg-primary-color text-white"
          >
            {" "}
            Add New
            <BiAddToQueue />
          </button>
          <div className="bd-highlight filter_icon_wrapper"></div>
        </div>
        {/* TABLE  */}
        <div className="table-container mt-3">
          <table>
            <thead>
              <tr>
                <th data-heading="Sno">Sno</th>
                <th data-heading="Name">Partner Name</th>
                <th data-heading="Country">Country</th>
                <th data-heading="Email Address">Date Created</th>

                <th data-heading="Status">Description</th>
                <th data-heading="Actions" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? [1, 2, 3, 4, 5, 6].map((item) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>
                        <Placeholder xs={8} bg="secondary" />
                      </td>
                      <td>
                        <Placeholder xs={8} bg="secondary" />
                      </td>
                      <td>
                        <Placeholder xs={8} bg="secondary" />
                      </td>
                      <td>
                        <Placeholder xs={8} bg="secondary" />
                      </td>
                      <td>
                        <Placeholder xs={6} bg="secondary" />
                      </td>
                    </tr>
                  ))
                : partners?.map((item, index) => {
                    return (
                      <tr key={item + index}>
                        <td data-heading="Sno">{index + 1}</td>
                        <td data-heading="partner Name">{item?.name}</td>
                        <td data-heading="partner Country">{item?.country}</td>

                        <td data-heading="Created At">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td data-heading="Sermon Type">
                          {truncateString(item.description, 40)}
                        </td>
                        <td data-heading="Actions">
                          <div className="d-flex justify-content-between">
                            <button
                              onClick={(e) => {
                                dispatch(GET_OVERSEAPARTNER_ACTION(item?._id));
                                // e.preventDefault(props.setPage("sermon_details"));
                                navigate(
                                  "/overseapartners/partner_details/" +
                                    item?._id
                                );
                              }}
                              className="btn btn-outline-primary px-4"
                            >
                              View
                            </button>
                            <button
                              onClick={(e) => {
                                dispatch(
                                  DELETE_OVERSEAPARTNER_ACTION(
                                    item?._id,
                                    token,
                                    navigate
                                  )
                                );
                              }}
                              className="btn btn-outline-danger px-4"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
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
              // dispatch(
              //   DELETE_OVERSEAPARTNER_ACTION(
              //     item?._id,
              //     token,
              //     navigate
              //   )
              // );
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