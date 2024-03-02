import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header" id="header">
        <div className="header_toggle" onClick={toggleSidebar}>
          <i
            className={`bx ${isSidebarOpen ? "bx-x" : "bx-menu"}`}
            id="header-toggle"
          ></i>{" "}
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
        </div>
      </header>
      <div className={`l-navbar ${isSidebarOpen ? "show" : ""}`} id="nav-bar">
        <nav className="nav">
          <div>
            {" "}
            <a href="#" className="nav_logo">
              {" "}
              <i className="bx bx-layer nav_logo-icon"></i>{" "}
              <span className="nav_logo-name">Garderner</span>{" "}
            </a>
            <div className="nav_list">
              {" "}
              <Link to="/" className="nav_link active">
                {" "}
                <i className="bx bx-grid-alt nav_icon"></i>{" "}
                <span className="nav_name">Dashboard</span>{" "}
              </Link>{" "}
              <Link to="/login" className="nav_link">
                {" "}
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">Login</span>{" "}
              </Link>{" "}
              <Link to="/addproducts" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Add Products</span>{" "}
              </Link>{" "}
              <Link to="/update" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Update Info</span>{" "}
              </Link>{" "}
              <Link to="/useractivity" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Activities of Users</span>{" "}
              </Link>{" "}
            </div>
          </div>{" "}
          <a href="#" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
          </a>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
