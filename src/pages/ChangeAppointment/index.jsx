import { React, useState } from "react";
import { Col, Container, Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./ChangeAppointment.css";
import ButtonModalEditPatient from "../../components/ButtonModalEditPatient";

const ChangeAppointment = () => {
  const navigate = useNavigate();
  const patientInformation = () => {
    navigate(`/edit/data/patient`);
  };

  const appointmentDashboard = () => {
    navigate(`/appointment`);
  };

  const data = {
    fullName: "",
    date: "",
    doctor: "",
    shift: "",
  };

  const dataError = {
    fullName: "",
  };

  const [datas, setDatas] = useState(data);
  const [errorMessage, setErrorMessage] = useState(dataError);
  const regexText = /^[a-zA-Z\s]*$/;

  const handleInput = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setDatas({
      ...datas,
      [name]: value,
    });

    if (name === "fullName") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          fullName: "Nama Harus Berupa Huruf!",
        });
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datas === "") {
      alert("Input Form!");
    } else {
      alert(`
      Full Name: ${datas.fullName}
      Date: ${datas.date}
      Doctor: ${datas.doctor}
      Shift: ${datas.shift}
    `);
    }
    setDatas(data);
  };

  return (
    <>
      <div className="change-appointment-page">
        <Navbar />
        <h5 className="edit-patient-title" style={{ display: "flex" }}>
          Edit Patient
        </h5>
        <div className="option-edit-patient">
          <h5
            onClick={patientInformation}
            className="option-edit-patient-information"
          >
            Patient Information
          </h5>
          <h5
            className="option-edit-patient-appointment"
            style={{ marginLeft: "20px" }}
          >
            Appointment
          </h5>
        </div>
        <div>
          <Container>
            <Form onSubmit={handleSubmit}>
              <h5 className="change-appointment-title">Change Appointment</h5>
              <Row xs={1} md={2}>
                <Col style={{ marginTop: "20px" }}>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    Full Name
                    <span className="required-icon">*</span>
                  </Form.Label>
                  <Form.Control
                    name="fullName"
                    type="text"
                    required
                    value={datas.fullName}
                    onChange={handleInput}
                    className="field-input-form-patient"
                  />
                  {errorMessage.fullName && (
                    <p className="error-message">{errorMessage.fullName}</p>
                  )}
                </Col>
              </Row>
              <Row xs={1} md={2}>
                <Col style={{ marginTop: "20px" }}>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    No. Medical Record
                    <span className="required-icon">*</span>
                  </Form.Label>
                  <Form.Control disabled type="text" name="numberMed" />
                </Col>
                <Col style={{ marginTop: "20px" }}>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    Date
                    <span className="required-icon">*</span>
                  </Form.Label>
                  <Form.Control
                    name="date"
                    type="date"
                    required
                    value={datas.date}
                    onChange={handleInput}
                    className="field-input-form-patient"
                  />
                </Col>
              </Row>

              <Row xs={1} md={2}>
                <Col style={{ marginTop: "20px" }}>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    Doctor
                    <span className="required-icon">*</span>
                  </Form.Label>
                  <Form.Select
                    required
                    value={datas.doctor}
                    onChange={handleInput}
                    className="field-input-form-patient"
                  >
                    <option name="doctor">Dr. Wendy</option>
                    <option name="doctor">Dr. Nicole</option>
                    <option name="doctor">Dr. Harry</option>
                  </Form.Select>
                </Col>
                <Col style={{ marginTop: "20px" }}>
                  <Form.Label
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    Shift
                    <span className="required-icon">*</span>
                  </Form.Label>

                  <Form.Select
                    value={datas.shift}
                    required
                    className="label-form-add-patient"
                    onChange={handleInput}
                  >
                    <option name="shift">09.00 - 12.00</option>
                    <option name="shift">13.00 - 16.00</option>
                    <option name="shift">18.00 - 21.00</option>
                  </Form.Select>
                </Col>
              </Row>
              <div className="button-edit-form">
                <ButtonModalEditPatient className="button-save-edit-form-patient" />
                <Button
                  onClick={appointmentDashboard}
                  className="button-cancel-form-patient"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ChangeAppointment;
