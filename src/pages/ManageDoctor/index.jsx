import React from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import DoctorCard from "../../components/DoctorCard";
import DoctorTable from "../../components/DoctorTable";
import img from "../../assets/images/avatar.jpg";
import "./ManageDoctor.css";
import "swiper/css";

const ManageDoctor = () => {
  return (
    <>
      <Row>
        <p className="text-start fs-4 fw-bold">Preview Doctor</p>
      </Row>
      <Container className="pt-4">
        <Swiper freeMode grabCursor modules={[FreeMode]} className="mySwiper" slidesPerView={4} spaceBetween={50}>
          <SwiperSlide>
            <DoctorCard data={{ id: 1, imgSrc: img, name: "Dr. Abed" }} />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard data={{ id: 2, imgSrc: img, name: "Dr. Putri" }} />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard data={{ id: 3, imgSrc: img, name: "Dr. Baiq" }} />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard data={{ id: 4, imgSrc: img, name: "Dr. Nurul" }} />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard data={{ id: 5, imgSrc: img, name: "Dr. Abed" }} />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard data={{ id: 6, imgSrc: img, name: "Dr. Baiq" }} />
          </SwiperSlide>
        </Swiper>
      </Container>
      <Stack direction="horizontal" gap={3} className="d-flex mt-5 justify-content-end">
        <Button variant="blue">+ Create Schedule</Button>
        <Button variant="blue" className="me-3">
          <MdEdit /> Edit Schedule
        </Button>
      </Stack>
      <Row className="mt-5 shadow rounded-4 overflow-hidden">
        <p className="py-2 fs-4 fw-bold text-start">Doctor's Schedule</p>
        <DoctorTable />
      </Row>
    </>
  );
};

export default ManageDoctor;
