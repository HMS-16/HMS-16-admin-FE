import { React, useEffect } from "react";
import { GoCloudDownload } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MdTimer, MdBloodtype, MdModeEditOutline } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";
import { BsCalendar } from "react-icons/bs";
import { VscPerson } from "react-icons/vsc";
import { GiWeightScale, GiMedicalThermometer, GiLungs } from "react-icons/gi";
import { RiHeartPulseFill, RiMedicineBottleFill } from "react-icons/ri";
import "./PatientDetail.css";
import { useState } from "react";
import axiosInstance from "../../config/axiosInstance";

const PatientDetail = () => {
  const { id } = useParams();

  const [APIPatient, setAPIPatient] = useState([]);
  const [APICondition, setAPICondition] = useState([]);
  const [APIDiagnose, setAPIDiagnose] = useState([]);

  useEffect(() => {
    axiosInstance.get(`patients/${id}`).then((response) => {
      setAPIPatient(response.data.data);
    });
  }, [id]);

  useEffect(() => {
    axiosInstance.get(`conditions/${id}`).then((response) => {
      console.log(response);
      setAPICondition(response.data.data);
    });
  }, [id]);

  useEffect(() => {
    axiosInstance.get(`diagnoses/${id}`).then((response) => {
      setAPIDiagnose(response.data.data);
    });
  }, [id]);

  const navigate = useNavigate();

  const editDataPatient = () => {
    navigate(`/patient/edit`);
  };

  return (
    <>
      <div className="patient-detail-page">
        <div>
          <h5 className="patient-title" style={{ marginLeft: "20px" }}>
            Patient Detail
          </h5>
          <div className="button-patient-detail">
            <Link to={`/patient/history/condition/${id}`}>
              <button className="download-button">
                <GoCloudDownload
                  style={{
                    marginRight: "15px",
                    height: "19px",
                    width: "15px",
                  }}
                />
                Download
              </button>
            </Link>
            <Link to={`/patient/edit/${id}`}>
              <button className="edit-button" onClick={editDataPatient}>
                <MdModeEditOutline
                  style={{
                    marginRight: "15px",
                    height: "19px",
                    width: "15px",
                  }}
                />
                Edit
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="patient-information container text-center">
            <div className="row">
              <p className="patient-information-title text-start">
                Patient Information
              </p>

              <div className="col-6 col-sm-4 text-start">
                <p className="label-patient-information">Full Name</p>
                <span className="field-patient-information">
                  {APIPatient.name}
                </span>

                <p className="label-patient-information">Gender</p>
                <span className="field-patient-information">
                  {APIPatient.gender}
                </span>

                <p className="label-patient-information">Street Address</p>
                <span className="field-patient-information">
                  {APIPatient.address}
                </span>

                <p className="label-patient-information">Phone Number</p>
                <span className="field-patient-information">
                  {APIPatient.phone_num}
                </span>
              </div>

              <div
                className="col-6 col-sm-4 text-start"
                style={{ width: "400px" }}
              >
                <p className="label-patient-information">No. Medical Record</p>
                <span className="field-patient-information">
                  {APIPatient.id}
                </span>

                <p className="label-patient-information">Place of Birth</p>
                <span className="field-patient-information">
                  {APIPatient.pob}
                </span>

                <p className="label-patient-information">City</p>
                <span className="field-patient-information">
                  {APIPatient.city}
                </span>

                <p className="label-patient-information">Email</p>
                <span className="field-patient-information">
                  {APIPatient.email}
                </span>
              </div>

              <div
                className="col-6 col-sm-4 text-start"
                style={{ width: "150px" }}
              >
                <p className="label-patient-information">Status</p>
                <span className="field-patient-information">
                  {APIPatient.married}
                </span>

                <p className="label-patient-information">Date of Birth</p>
                <span className="field-patient-information">
                  {APIPatient.DOB}
                </span>

                <p className="label-patient-information">Province</p>
                <span className="field-patient-information">
                  {APIPatient.province}
                </span>

                <p className="label-patient-information">Family Contact</p>
                <span className="field-patient-information">
                  {APIPatient.family_contact}
                </span>
              </div>
            </div>
          </div>

          <div className="appointment-schedule container text-center">
            <p className="patient-information-title text-start">
              Appointment Schedule
            </p>

            <div className="row justify-content-evenly">
              <div className="col-4">
                <BsCalendar className="icon-patient-detail" />
                <br />
                <span className="label-appointment-schedule">Date</span>
                <br />
                <span className="field-appointment-schedule">
                  Tuesday, Nov 2, 2022
                </span>
              </div>

              <div className="col-4">
                <MdTimer className="icon-patient-detail" />
                <br />
                <span className="label-appointment-schedule">Time</span>
                <br />
                <span className="field-appointment-schedule">
                  01.00 PM - 01.30 PM
                </span>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{ marginTop: "15px" }}
              className="history-condition-title text-start"
            >
              Select History Condition
            </p>
            <Form.Select className="select-history">
              <option>Open this select menu</option>
              <option value="1">Saturday, Nov 10.2022</option>
              <option value="2">Saturday, Nov 10.2022</option>
              <option value="3">Saturday, Nov 10.2022</option>
            </Form.Select>
          </div>

          <div className="medical-record container text-center">
            <p className="patient-information-title text-start">
              Medical Record
            </p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col">
                <VscPerson className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Height</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.height}
                  </span>
                  cm
                </span>
              </div>

              <div className="col">
                <GiWeightScale className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Weight</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.weight}
                  </span>
                  kg
                </span>
              </div>

              <div className="col">
                <MdBloodtype className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Blood Pressure</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.blood_pressure}
                  </span>
                  mmHg
                </span>
              </div>

              <div className="col">
                <SlChemistry className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Sugar Analysis</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.sugar_analysis}
                  </span>
                  mg/dL
                </span>
              </div>
            </div>

            <div
              style={{ marginTop: "40px" }}
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
            >
              <div className="col">
                <GiMedicalThermometer className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Body Temperature</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.body_temperature}
                  </span>
                  °C
                </span>
              </div>

              <div className="col">
                <RiHeartPulseFill className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Heart Rate</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.heart_rate}
                  </span>
                  bpm
                </span>
              </div>

              <div className="col">
                <GiLungs className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Breath Rate</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.breath_rate}
                  </span>
                  /rpm
                </span>
              </div>

              <div className="col">
                <RiMedicineBottleFill className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Cholesterol</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">
                    {APICondition.cholesterol}
                  </span>
                  /mg/dL
                </span>
              </div>
            </div>
          </div>

          <div className="medical-diagnose container text-start">
            <p className="medical-diagnose-title text-start">
              Medical Diagnose
            </p>
            <p className="date-diagnose">{APIDiagnose.register_date}</p>
            <p className="medical-diagnose-title">{APIDiagnose.name}</p>

            <div>
              <p className="diagnose-title">Diagnose</p>
              <div className="diagnose text-start">
                <span>{APIDiagnose.diagnose}</span>
              </div>
            </div>

            <div>
              <p className="presciption-title">Presciption</p>
              <div className="presciption text-start">
                <span>{APIDiagnose.prescription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetail;
