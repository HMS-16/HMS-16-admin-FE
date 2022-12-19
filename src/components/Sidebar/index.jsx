import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaStethoscope, FaUserNurse } from "react-icons/fa";
import { MdCalendarToday, MdDashboard, MdLogout, MdPerson, MdSettings } from "react-icons/md";
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

  return (
    <div className="fluid">
      <div style={{ width: isOpen ? "250px" : "70px" }} className="d-flex flex-column sidebar">
        <div className="mb-auto">
          <div className="top_section">
            <img
              src={Logo}
              style={{
                display: isOpen ? "flex" : "none",
                marginLeft: "50px",
                marginRight: "50px",
                cursor: "pointer",
              }}
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
              <Nav.Link href={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                  {item.name}
                </div>
              </Nav.Link>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <hr />
          <Nav.Link href="/settings" className="link">
            <div className="icon">
              <MdSettings />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Settings
            </div>
          </Nav.Link>
          <Nav.Link className="link" onClick={() => console.log("logout")}>
            <div className="icon">
              <MdLogout />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Logout
            </div>
          </Nav.Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
