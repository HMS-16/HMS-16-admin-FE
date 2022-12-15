import { React, useState } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./AddPatient.css";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();
  const patientDetail = () => {
    navigate(`/patient/detail`);
  };
  const patientDashboard = () => {
    navigate(`/patient`);
  };

  const data = {
    fullName: "",
    numberMed: "",
    birthPlace: "",
    birthDate: "",
    gender: "Male",
    status: "Single",
    bloodType: "A",
    phoneNum: "",
    email: "",
    address: "",
    province: "",
    city: "",
    district: "",
    fullNameFam: "",
    relationship: "",
    numberPhone: "",
    emailFam: "",
    addressFamily: "",
    provinceFamily: "",
    cityFamily: "",
    districtFamily: "",
  };

  const dataError = {
    fullName: "",
    phoneNum: "",
    email: "",
    province: "",
    city: "",
    district: "",
    fullNameFam: "",
    numberPhone: "",
    emailFam: "",
    provinceFamily: "",
    cityFamily: "",
    districtFamily: "",
  };

  const [datas, setDatas] = useState(data);
  const [errorMessage, setErrorMessage] = useState(dataError);
  const regexText = /^[a-zA-Z\s]*$/;
  const regexNumber = /^[0-9]*$/;
  const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;

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
    if (name === "birthPlace") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          birthPlace: "Birthplace must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "phoneNum") {
      if (!regexNumber.test(value)) {
        setErrorMessage({
          ...errorMessage,
          phoneNum: "Phone number must be number!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMessage({
          ...errorMessage,
          email: "Please use the correct email format!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "province") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          province: "Province name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "city") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          city: "City name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "district") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          district: "District name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "fullNameFam") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          fullNameFam: "Name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "numberPhone") {
      if (!regexNumber.test(value)) {
        setErrorMessage({
          ...errorMessage,
          numberPhone: "Phone Number must be number!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "emailFam") {
      if (!regexEmail.test(value)) {
        setErrorMessage({
          ...errorMessage,
          emailFam: "Please use the correct email format!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "provinceFamily") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          provinceFamily: "Province name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "cityFamily") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          cityFamily: "City name must be letter!",
        });
      } else {
        setErrorMessage("");
      }
    }

    if (name === "districtFamily") {
      if (!regexText.test(value)) {
        setErrorMessage({
          ...errorMessage,
          districtFamily: "District name must be letter!",
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
      Birthplace: ${datas.birthPlace}
      Birthdate: ${datas.birthDate}
      Gender: ${datas.gender}
      Status: ${datas.status}
      Blood Type: ${datas.bloodType}
      Phone Number: ${datas.phoneNum}
      Email: ${datas.email}
      Address: ${datas.address}
      Province: ${datas.province}
      City: ${datas.province}
      District: ${datas.district}
      Full Name Family: ${datas.fullNameFam}
      Relationship with patient: ${datas.relationship}
      Phone Number Family: ${datas.numberPhone}
      Family email: ${datas.emailFam}
      Address Family: ${datas.addressFamily}
      Province Family: ${datas.provinceFamily}
      City Family: ${datas.cityFamily}
      District Family: ${datas.districtFamily}
    `);
    }
    setDatas(data);
  };

  return (
    <>
      <div className="form-patient-page">
        <Navbar />
        <Container>
          <Form onSubmit={handleSubmit}>
            <div>
              <h5 className="patient-title">Add New Patient</h5>
            </div>
            <h5 className="add-patient-title">Patient Information</h5>
            <Row xs={1} md={2}>
              <Col>
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
              <Col>
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
                  name="birthPlace"
                  type="text"
                  required
                  value={datas.birthPlace}
                  onChange={handleInput}
                  className="field-input-form-patient"
                />
                {errorMessage.birthPlace && (
                  <p className="error-message">{errorMessage.birthPlace}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Birth Day
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="birthDate"
                  type="date"
                  required
                  value={datas.birthDate}
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
                  Gender
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select
                  value={datas.gender}
                  onChange={handleInput}
                  className="label-form-add-patient"
                >
                  <option name="gender">Male</option>
                  <option name="gender">Female</option>
                </Form.Select>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Status
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select
                  value={datas.status}
                  onChange={handleInput}
                  className="label-form-add-patient"
                >
                  <option name="status">Single</option>
                  <option name="status">Married</option>
                </Form.Select>
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Blood Type
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select
                  value={datas.bloodType}
                  onChange={handleInput}
                  className="label-form-add-patient"
                >
                  <option name="bloodType">A</option>
                  <option name="bloodType">B</option>
                  <option name="bloodType">O</option>
                  <option name="bloodType">AB</option>
                </Form.Select>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="phoneNum"
                  type="tel"
                  required
                  value={datas.phoneNum}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.phoneNum && (
                  <p className="error-message">{errorMessage.phoneNum}</p>
                )}
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  required
                  value={datas.email}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.email && (
                  <p className="error-message">{errorMessage.email}</p>
                )}
              </Col>
            </Row>

            <h5 className="address-title">Address</h5>
            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Address
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  required
                  value={datas.address}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.address && (
                  <p className="error-message">{errorMessage.address}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="province"
                  type="text"
                  required
                  value={datas.province}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.province && (
                  <p className="error-message">{errorMessage.province}</p>
                )}
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  City
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  required
                  value={datas.city}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.city && (
                  <p className="error-message">{errorMessage.city}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="district"
                  type="text"
                  required
                  value={datas.district}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.district && (
                  <p className="error-message">{errorMessage.district}</p>
                )}
              </Col>
            </Row>

            <h5 className="family-contact-title">Family Contact</h5>
            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Full Name
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="fullNameFam"
                  type="text"
                  required
                  value={datas.fullNameFam}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.fullNameFam && (
                  <p className="error-message">{errorMessage.fullNameFam}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Relationship With Patient
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="relationship"
                  type="text"
                  required
                  value={datas.relationship}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="numberPhone"
                  type="text"
                  required
                  value={datas.numberPhone}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.numberPhone && (
                  <p className="error-message">{errorMessage.numberPhone}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="emailFam"
                  type="email"
                  required
                  value={datas.emailFam}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.emailFam && (
                  <p className="error-message">{errorMessage.emailFam}</p>
                )}
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Address
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="addressFamily"
                  type="text"
                  required
                  value={datas.addressFamily}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.addressFamily && (
                  <p className="error-message">{errorMessage.addressFamily}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="provinceFamily"
                  type="text"
                  required
                  value={datas.provinceFamily}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.provinceFamily && (
                  <p className="error-message">{errorMessage.provinceFamily}</p>
                )}
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  City
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="cityFamily"
                  type="text"
                  required
                  value={datas.cityFamily}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.cityFamily && (
                  <p className="error-message">{errorMessage.cityFamily}</p>
                )}
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="districtFamily"
                  type="text"
                  required
                  value={datas.districtFamily}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                {errorMessage.districtFamily && (
                  <p className="error-message">{errorMessage.districtFamily}</p>
                )}
              </Col>
            </Row>
            <div className="button-form">
              <Button
                onClick={patientDetail}
                className="button-save-form-patient"
              >
                Save
              </Button>
              <Button
                onClick={patientDashboard}
                className="button-cancel-form-patient"
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

export default AddPatient;
