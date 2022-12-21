import React, { useState } from 'react'
import { IoIosNotifications, IoMdNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { updaown } from '../../../assets/icons';
import Messi from '../../../assets/images/Messi.jpg'

import './Style.css'

const Navbar = ({link, name}) => {
const [isfalse, issetFalse] = useState(false);
  const [isfalsenotif, issetFalsenotof] = useState(false);
  const navigate = useNavigate()

  const handleFalse = () => {
    issetFalsenotof(false);
    issetFalse(!isfalse);
  };
  const handlenotification = () => {
    issetFalsenotof(!isfalsenotif);
    issetFalse(false);
  };

  const EditProfil = ()=>{
    navigate("/editadmin")
  }
  return (
    <>
        <div className="d-flex justify-content-between">
    <h1 className="fw-bold">{name}</h1>
    <div>
      <div className="d-flex align-items-center">
        <div className="position-relative">
          <IoIosNotifications
            className="icons"
            role="button"
            onClick={handlenotification}
          />
        </div>
        <img src={Messi} alt="logo" className="users" />
        <h1 className="name-users">Jhone Doe</h1>
        <img
          src={updaown}
          alt="updown"
          onClick={handleFalse}
          className="ms-2"
          role="button"
        />
      </div>

      {isfalse ? (
        <div className="position-absolute row rounded-4 me-3 mt-2 shadow p-3 mb-5 bg-body">
          <div className="col-12 d-flex justify-content-center py-3  ">
            <img src={Messi} alt="logo" className="dropdownimage" />
          </div>
          <h5 className="fw-bold">Jhone Doe</h5>
          <h5 className="fw-normal mb-3">jhondoe</h5>
          <hr />
          <h5 role={'button'} onClick={EditProfil} className="texteditprofil fw-bold text-capitalize">
            Edit Admin
          </h5>
        </div>
      ) : null}
    </div>
  </div>

  {/* notif */}
  {isfalsenotif ? (
    <div
      className="position-absolute  bg-black notif rounded-4 me-3 mt-2 shadow p-3 mb-5 bg-body pt-5 ps-4 pe-4"
      style={{
        position: "absolute",
        top: 70,
        right: 5,
        width: "490px",
        display: isfalsenotif ? "block" : "none",
      }}
    >
      <div className="d-flex justify-content-between mb-4">
        <h3 className="fw-bold">Notification</h3>
        <h5 className="markall fw-bold">Mark all as read</h5>
      </div>
      <div className="d-flex align-items-start">
        <div className="iconnotif p-2 rounded-circle">
          <IoMdNotifications className="icons text-white" />
        </div>
        <div className="ms-3  text-start">
          <h5 className="fw-bold">
            Dr. Abed Nego{" "}
            <span className="content-nofit">
              has change his schedule.{" "}
            </span>
          </h5>
          <h5> Nov 20, 2022 at 12:30</h5>
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-start">
        <div className="iconnotif p-2 rounded-circle">
          <IoMdNotifications className="icons text-white" />
        </div>
        <div className="ms-3  text-start">
          <h5 className="fw-bold">
            Dr. Nurul Zakia{" "}
            <span className="content-nofit">
              has change her schedule{" "}
            </span>
          </h5>
          <h5> Nov 20, 2022 at 12:30</h5>
        </div>
      </div>
      <hr />
    </div>
  ) : null}
    </>
  )
}

export default Navbar