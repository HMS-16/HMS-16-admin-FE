import React, { useState } from "react";
import { FaTh, FaBars, FaBriefcaseMedical, FaFileMedicalAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/patient",
      name: "Patient",
      icon: <MdPeopleAlt />,
    },
    {
      path: "/doctor",
      name: "Doctor",
      icon: <FaBriefcaseMedical />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <FaFileMedicalAlt />,
    },
  ];
  return (
    <div className="fluid">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeclassname="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
