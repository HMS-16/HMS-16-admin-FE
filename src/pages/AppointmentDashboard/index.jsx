import React from "react";
import DataAppointment from "../../components/DataAppointment/index";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import "./AppointmentDashboard.css";
import { Link } from "react-router-dom";

const AppointmentDashboard = () => {
  return (
    <>
      <div className="button-appointment d-flex justify-content-end">
        <Link to={"/appointment/create"}>
          <Button className="add-appointment-button">
            <AiOutlinePlus
              style={{
                marginRight: "30px",
                height: "25px",
                width: "25px",
              }}
            />
            Add Appointment
          </Button>
        </Link>
      </div>
      <div className="box-appointment">
        <div>
          <p
            className="today-appointment"
            style={{ display: "flex", padding: "10px 10px 0px" }}
          >
            Today's Appointment
          </p>
        </div>
        <DataAppointment />
      </div>
    </>
  );
};

export default AppointmentDashboard;
