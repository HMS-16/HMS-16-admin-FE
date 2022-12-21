import { React } from "react";
import "./PatientDashboard.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "react-bootstrap";
import DataPatient from "../../components/DataPatient";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <>
      <div className="patientPage">
        <div className="button-patient">
          <Link to={"/patient/add"}>
            <Button className="button-add-patient">
              <AiOutlinePlus
                style={{
                  marginRight: "35px",
                  height: "25px",
                  width: "25px",
                }}
              />
              Add Patient
            </Button>
          </Link>
        </div>
        <div className="dataPatient">
          <DataPatient />
          <div className="button-patient"></div>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
