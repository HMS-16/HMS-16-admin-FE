import { React, useRef, useState, useEffect } from "react";
import axiosInstance from "../../config/axiosInstance";
import { AiFillPrinter } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Logo from "../../assets/images/Logo.png";
import "./PatientHistoryCondition.css";

const PatientHistoryCondition = () => {
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print Success"),
  });

  return (
    <>
      <div className="patient-history-page">
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <button onClick={handlePrint} className="print-button">
            <AiFillPrinter
              style={{
                marginRight: "15px",
                height: "19px",
                width: "15px",
              }}
            />
            Print
          </button>
        </div>
        <div ref={componentRef}>
          <div className="header-history-condition">
            <div>
              <img src={Logo} alt="img" className="logo-header" />
            </div>
            <div className="title-header">
              <h5>Mediclinic General Clinic</h5>
              <p>
                Kaki Street No. 1, Jakarta
                <br />
                <span>021-192836475</span>
              </p>
            </div>
          </div>

          <div className="table-history">
            <table className="minimalistBlack" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th colspan="2">No Medical Record : {APIPatient.id}</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td style={{ marginBottom: "50px" }}>
                    Treating Doctor :
                    <br />
                    (........................................)
                  </td>
                  <td>
                    Treating Nurse :
                    <br />
                    (........................................)
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Name : {APIPatient.name}</td>
                  <td
                    className="text-center"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Condition
                  </td>
                </tr>
                <tr>
                  <td>
                    Place, Date of Birth : {APIPatient.pob} {APIPatient.dob}
                  </td>
                  <td>Height: {APICondition.height} cm</td>
                </tr>
                <tr>
                  <td>Gender : {APIPatient.gender}</td>
                  <td>Weight : {APICondition.weight} kg</td>
                </tr>
                <tr>
                  <td>Address :{APIPatient.address}</td>
                  <td>Blood Pressure : {APICondition.blood_pressure} mmHg</td>
                </tr>
                <tr>
                  <td>Blood Type : {APIPatient.blood_type} </td>
                  <td>Sugar Analysis : {APICondition.sugar_analysis} mg/dL</td>
                </tr>
                <tr>
                  <td>Phone Number : {APIPatient.phone_num}</td>
                  <td>Body Temperature : {APICondition.body_temperature} °C</td>
                </tr>
                <tr>
                  <td>Status : {APIPatient.status}</td>
                  <td>Heart Rate : {APICondition.heart_rate} bpm</td>
                </tr>
                <tr>
                  <td>Family Name : {APIPatient.family_name}</td>
                  <td>Breath Rate : {APICondition.breath_rate} /rpm</td>
                </tr>
                <tr>
                  <td>Family Contact : {APIPatient.family_contact}</td>
                  <td>Cholestreol : {APICondition.cholesterol} /mg/dL</td>
                </tr>
                <tr>
                  <td colspan="2">Register Date :</td>
                </tr>
                <tr>
                  <td colspan="2">Shift :</td>
                </tr>
                <tr>
                  <td className="field-large" colspan="2">
                    Diagnose : {APIDiagnose.diagnose}
                  </td>
                </tr>
                <tr>
                  <td className="field-large" colspan="2">
                    Presciption : {APIDiagnose.presciption}
                  </td>
                </tr>
                <tr>
                  <td className="date" colspan="2">
                    Jakarta, ........................................
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHistoryCondition;
