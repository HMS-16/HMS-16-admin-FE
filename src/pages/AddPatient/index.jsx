import { React, useState } from "react";
import "./AddPatient.css";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import Header from "../../components/Header/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPatient } from "../../store/features/patients/patientsSlice";

const AddPatient = () => {
  const navigate = useNavigate();

  const patientDashboard = () => {
    navigate(`/patient`);
  };

  const initialValue = {
    name: "",
    pob: "",
    DOB: "",
    gender: "Male",
    married: "false",
    blood_type: "A",
    phone_num: "",
    email: "",
    address: "",
    city: "",
    province: "",
    family_name: "",
    relationship: "",
    family_contact: "",
    status: "",
  };

  const [datas, setDatas] = useState(initialValue);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const data = {
        name: datas.name,
        pob: datas.pob,
        DOB: datas.DOB,
        gender: datas.gender,
        married: datas.married,
        blood_type: datas.blood_type,
        phone_num: datas.phone_num,
        email: datas.email,
        address: datas.address,
        district: datas.district,
        city: datas.city,
        province: datas.province,
        family_name: datas.family_name,
        relationship: datas.relationship,
        family_contact: datas.family_contact,
        status: datas.status,
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
      <Header />
      <Container style={{ height: "100vh", overflow: "auto" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                No. Medical Record
              </Form.Label>
              <Form.Control disabled className="field-input-form-patient" />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Birth Day
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                name="DOB"
                type="date"
                required
                value={datas.DOB}
                onChange={handleInput}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a birth day.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                District
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                // name="district"
                // type="text"
                // required
                // value={datas.district}
                // onChange={handleInput}
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
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Full Name
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                name="family_name"
                type="text"
                required
                value={datas.family_name}
                onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert full name.
              </Form.Control.Feedback>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
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
              <Form.Control.Feedback type="invalid">
                Please insert a relationship with patient.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Phone Number
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                name="family_contact"
                type="text"
                pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                required
                value={datas.family_contact}
                onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert a phone number, and make sure phone number
                contains of 12 number.
              </Form.Control.Feedback>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Email
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                // // name="emailFam"
                // // type="email"
                // // required
                // // value={datas.emailFam}
                // onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert a email.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Address
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                // name="addressFamily"
                // type="text"
                // required
                // value={datas.addressFamily}
                // onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert a address.
              </Form.Control.Feedback>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                Province
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                // name="provinceFamily"
                // type="text"
                // required
                // value={datas.provinceFamily}
                // onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert province.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                City
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                name="status"
                type="text"
                required
                value={datas.status}
                onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert city.
              </Form.Control.Feedback>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Form.Label style={{ display: "flex", justifyContent: "start" }}>
                District
                <span className="required-icon">*</span>
              </Form.Label>
              <Form.Control
                // name="districtFamily"
                // type="text"
                // required
                // value={datas.districtFamily}
                // onChange={handleInput}
                className="label-form-add-patient"
              />
              <Form.Control.Feedback type="invalid">
                Please insert district.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <div className="button-form">
            <Button onClick={handleSubmit} className="button-save-form-patient">
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
    </>
  );
};

export default AddPatient;
