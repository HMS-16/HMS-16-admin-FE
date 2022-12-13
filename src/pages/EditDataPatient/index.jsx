import { React, useState } from "react";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar";
import ButtonModalEditPatient from "../../components/ButtonModalEditPatient";
import "./EditDataPatient.css";
import { useNavigate } from "react-router-dom";

const EditDataPatient = () => {
  const navigate = useNavigate();
  const changeAppointment = () => {
    navigate(`/change/appointment`);
  };

  const patientDashboard = () => {
    navigate(`/patient`);
  };

  const baseData = {
    fullName: "",
    numberMed: "",
    birthPlace: "",
    birthDate: "",
    phoneNum: "",
    email: "",
    address: "",
    province: "",
    city: "",
    district: "",
    FullNameFam: "",
    relationship: "",
    numberPhone: "",
    emailFam: "",
    addressFamily: "",
    provinceFamily: "",
    cityFamily: "",
    districtFamily: "",
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
    alert(`Edit Patient Successfully`);
  };

  return (
    <>
      <div className="form-patient-page">
        <Navbar />
        <h5 className="edit-patient-title" style={{ display: "flex" }}>
          Edit Patient
        </h5>
        <div className="option-edit-patient">
          <h5 className="option-edit-patient-information">
            Patient Information
          </h5>
          <h5
            onClick={changeAppointment}
            className="option-edit-patient-appointment"
            style={{ marginLeft: "20px" }}
          >
            Appointment
          </h5>
        </div>

        <Container>
          <form onSubmit={handleSubmit}>
            <Row xs={1} md={2}>
              <Col>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Full Name
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  type="text"
                  name="fullName"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  No. Medical Record
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  type="text"
                  name="numberMed"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Birth Place
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  type="text"
                  name="birthPlace"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Birth Day
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  type="date"
                  name="birthDate"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Gender
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select className="label-form-add-patient">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Status
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select className="label-form-add-patient">
                  <option value="1">Single</option>
                  <option value="2">Maried</option>
                </Form.Select>
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Blood Type
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select className="label-form-add-patient">
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="2">O</option>
                  <option value="2">AB</option>
                </Form.Select>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="label-form-add-patient"
                  name="phoneNum"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="email"
                  name="email"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <h5 className="address-title">Address</h5>
            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Address
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="address"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="province"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  City
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="city"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="district"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <h5 className="family-contact-title">Family Contact</h5>
            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Full Name
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="fullNameFam"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Relationship With Patient
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="relationship"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="numberPhone"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="emailFam"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Address
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="addressFamily"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="provinceFamily"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  City
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="cityFamily"
                  required
                  onChange={handleInput}
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  className="label-form-add-patient"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  type="text"
                  name="districtFamily"
                  required
                  onChange={handleInput}
                />
              </Col>
            </Row>
            <div className="button-edit-form">
              <ButtonModalEditPatient className="button-save-edit-form-patient" />
              <Button
                className="button-cancel-form-patient"
                onClick={patientDashboard}
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

export default EditDataPatient;
