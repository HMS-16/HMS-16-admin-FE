import { React, useState } from "react";
import "./AddPatient.css";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPatient } from "../../store/features/patient/patientSlice";

const AddPatient = () => {
  const navigate = useNavigate();

  const patientDashboard = () => {
    navigate(`/patient`);
  };

  const initialValue = {
    name: "",
    pob: "",
    dob: "",
    gender: "Male",
    married: 0,
    blood_type: "A",
    phone_num: "",
    email: "",
    address: "",
    district: "",
    city: "",
    province: "",
    name_family: "",
    relationship_family: "",
    phone_num_family: "",
    email_family: "",
    address_family: "",
    district_family: "",
    city_family: "",
    province_family: "",
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
        pob: datas.pob,
        dob: datas.dob,
        gender: datas.gender,
        married: Boolean(parseInt(datas.married)),
        blood_type: datas.blood_type,
        phone_num: datas.phone_num,
        email: datas.email,
        address: datas.address,
        district: datas.district,
        city: datas.city,
        province: datas.province,
        name_family: datas.name_family,
        relationship_family: datas.relationship_family,
        phone_num_family: datas.phone_num_family,
        email_family: datas.email_family,
        address_family: datas.address_family,
        district_family: datas.district_family,
        city_family: datas.city_family,
        province_family: datas.province_family,
      };
      dispatch(addPatient(data));
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
      <div className="form-patient-page">
        <Container>
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => handleSubmit(e)}
          >
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
                  name="name"
                  type="text"
                  required
                  value={datas.name}
                  onChange={handleInput}
                  className="field-input-form-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert full name.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  No. Medical Record
                </Form.Label>
                <Form.Control disabled className="field-input-form-patient" />
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
                  required
                  name="pob"
                  type="text"
                  value={datas.pob}
                  onChange={handleInput}
                  className="field-input-form-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert birth place.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Birth Day
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="dob"
                  type="date"
                  format="mm/dd/yyyy"
                  required
                  value={datas.dob}
                  onChange={handleInput}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a birth day.
                </Form.Control.Feedback>
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
                  name="gender"
                  onChange={handleInput}
                  className="label-form-add-patient"
                >
                  <option disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please choose a gender.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Status
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Select
                  name="status"
                  onChange={handleInput}
                  className="label-form-add-patient"
                >
                  <option disabled>Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please choose a status.
                </Form.Control.Feedback>
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
                  name="blood_type"
                  onChange={handleInput}
                  className="label-form-add-patient"
                  required
                >
                  <option disabled>Select Blood Type</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                  <option value="AB">AB</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please choose a blood type.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="phone_num"
                  type="tel"
                  pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                  required
                  value={datas.phone_num}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a phone number, and make sure phone number
                  contains of 12 number.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert a email.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert address.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert province.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert city.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert district.
                </Form.Control.Feedback>
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
                  name="name_family"
                  type="text"
                  required
                  value={datas.name_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert full name.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Relationship With Patient
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="relationship_family"
                  type="text"
                  required
                  value={datas.relationship_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a relationship with patient.
                </Form.Control.Feedback>
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
                  name="phone_num_family"
                  type="text"
                  pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                  required
                  value={datas.phone_num_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a phone number, and make sure phone number
                  contains of 12 number.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="email_family"
                  type="email"
                  required
                  value={datas.email_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a email.
                </Form.Control.Feedback>
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
                  name="address_family"
                  type="text"
                  required
                  value={datas.address_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a address.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="province_family"
                  type="text"
                  required
                  value={datas.province_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert province.
                </Form.Control.Feedback>
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
                  name="city_family"
                  type="text"
                  required
                  value={datas.city_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert city.
                </Form.Control.Feedback>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  name="district_family"
                  type="text"
                  required
                  value={datas.district_family}
                  onChange={handleInput}
                  className="label-form-add-patient"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert district.
                </Form.Control.Feedback>
              </Col>
            </Row>
            <div className="button-form">
              <Button
                type="submit"
                onClick={handleSubmit}
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
