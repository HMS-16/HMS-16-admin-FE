import React from "react";
import "./Navbar.css";
import { MdNotifications } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import avatar from "../../assets/images/doctor-avatar.jpg";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="navbar">Navbar</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdNotifications
              style={{
                color: "#1153B5",
                height: "22px",
                width: "22px",
              }}
            />
          </div>
          <div className="topbarIconContainer">
            <img src={avatar} alt="avatar" className="topAvatar" />
            <span className="userName">
              Jhone Doe
              <FaSortDown
                style={{
                  marginBottom: "7px",
                  marginLeft: "3px",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
