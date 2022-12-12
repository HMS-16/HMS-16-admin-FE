import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar";
import "./ChangeAppointment.css";
import { useNavigate } from "react-router-dom";
import ButtonModalEditPatient from "../../components/ButtonModalEditPatient";

const ChangeAppointment = () => {
  const navigate = useNavigate();
  const patientInformation = () => {
    navigate(`/edit/data/patient`);
  };

  const baseData = {
    fullName: "",
    numberMed: "",
    date: "",
    time: "",
  };

  const [data, setData] = useState(baseData);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    alert(`New Appointment Successfully Added`);
  };

  const resetData = () => {
    setData(baseData);
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
              <Container>
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
                      className="label-form-change-appointment"
                      type="text"
                      name="fullName"
                      onChange={handleInput}
                      required
                    />
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row xs={1} md={2}>
                  <Col style={{ marginTop: "20px" }}>
                    <Form.Label
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      No. Medical Record
                      <span className="required-icon">*</span>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="numberMed"
                      onChange={handleInput}
                      required
                    />
                  </Col>
                  <Col style={{ marginTop: "20px" }}>
                    <Form.Label
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      Doctor
                      <span className="required-icon">*</span>
                    </Form.Label>
                    <Form.Select>
                      <option value="1">Dr. Wendy</option>
                      <option value="2">Dr. Nicole</option>
                      <option value="2">Dr. Harry</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row xs={1} md={2}>
                  <Col style={{ marginTop: "20px" }}>
                    <Form.Label
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      Date
                      <span className="required-icon">*</span>
                    </Form.Label>
                    <Form.Control
                      className="label-form-add-patient"
                      type="date"
                      name="date"
                      onChange={handleInput}
                      required
                    />
                  </Col>
                  <Col style={{ marginTop: "20px" }}>
                    <Form.Label
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      Time
                      <span className="required-icon">*</span>
                    </Form.Label>
                    <Form.Control
                      className="label-form-add-patient"
                      type="time"
                      name="time"
                      onChange={handleInput}
                      required
                    />
                  </Col>
                </Row>
              </Container>
            </Form>
          </Container>
          <div className="button-edit-form" style={{ marginRight: "20px" }}>
            <ButtonModalEditPatient className="button-save-edit-form-patient" />
            <Button onClick={resetData} className="button-cancel-form-patient">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeAppointment;
