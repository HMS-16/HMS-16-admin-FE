import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../store/features/doctor/doctorsSlice";
import DoctorCard from "../../components/DoctorCard";
import DoctorTable from "../../components/DoctorTable";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import DoctorImage from "../../assets/images/doctor.png";
import "./DoctorDashboard.css";
import "swiper/css";

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const { data: doctor } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);

  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <div className="ps-2 pb-3 mt-4 shadow rounded-4">
          <p className="pt-2 ps-2 text-start fs-4 fw-bold">Preview Doctor</p>
          <Stack direction="horizontal" className="d-flex mb-2 me-3 justify-content-end">
            <Link style={{ textDecoration: "none" }} to="/doctor/add">
              <Button variant="blue">+ Add Doctor</Button>
            </Link>
          </Stack>
          <Container className="pt-4">
            {doctor ? (
              <Swiper freeMode grabCursor modules={[FreeMode]} className="mySwiper" slidesPerView={4} spaceBetween={50}>
                {doctor.map((item, index) => (
                  <SwiperSlide key={index}>
                    <DoctorCard key={index} data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Row>
                <Col>
                  <Image
                    src={DoctorImage}
                    alt="doctor image"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "#C7DAF5" }}
                    roundedCircle
                  />
                  <Row className="pt-4 py-2">
                    <Skeleton />
                  </Row>
                </Col>
                <Col>
                  <Image
                    src={DoctorImage}
                    alt="doctor image"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "#C7DAF5" }}
                    roundedCircle
                  />
                  <Row className="pt-4">
                    <Skeleton />
                  </Row>
                </Col>
                <Col>
                  <Image
                    src={DoctorImage}
                    alt="doctor image"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "#C7DAF5" }}
                    roundedCircle
                  />
                  <Row className="pt-4">
                    <Skeleton />
                  </Row>
                </Col>
                <Col>
                  <Image
                    src={DoctorImage}
                    alt="doctor image"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "#C7DAF5" }}
                    roundedCircle
                  />
                  <Row className="pt-4">
                    <Skeleton />
                  </Row>
                </Col>
              </Row>
            )}
          </Container>
        </div>
        <div className="ps-2 mt-5 shadow rounded-4 overflow-auto">
          <div>
            <p className="pt-2 ps-2 fs-4 fw-bold text-start">Doctor's Schedule</p>
            <Stack direction="horizontal" gap={3} className="d-flex mb-4 me-3 justify-content-end">
              <Button variant="blue">+ Create Schedule</Button>
              <Button variant="outBlue">
                <MdEdit /> Edit Schedule
              </Button>
            </Stack>
            <DoctorTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
