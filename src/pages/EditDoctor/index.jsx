import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editDoctor, getDoctorById } from "../../store/features/doctor/doctorsSlice";

const EditDoctor = () => {
  const { str_num } = useParams();

  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctorById(str_num));
  }, [dispatch, str_num]);

  const initialValue = {
    name: "",
    pob: "",
    gender: "Male",
    last_education: "",
    exp_year: "",
    phone_num: "",
    str_num: str_num,
    dob: "",
    married: 0,
    graduation_year: "",
    competency: "",
    email: "",
    address: "",
    city: "",
    province: "",
    district: "",
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
        gender: datas.gender,
        last_education: datas.last_education,
        exp_year: parseInt(datas.exp_year),
        phone_num: datas.phone_num,
        str_num: datas.str_num,
        dob: datas.dob,
        married: Boolean(parseInt(datas.married)),
        graduation_year: parseInt(datas.graduation_year),
        competency: datas.competency,
        email: datas.email,
        address: datas.address,
        city: datas.city,
        province: datas.province,
        district: datas.district,
      };
      dispatch(editDoctor(data));
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
  // console.log(datas);

  return (
    <>
      <Row style={{ height: "100vh", overflow: "auto" }}>
        <Row className="ps-4 mt-4 text-start">
          <p className="pt-2 fs-4 fw-bold">Edit Doctor Profile</p>

          {/* Information Doctor Field */}
          <p className="pt-2 fs-5 fw-bold">Information Doctor</p>
          <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={datas.name}
                    placeholder={doctor.data.name}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert full name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="pob" className="mb-3">
                  <Form.Label>Birth Place</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="pob"
                    value={datas.pob}
                    placeholder={doctor.data.pob}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert birth place.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="gender" className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name="gender" onChange={handleInput}>
                    <option disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="last_education" className="mb-3">
                  <Form.Label>Last Education</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="last_education"
                    value={datas.last_education}
                    placeholder={doctor.data.last_education}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert last education.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exp_year" className="mb-3">
                  <Form.Label>Long Experience (Year)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min={0}
                    max={50}
                    name="exp_year"
                    value={datas.exp_year}
                    placeholder={doctor.data.exp_year}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert long experience.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="phone_num" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    name="phone_num"
                    value={datas.phone_num}
                    placeholder={doctor.data.phone_num}
                    pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please make sure phone number contains of 12 numbers
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="str_num" className="mb-3">
                  <Form.Label>Register Number</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    name="str_num"
                    placeholder={doctor.data.str_num}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert register number.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="dob" className="mb-3">
                  <Form.Label>Birth Day</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="dob"
                    value={datas.dob}
                    placeholder={doctor.data.dob}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please choose birth date.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="married" className="mb-3">
                  <Form.Label>Married</Form.Label>
                  <Form.Select name="married" onChange={handleInput}>
                    <option disabled>Select married</option>
                    <option value="0">Single</option>
                    <option value="1">Married</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="graduation_year" className="mb-3">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min={0}
                    name="graduation_year"
                    value={datas.graduation_year}
                    placeholder={doctor.data.graduation_year}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert graduation year.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="competency" className="mb-3">
                  <Form.Label>Competency</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="competency"
                    value={datas.competency}
                    placeholder={doctor.data.competency}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert competency.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={datas.email}
                    placeholder={doctor.data.email}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert valid email.</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Address Field */}
            <Row>
              <p className="pt-2 fs-5 fw-bold">Address</p>
              <Col>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="address"
                    value={datas.address}
                    placeholder={doctor.data.address}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert valid address.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="city" className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="city"
                    value={datas.city}
                    placeholder={doctor.data.city}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert valid city.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="province" className="mb-3">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="province"
                    value={datas.province}
                    placeholder={doctor.data.province}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert valid province.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="district" className="mb-3">
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="district"
                    value={datas.district}
                    placeholder={doctor.data.district}
                    onChange={handleInput}
                  />
                  <Form.Control.Feedback type="invalid">Please insert valid district.</Form.Control.Feedback>
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

export default EditDoctor;
