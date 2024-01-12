import React, { useState } from "react";
import "../compnents/style.css";
import { Link, Outlet } from "react-router-dom";
import MenuImg from "../img/menu-img.png";
import Home from "../img/home (2).png";
import Admin from "../img/admin.png";
import Membership from "../img/membership.png";
import Advocate from "../img/advocate.png";
import LOgout from "../img/logout (3).png";

const Index = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isLinkActive = (link) => link === activeLink;

  return (
    <div className="container-mainn">
      <div className="nav">
        <div className="menu-img-div">
          <img className="MenuImg" src={MenuImg} alt="" />
        </div>

        <div className="componenents-div">
          <div className="components-box">
            <Link
              onClick={() => handleLinkClick("Home")}
              className={`home-sub-div ${isLinkActive("Home") ? "active" : ""}`}
              to="Home"
            >
              <img
                className={`home-img ${isLinkActive("Home") ? "red" : "red"}`}
                src={Home}
                alt=""
              />
              <div className="text-div">
                <span className="home-text">Home</span>
              </div>
            </Link>
          </div>

          <div className="components-box">
            <Link
              className={`home-sub-div ${
                isLinkActive("Admin") ? "active" : ""
              }`}
              to="Admin"
              onClick={() => handleLinkClick("Admin")}
            >
              <img className="home-img" src={Admin} alt="" />
              <div className="text-div">
                <span className="home-text">Admin</span>
              </div>
            </Link>
          </div>

          <div className="components-box">
            <Link
              className={`home-sub-div ${
                isLinkActive("Membership") ? "active" : ""
              }`}
              to="Membership"
              onClick={() => handleLinkClick("Membership")}
            >
              <img className="home-img" src={Membership} alt="" />
              <div className="text-div">
                <span className="home-text">Membership</span>
              </div>
            </Link>
          </div>

          <div className="components-box">
            <Link
              className={`home-sub-div ${
                isLinkActive("Advocate") ? "active" : ""
              }`}
              to="Advocate"
              onClick={() => handleLinkClick("Advocate")}
            >
              <img className="home-img" src={Advocate} alt="" />

              <div className="text-div">
                <span className="home-text">Advocate</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="logout-div">
          <Link
            className={`home-sub-div ${isLinkActive("Logout") ? "active" : ""}`}
            to="Login"
            onClick={() => handleLinkClick("Logout")}
          >
            <img className="home-img" src={LOgout} alt="" />

            <div className="text-div">
              <span className="home-text">Logout</span>
            </div>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Index;
