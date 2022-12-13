import React, { useState } from "react";
import "./PatientDashboard.css";
import Navbar from "../../components/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "react-bootstrap";
import DataPatient from "../../components/DataPatient";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "@mui/material";

const PatientDashboard = () => {
  const [search] = useState("");
  console.log(search);

  const navigate = useNavigate();
  const AddPatient = () => {
    navigate(`/add/patient`);
  };

  return (
    <>
      <div className="patientPage">
        <Navbar />
        <div className="button-patient">
          <Button onClick={AddPatient} className="button-add-patient">
            <AiOutlinePlus
              style={{
                marginRight: "35px",
                height: "25px",
                width: "25px",
              }}
            />
            Add Patient
          </Button>
        </div>

        <div className="dataPatient">
          <Toolbar>
            <div className="button-patient">
              <input
                className="search-patient"
                type="text"
                placeholder="Search Patient"
              ></input>
            </div>
          </Toolbar>
          <DataPatient />
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
