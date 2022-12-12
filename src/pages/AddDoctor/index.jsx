import React, { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddDoctor = () => {
  const data = {
    fullName: "",
    birthPlace: "",
    gender: "male",
    lastEducation: "",
    longExperience: "",
    phoneNumber: "",
    registerNumber: "",
    birthDay: "",
    status: "single",
    graduationYear: "",
    competency: "",
    email: "",
    address: "",
    city: "",
    province: "",
    district: "",
  };
  const [datas, setDatas] = useState(data);

  const handleInput = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datas === "") {
      alert("Input form!");
    } else {
      alert(`
            Full Name: ${datas.fullName}
            Birth Place: ${datas.birthPlace}
            Gender: ${datas.gender}
            Last Education: ${datas.lastEducation}
            Long Experience: ${datas.longExperience}
            Phone Number: ${datas.phoneNumber}
            Register Number: ${datas.registerNumber}
            Birth Day: ${datas.birthDay}
            Status: ${datas.status}
            Graduation Year: ${datas.graduationYear}
            Competency: ${datas.competency}
            Email: ${datas.email}
            Address: ${datas.address}
            City: ${datas.city}
            Province: ${datas.province}
            District: ${datas.district}
        `);
    }

    setDatas(data);
  };

  return (
    <>
      <Row style={{ height: "100vh", overflow: "auto" }}>
        <Row className="ps-4 mt-4 text-start">
          <p className="pt-2 fs-4 fw-bold">Add Doctor</p>

          {/* Information Doctor Field */}
          <p className="pt-2 fs-5 fw-bold">Information Doctor</p>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="fullName"
                    value={datas.fullName}
                    placeholder="Enter full name"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Birth Place</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="birthPlace"
                    value={datas.birthPlace}
                    placeholder="Enter birth place"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name="gender" onChange={handleInput}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Education</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastEducation"
                    value={datas.lastEducation}
                    placeholder="Enter last education"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Long Experience (Year)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min={0}
                    max={50}
                    name="longExperience"
                    value={datas.longExperience}
                    placeholder="Enter the duration of long experience"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    name="phoneNumber"
                    value={datas.phoneNumber}
                    placeholder="Enter phone number (08XX)"
                    pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Register Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="registerNumber"
                    value={datas.registerNumber}
                    placeholder="Enter register number"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Birth Day</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="birthDay"
                    value={datas.birthDay}
                    placeholder="Enter birth day"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="status" onChange={handleInput}>
                    <option value="male">Single</option>
                    <option value="female">Married</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="graduationYear"
                    value={datas.graduationYear}
                    placeholder="Enter graduation year"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Competency</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="competency"
                    value={datas.competency}
                    placeholder="Enter competency"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={datas.email}
                    placeholder="Enter email"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Address Field */}
            <Row>
              <p className="pt-2 fs-5 fw-bold">Address</p>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="address"
                    value={datas.address}
                    placeholder="Enter address"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="city"
                    value={datas.city}
                    placeholder="Enter city"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="province"
                    value={datas.province}
                    placeholder="Enter province"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="district"
                    value={datas.district}
                    placeholder="Enter district"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Stack direction="horizontal" gap={3} className="d-flex my-4 justify-content-end">
              <Button variant="blue" type="submit">
                Save
              </Button>
              <Link style={{ textDecoration: "none" }} to="/doctor">
                <Button variant="outBlue">Cancel</Button>
              </Link>
            </Stack>
          </Form>
        </Row>
      </Row>
    </>
  );
};

export default AddDoctor;
