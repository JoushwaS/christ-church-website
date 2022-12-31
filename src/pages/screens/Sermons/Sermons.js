import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { truncateString } from "../../../utils/helper";
// import { fetchUsers } from "../../../app/users";
import {
  GET_SERMONS_ACTION,
  GET_SERMON_ACTION,
  GET_SERMONS_TYPE_ACTION,
  DELETE_SERMON_ACTION,
} from "../../../redux/actions/actions";

function Sermons(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [loading, setloading] = useState(true);

  const { sermons } = useSelector((state) => state.reducers);
  const [focus, setfocus] = useState("all");

  useEffect(() => {
    dispatch(GET_SERMONS_ACTION());
  }, [token]);
  useEffect(() => {
    if (sermons?.length != 0) {
      setloading(false);
    }
  }, [sermons]);

  const handleFilter = (value) => {
    setfocus(value);
  };

  return (
    <>
      <div className="container-fluid users_info">
        <div className="col-12 text-center">
          <h2>Sermons List</h2>
        </div>
        <div className="d-flex bd-highlight mt-5">
          <div className="flex-grow-1 bd-highlight buttons_wrapper">
            <button
              className={`btn filter_button ${focus === "all" && "colored"}`}
              onClick={() => handleFilter("all")}
            >
              All Sermons
            </button>
            <button
              className={`btn filter_button ${focus === "active" && "colored"}`}
              onClick={() => handleFilter("active")}
            >
              Video Sermons
            </button>
            <button
              className={`btn filter_button ${
                focus === "inactive" && "colored"
              }`}
              onClick={() => handleFilter("inactive")}
            >
              Audio Sermons
            </button>
            {/* <button
              className={`btn filter_button ${
                focus === "expired" && "colored"
              }`}
              onClick={() => handleFilter("expired")}
            >
              Expired
            </button>
            <button
              className={`btn filter_button ${
                focus === "blocked" && "colored"
              }`}
              onClick={() => handleFilter("blocked")}
            >
              blocked
            </button>
            <button
              className={`btn filter_button ${
                focus === "deleted" && "colored"
              }`}
              onClick={() => handleFilter("deleted")}
            >
              Deleted
            </button> */}
          </div>
          <button
            onClick={(e) => {
              navigate("/sermons/create_sermon");
            }}
            className="btn fs-5 bg-primary-color text-white"
          >
            {" "}
            Add New
            <BiAddToQueue />
          </button>
          <div className="bd-highlight filter_icon_wrapper">
            {/* FILTER RECORDS */}
            {/* <div className="dropdown show ">
              <Link
                className=""
                to="#"
                role="button"
                id="filterDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaFilter className="filter_icon" />
              </Link>
              <div
                className="dropdown-menu dropFilter_menu"
                aria-labelledby="filterDropdown"
              >
                <div className="filter_item d-flex flex-row" href="#">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox_animated check-it"
                    />
                    <span className="mx-1">Old to New</span>
                  </label>
                </div>
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox_animated check-it"
                    />
                    <span className="mx-1">New to Old</span>
                  </label>
                </div>
                <hr className="my-4" />
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox_animated check-it"
                    />
                    <span className="mx-1">A to Z</span>
                  </label>
                </div>
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox_animated check-it"
                    />
                    <span className="mx-1">Z to A</span>
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* TABLE  */}
        <div className="table-container mt-3">
          <table>
            <thead>
              <tr>
                <th data-heading="Sno">Sno</th>
                <th data-heading="Name">Sermon Name</th>
                <th data-heading="Email Address">Date Created</th>
                <th data-heading="Role">Sermon Type</th>
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
                : sermons?.map((item, index) => {
                    return (
                      <tr key={item + index}>
                        <td data-heading="Sno">{index + 1}</td>
                        <td data-heading="Sermon Name">{item?.sermonName}</td>

                        <td data-heading="Created At">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td data-heading="Sermon Type">{item.sermonType}</td>
                        <td data-heading="Sermon Type">
                          {truncateString(item.description, 40)}
                        </td>
                        <td data-heading="Actions">
                          <div className="d-flex justify-content-between">
                            <button
                              onClick={(e) => {
                                dispatch(GET_SERMON_ACTION(item?._id));
                                // e.preventDefault(props.setPage("sermon_details"));
                                navigate(
                                  "/sermons/sermon_details/" + item?._id
                                );
                              }}
                              className="btn btn-outline-primary px-4"
                            >
                              View
                            </button>
                            <button
                              onClick={(e) => {
                                dispatch(
                                  DELETE_SERMON_ACTION(
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
    </>
  );
}

export default Sermons;
