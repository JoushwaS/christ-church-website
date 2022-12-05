import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../../app/users";

export default function Users() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { loading, error, users } = useSelector((state) => state.users);
  const [focus, setfocus] = useState("all");

  useEffect(() => {
    dispatch(fetchUsers(token));
  }, [dispatch, token]);

  const handleFilter = (value) => {
    setfocus(value);
  };

  return (
    <>
      <div className="container-fluid users_info">
        <div className="col-12 text-center">
          <h2>Users Information</h2>
        </div>
        <div className="d-flex bd-highlight mt-5">
          <div className="flex-grow-1 bd-highlight buttons_wrapper">
            <button
              className={`btn filter_button ${focus === "all" && "colored"}`}
              onClick={() => handleFilter("all")}
            >
              All Users
            </button>
            <button
              className={`btn filter_button ${focus === "active" && "colored"}`}
              onClick={() => handleFilter("active")}
            >
              Active
            </button>
            <button
              className={`btn filter_button ${focus === "inactive" && "colored"}`}
              onClick={() => handleFilter("inactive")}
            >
              Deactivated
            </button>
            <button
              className={`btn filter_button ${focus === "expired" && "colored"}`}
              onClick={() => handleFilter("expired")}
            >
              Expired
            </button>
            <button
              className={`btn filter_button ${focus === "blocked" && "colored"}`}
              onClick={() => handleFilter("blocked")}
            >
              blocked
            </button>
            <button
              className={`btn filter_button ${focus === "deleted" && "colored"}`}
              onClick={() => handleFilter("deleted")}
            >
              Deleted
            </button>
          </div>
          <div className="bd-highlight filter_icon_wrapper">
            <div className="dropdown show">
              <Link
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
                    <input type="checkbox" className="checkbox_animated check-it" />
                    <span className="mx-1">Old to New</span>
                  </label>
                </div>
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input type="checkbox" className="checkbox_animated check-it" />
                    <span className="mx-1">New to Old</span>
                  </label>
                </div>
                <hr className="my-4" />
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input type="checkbox" className="checkbox_animated check-it" />
                    <span className="mx-1">A to Z</span>
                  </label>
                </div>
                <div className="filter_item d-flex flex-row mt-3" href="#">
                  <label>
                    <input type="checkbox" className="checkbox_animated check-it" />
                    <span className="mx-1">Z to A</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TABLE  */}
        <div className="table-container mt-3">
          <table>
            <thead>
              <tr>
                <th data-heading="Sno">Sno</th>
                <th data-heading="Name">Name</th>
                <th data-heading="Email Address">Email Address</th>
                <th data-heading="Role">Sign Up Date</th>
                <th data-heading="Status">Status</th>
                <th data-heading="Actions">Action</th>
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
                : users.map((item, index) => {
                    return (
                      <tr key={item + index}>
                        <td data-heading="Sno">{index + 1}</td>
                        <td data-heading="Name">
                          {item.firstName} {item.lastName}
                        </td>
                        <td data-heading="Email Address">{item.email}</td>
                        <td data-heading="Sign Up Date">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td data-heading="Status">Active</td>
                        <td data-heading="Actions">
                          <button className="btn btn-outline-primary px-4">View</button>
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
