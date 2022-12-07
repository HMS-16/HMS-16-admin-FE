import React, { useEffect } from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../store/features/doctorsSlice";
import DoctorCard from "../../components/DoctorCard";
import DoctorTable from "../../components/DoctorTable";
import "./DoctorDashboard.css";
import "swiper/css";

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);

  return (
    <>
      <Row>
        <p className="text-start fs-4 fw-bold">Preview Doctor</p>
      </Row>
      <Container className="pt-4">
        <Swiper freeMode grabCursor modules={[FreeMode]} className="mySwiper" slidesPerView={4} spaceBetween={50}>
          {doctor.data.doctor?.map((item) => (
            <SwiperSlide key={item.id}>
              <DoctorCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Stack direction="horizontal" gap={3} className="d-flex mt-5 justify-content-end">
        <Button variant="blue">+ Create Schedule</Button>
        <Button variant="outBlue" className="me-3">
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

export default DoctorDashboard;
