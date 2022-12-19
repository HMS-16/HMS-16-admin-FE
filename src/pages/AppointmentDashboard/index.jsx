import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import DataAppointment from "../../components/DataAppointment";
import Header from "../../components/Header/index";
import "./AppointmentDashboard.css";
import { useNavigate } from "react-router-dom";

const AppointmentDashboard = () => {
  const navigate = useNavigate();
  const createAppointment = () => {
    navigate(`create`);
  };

  return (
    <div className="appointment-dashboard-page">
      <Header />
      <Button onClick={createAppointment} className="add-appointment-button">
        <AiOutlinePlus
          style={{
            marginRight: "30px",
            height: "25px",
            width: "25px",
          }}
        />
        Add Appointment
      </Button>
      <DataAppointment />
    </div>
  );
};

export default AppointmentDashboard;
