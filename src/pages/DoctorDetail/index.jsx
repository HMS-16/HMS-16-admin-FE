import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { getDoctorById } from "../../store/features/doctorsSlice";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Container fluid>
          {/* title */}
          <Row>
            <p className="pt-4 text-start fs-4 fw-bold">Doctor Detail</p>
          </Row>

          {/* button edit profile*/}
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
                  {doctor.data.doctor_by_pk?.image ? (
                    <Image src={doctor.data.doctor_by_pk?.image} roundedCircle style={{ width: "200px" }} />
                  ) : (
                    <Skeleton circle width="200px" height="200px" />
                  )}
                  {doctor.data.doctor_by_pk?.name ? (
                    <p className="fs-5 fw-bold pt-4 text-dark">{doctor.data.doctor_by_pk?.name}</p>
                  ) : (
                    <Skeleton className="mt-4" />
                  )}
                  {doctor.data.doctor_by_pk?.id ? (
                    <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.id}</p>
                  ) : (
                    <Skeleton className="my-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">General Practioner</p>
                </Col>

                {/* breakline */}
                <hr className="border-5" />

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Gender</p>
                  {doctor.data.doctor_by_pk?.gender ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.gender}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Street Address</p>
                  {doctor.data.doctor_by_pk?.address ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.address}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Phone Number</p>
                  {doctor.data.doctor_by_pk?.phoneNumber ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.phoneNumber}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Doctor Year</p>
                  {doctor.data.doctor_by_pk?.doctorYear ? (
                    <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.doctorYear}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                </Col>

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Birthday</p>
                  {doctor.data.doctor_by_pk?.birthday ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.birthday}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">City</p>
                  {doctor.data.doctor_by_pk?.city ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.city}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Email</p>
                  {doctor.data.doctor_by_pk?.email ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.email}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Last Education</p>
                  {doctor.data.doctor_by_pk?.education ? (
                    <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.education}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                </Col>

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Status</p>
                  {doctor.data.doctor_by_pk?.status ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.status}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Province</p>
                  {doctor.data.doctor_by_pk?.province ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.doctor_by_pk?.province}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Entry Year</p>
                  {doctor.data.doctor_by_pk?.entryYear ? (
                    <p className="fs-5 text-dark">{doctor.data.doctor_by_pk?.entryYear}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DoctorDetail;
