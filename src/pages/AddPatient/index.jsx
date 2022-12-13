import { React } from "react";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar";
import "./AddPatient.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddPatient = () => {
  const navigate = useNavigate();
  const patientDetail = () => {
    navigate(`/patient/detail`);
  };
  const patientDashboard = () => {
    navigate(`/patient`);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="form-patient-page">
        <Navbar />
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("fullName")}
                  className="field-input-form-patient"
                  type="text"
                  required
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
                  {...register("numberMed")}
                  type="text"
                  required
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
                  {...register("birthPlace")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Birth Day
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="field-input-form-patient"
                  {...register("date")}
                  type="date"
                  name="birthDate"
                  required
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
                <Form.Select className="label-form-add-patient">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
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
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Phone Number
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="label-form-add-patient"
                  {...register("phoneNum")}
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("email")}
                  type="email"
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("address")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("province")}
                  type="text"
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("city")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("district")}
                  type="text"
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("fullNameFam")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Relationship With Patient
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("relationship")}
                  type="text"
                  required
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
                  className="label-form-add-patient"
                  {...register("numberPhone")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Email
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("emailFam")}
                  type="text"
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("addressFamily")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  Province
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("provinceFamily")}
                  type="text"
                  required
                />
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
                  className="label-form-add-patient"
                  {...register("cityFamily")}
                  type="text"
                  required
                />
              </Col>
              <Col style={{ marginTop: "20px" }}>
                <Form.Label
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  District
                  <span className="required-icon">*</span>
                </Form.Label>
                <Form.Control
                  className="label-form-add-patient"
                  {...register("districtFamily")}
                  type="text"
                  required
                />
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
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddPatient;
