import React from "react";
import Navbar from "../../components/Navbar/index";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "./CreateAppointment.css";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
  const navigate = useNavigate();
  const appointmentPage = () => {
    navigate(`/appointment`);
  };

  return (
    <>
      <div>
        <Navbar />
        <Container>
          <h5 className="create-appointment-title">Create Appointment</h5>
          <form>
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
                  className="label-form-change-appointment"
                  type="text"
                  name="fullName"
                  required
                />
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
                <Form.Control type="text" name="numberMed" required />
              </Col>
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
                <Form.Select>
                  <option value="1">Dr. Wendy</option>
                  <option value="2">Dr. Nicole</option>
                  <option value="2">Dr. Harry</option>
                </Form.Select>
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
                  required
                />
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
          </form>
        </Container>
      </div>
    </>
  );
};

export default CreateAppointment;
