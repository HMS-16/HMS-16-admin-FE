import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { getDoctorById } from "../../store/features/doctorsSlice";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const DoctorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctorById(id));
  }, [dispatch, id]);

  // console.log(doctor);
  return (
    <>
      <Container fluid>
        <Row>
          <p className="text-start fs-4 fw-bold">Doctor Detail</p>
        </Row>
        <Row>
          <Col className="d-flex py-4 justify-content-end">
            <Button variant="outBlue" className="d-flex align-items-center justify-content-center" size="lg">
              <MdEdit /> Edit Profile
            </Button>
          </Col>
        </Row>
        <Row className="py-5 shadow rounded-4 overflow-hidden">
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              <Col xs={12} className="my-3">
                <Image src={doctor.data.doctor_by_pk?.image} roundedCircle style={{ width: "200px" }}></Image>
                <p className="fs-5 fw-bold pt-4 text-dark">{doctor.data.doctor_by_pk?.name}</p>
                <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.id}</p>
                <p className="fs-5 fw-bold text-dark">General Practioner</p>
              </Col>
              <hr className="border-5" />
              <Col xs={4} className="text-start mt-3">
                <p className="fs-5 fw-bold text-dark">Gender</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.gender}</p>
                <p className="fs-5 fw-bold text-dark">Street Address</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.address}</p>
                <p className="fs-5 fw-bold text-dark">Phone Number</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.phoneNumber}</p>
                <p className="fs-5 fw-bold text-dark">Doctor Year</p>
                <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.doctorYear}</p>
              </Col>
              <Col xs={4} className="text-start mt-3">
                <p className="fs-5 fw-bold text-dark">Birthday</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.birthday}</p>
                <p className="fs-5 fw-bold text-dark">City</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.city}</p>
                <p className="fs-5 fw-bold text-dark">Email</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.email}</p>
                <p className="fs-5 fw-bold text-dark">Last Education</p>
                <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.education}</p>
              </Col>
              <Col xs={4} className="text-start mt-3">
                <p className="fs-5 fw-bold text-dark">Status</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.status}</p>
                <p className="fs-5 fw-bold text-dark">Province</p>
                <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.province}</p>
                <p className="fs-5 fw-bold text-dark">Entry Year</p>
                <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.entryYear}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DoctorDetail;
