import { NavLink } from "react-router-dom";
import { IMAGES } from "../../constant/images";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";
import { FaHandshake, FaRegBuilding } from "react-icons/fa";
// import { FcOrganization } from "react-icons/fc";
import { BiBookContent } from "react-icons/bi";
import { FaBlog, FaRegWindowClose } from "react-icons/fa";

export default function SideBar(props) {
  return (
    <aside className={`sidebar ${props.toggle && "sidebar_show"}`}>
      <div className="sidebar__header">
        <div className="sidebar__header__icon">
          <img
            style={{ maxWidth: "80%", height: "auto" }}
            src={IMAGES.logoWhite}
            alt="logo"
          />
        </div>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__title">
          <h3>Dashboard</h3>
        </div>
        <div className="sidebar__body__item">
          <ul>
            <NavLink to="/" className={"item__link"}>
              <li>
                <FiHome /> Home
              </li>
            </NavLink>
            <NavLink to="/sermons" className={"item__link"}>
              <li>
                <FiUser /> Sermons
              </li>
            </NavLink>
            <NavLink to="/ministeries" className={"item__link"}>
              <li>
                <FaRegBuilding style={{ color: "white !important" }} />{" "}
                Ministeries
              </li>
            </NavLink>
            <NavLink to="/blogs" className={"item__link"}>
              <li>
                <FaBlog /> Blogs
              </li>
            </NavLink>
            <NavLink to="/content" className={"item__link"}>
              <li>
                <BiBookContent /> Website Content
              </li>
            </NavLink>
            <NavLink to="/overseapartners" className={"item__link"}>
              <li>
                <FaHandshake /> OverSeas Partners
              </li>
            </NavLink>
            {/* <NavLink to="/chat_rooms" className={"item__link"}>
              <li>
                <FiUsers /> Chat Rooms
              </li>
            </NavLink>
            <NavLink to="/settings" className={"item__link"}>
              <li>
                <FiSettings /> Settings
              </li>
            </NavLink>
            <NavLink to="/help" className={"item__link"}>
              <li>
                <FiMessageSquare /> Help Center Messages
              </li>
            </NavLink> */}
            <NavLink
              to="/close"
              className={"item__link d-sm-none"}
              onClick={(e) => {
                e.preventDefault();
                props.setToggle(false);
              }}
            >
              <li>
                <FaRegWindowClose /> Close
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </aside>
  );
}
