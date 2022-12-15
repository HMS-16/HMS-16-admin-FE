import { React, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import "./CreateAppointment.css";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
  const navigate = useNavigate();
  const appointmentPage = () => {
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
          fullName: "Name must be letter!",
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
      <div>
        <Navbar />
        <Container>
          <h5 className="create-appointment-title">Create Appointment</h5>
          <hr />
          <Form onSubmit={handleSubmit}>
            <h5 className="change-appointment-title">Session Information</h5>
            <Row md={2}>
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
                <Form.Control
                  disabled
                  name="numberMed"
                  type="text"
                  className="field-input-form-patient"
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Date
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  value={datas.date}
                  type="date"
                  name="date"
                  onChange={handleInput}
                  required
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
                  value={datas.doctor}
                  className="label-form-add-patient"
                  onChange={handleInput}
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
            <div className="button-form-create-appointment">
              <Button
                onClick={appointmentPage}
                className="button-save-form-patient"
              >
                Save
              </Button>
              <Button
                onClick={appointmentPage}
                className="button-cancel-create-appointment"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CreateAppointment;
