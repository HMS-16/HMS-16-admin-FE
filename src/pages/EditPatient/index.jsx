import { React, useState, useEffect } from "react";
import { Container, Col, Button, Form, Row } from "react-bootstrap";
// import ModalSaveEditPatient from "../../components/ModalSaveEditPatient/index";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPatient.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editPatient,
  getPatientsById,
} from "../../store/features/patient/patientSlice";

const EditPatient = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const patient = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatientsById(id));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const changeAppointment = () => {
    navigate(`/appointment`);
  };

  const patientInformation = () => {
    navigate(`/patient/edit${id}`);
  };

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
      dispatch(editPatient(data));
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
    console.log(datas);
  };

  return (
    <>
      <div className="form-patient-page">
        <h5 className="edit-patient-title" style={{ display: "flex" }}>
          Edit Patient
        </h5>
        <div className="option-edit-patient">
          <h5
            className="option-edit-patient-information"
            onClick={patientInformation}
          >
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
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => handleSubmit(e)}
          >
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
                  value={datas.name}
                  onChange={handleInput}
                  placeholder={patient.data.name}
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
                <Form.Control
                  disabled
                  className="field-input-form-patient"
                  placeholder={patient.data.id}
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
                  name="pob"
                  type="text"
                  value={datas.pob}
                  onChange={handleInput}
                  className="field-input-form-patient"
                  placeholder={patient.data.pob}
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
                  value={datas.dob}
                  onChange={handleInput}
                  placeholder={patient.data.dob}
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
                  placeholder={patient.data.gender}
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
                  name="married"
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
                  placeholder={patient.data.blood_type}
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
                  value={datas.phone_num}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.phone_num}
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
                  value={datas.email}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.email}
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
                  value={datas.address}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.address}
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
                  value={datas.province}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.province}
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
                  value={datas.city}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.city}
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
                  value={datas.district}
                  onChange={handleInput}
                  className="label-form-add-patient"
                  placeholder={patient.data.district}
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
                  value={datas.name_family}
                  placeholder={patient.data.name_family}
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
                  value={datas.relationship_family}
                  placeholder={patient.data.relationship_family}
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
                  value={datas.phone_num_family}
                  placeholder={patient.data.phone_num_family}
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
                  value={datas.email_family}
                  placeholder={patient.data.email_family}
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
                  value={datas.address_family}
                  placeholder={patient.data.address_family}
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
                  value={datas.province_family}
                  placeholder={patient.data.province_family}
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
                  value={datas.city_family}
                  placeholder={patient.data.city_family}
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
                  value={datas.district_family}
                  placeholder={patient.data.district_family}
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

export default EditPatient;
