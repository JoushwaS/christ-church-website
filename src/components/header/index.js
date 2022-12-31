import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaSearch, FaBell, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../redux/actions/authentication";

export default function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notification, setNotification] = useState(false);
  return (
    <>
      <header className="header mt-3">
        <div className="container-fluid">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <div className="d-sm-none toggle_wrapper">
                <button
                  className="btn btn-primary toggle_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setToggle(!props.toggle);
                  }}
                >
                  <FaBars />
                </button>
              </div>
              {/* <div className="search_bar_wrapper d-none d-sm-flex ">
                  <input
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Search Users & Blogs"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary search_btn">
                    <FaSearch />
                  </button>
                </div> */}
            </div>
            {/* <div className="px-1 bd-highlight">
              <Button
                variant="secondary"
                className="notification_button"
                onClick={(e) => {
                  e.preventDefault();
                  setNotification(!notification);
                }}
              >
                <FaBell />
                <div className={`notification ${!notification && "d-none"}`}>
                  <div className="notification_header">
                    <h5>Notifications</h5>
                  </div>
                  <div className="notification_body">
                    {[1, 2, 3, 4].map((item, index) => {
                      return (
                        <div className="notification_item" key={index}>
                          <img src="https://via.placeholder.com/50" alt="" />
                          <span
                            className="d-flex flex-column mx-2"
                            style={{ textAlign: "left" }}
                          >
                            <span className="d-flex flex-row justify-content-between">
                              <h6>John Doe</h6>

                              <h6 style={{ alignSelf: "flex-end" }}>
                                12/12/22
                              </h6>
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Button>
            </div> */}
            <div className="mx-3 bd-highlight">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" className="profile_button">
                  <img
                    src="https://picsum.photos/200/300?random=1"
                    alt="user"
                  />
                  hi Admin!
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item
                    className="dropdown-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      props.setToggle(!props.toggle);
                      dispatch(LOGOUT());
                      navigate("/login");
                    }}
                  >
                    <FaSignOutAlt /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
