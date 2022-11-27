import React, { useState } from "react";
import { FaBars, FaStethoscope, FaUserNurse } from "react-icons/fa";
import { MdCalendarToday, MdDashboard, MdLogout, MdPerson, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
  return (
    <div className="fluid">
      <div style={{ width: isOpen ? "250px" : "70px" }} className="d-flex flex-column sidebar">
        <div className="mb-auto">
          <div className="top_section">
            <img
              src={Logo}
              style={{ display: isOpen ? "flex" : "none", marginLeft: "50px", marginRight: "50px", cursor: "pointer" }}
              alt="Logo"
              width="100"
              height="100"
              onClick={toggle}
              cursor="pointer"
            />
            <div style={{ display: isOpen ? "none" : "block", marginLeft: "7px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="pt-2">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
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
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
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
