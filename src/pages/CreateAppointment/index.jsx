import { React, useState } from "react";
import "./CreateAppointment.css";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../store/features/appointment/appointmentSlice";
import { Link } from "react-router-dom";

const CreateAppointment = () => {
  const initialValue = {
    name: "",
    date: "",
    doctor: "",
    shift: "",
  };

  const [datas, setDatas] = useState(initialValue);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const data = {
        name: datas.name,
        date: datas.date,
        doctor: datas.doctor,
        shift: datas.shift,
      };
      dispatch(addAppointment(data));
      setDatas(initialValue);
    }
    setValidated(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <Container>
          <h5 className="create-appointment-title">Create Appointment</h5>
          <hr />
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => handleSubmit(e)}
          >
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
                  name="name"
                  type="text"
                  required
                  value={datas.name}
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
                  No. Medical Record
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control disabled className="field-input-form-patient" />
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
                <Form.Control
                  className="field-input-form-patient"
                  value={datas.doctor}
                  type="text"
                  name="doctor"
                  onChange={handleInput}
                  required
                />
              </Col>

              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Shift
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select
                  name="shift"
                  onChange={handleInput}
                  required
                  className="label-form-add-patient"
                >
                  <option value="09.00 - 12.00">09.00 - 12.00</option>
                  <option value="13.00 - 16.00">13.00 - 16.00</option>
                  <option value="18.00 - 21.00">18.00 - 21.00</option>
                </Form.Select>
              </Col>
            </Row>
            <div className="button-form-create-appointment">
              <Button
                onClick={handleSubmit}
                className="button-save-form-patient"
              >
                Save
              </Button>
              <Link to={"/appointment"}>
                <Button className="button-cancel-create-appointment">
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CreateAppointment;
