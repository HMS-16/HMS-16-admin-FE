import React, { useState } from "react";
import { FaBars, FaStethoscope, FaUserNurse } from "react-icons/fa";
import { MdCalendarToday, MdDashboard, MdLogout, MdPerson, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Sidebar.css";
import useNavbar from "./useNavbar";

const Sidebar = ({ children, Toggle, isFalse }) => {
  
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/patient",
      name: "Patient",
      icon: <MdPerson />,
    },
    {
      path: "/doctor",
      name: "Doctor",
      icon: <FaStethoscope />,
    },
    {
      path: "/nurse",
      name: "Nurse",
      icon: <FaUserNurse />,
    },
    {
      path: "/appointment",
      name: "Appointment",
      icon: <MdCalendarToday />,
    },
  ];
  const toolItem = [
    {
      path: "/settings",
      name: "Settings",
      icon: <MdSettings />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];
  console.log(isFalse, "wkwkwk sadk");
  return (
    <div className="position-fixed">
      <div style={{ width: isFalse ? "250px" : "70px" }} className="d-flex flex-column sidebar">
        <div className="mb-auto">
          <div className="top_section">
            <img
              src={Logo}
              style={{ display: isFalse ? "flex" : "none", marginLeft: "50px", marginRight: "50px", cursor: "pointer" }}
              alt="Logo"
              width="100"
              height="100"
              onClick={Toggle}
              cursor="pointer"
            />
            <div style={{ display: isFalse ? "none" : "block", marginLeft: "7px" }} className="bars">
              <FaBars onClick={Toggle} />
            </div>
          </div>
          <div className="pt-2">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isFalse ? "block" : "none" }} className="link_text">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <hr />
          {toolItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isFalse ? "block" : "none" }} className="link_text">
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
