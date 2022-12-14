import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { getDoctorById } from "../../store/features/doctor/doctorsSlice";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DoctorImage from "../../assets/images/doctor.png";

const DoctorDetail = () => {
  const { str_num } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors);
  console.log(doctor);

  useEffect(() => {
    dispatch(getDoctorById(str_num));
  }, [dispatch, str_num]);

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
                  <Image
                    src={DoctorImage}
                    alt="doctor image"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "#C7DAF5" }}
                    roundedCircle
                  />
                  {doctor.data.name ? (
                    <p className="fs-5 fw-bold pt-4 text-dark">{doctor.data.name}</p>
                  ) : (
                    <Skeleton className="mt-4" />
                  )}
                  {doctor.data.str_num ? (
                    <p className="fs-5 text-dark">{doctor.data.str_num}</p>
                  ) : (
                    <Skeleton className="my-4" />
                  )}
                  {doctor.data.competency ? (
                    <p className="fs-5 fw-bold text-dark">{doctor.data.competency}</p>
                  ) : (
                    <Skeleton className="my-4" />
                  )}
                </Col>

                {/* breakline */}
                <hr className="border-5" />

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Gender</p>
                  {doctor.data.gender ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.gender}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Status</p>
                  {doctor.data.status ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.status}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Last Education</p>
                  {doctor.data.last_education ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.last_education}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Street Address</p>
                  {doctor.data.address ? (
                    <p className="fs-5 text-dark">{doctor.data.address}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                </Col>

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Birth Place</p>
                  {doctor.data.pob ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.pob}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Phone Number</p>
                  {doctor.data.phone_num ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.phone_num}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Graduation Year</p>
                  {doctor.data.graduation_year ? (
                    <p className="fs-5 text-dark">{doctor.data.graduation_year}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                </Col>

                <Col xs={4} className="text-start mt-3">
                  <p className="fs-5 fw-bold text-dark">Birth Date</p>
                  {doctor.data.dob ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.dob}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Email</p>
                  {doctor.data.email ? (
                    <p className="fs-5 pb-4 text-dark">{doctor.data.email}</p>
                  ) : (
                    <Skeleton className="mt-1 mb-4" />
                  )}
                  <p className="fs-5 fw-bold text-dark">Long Experience</p>
                  {doctor.data.exp_year ? (
                    <p className="fs-5 text-dark">{doctor.data.exp_year}</p>
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
