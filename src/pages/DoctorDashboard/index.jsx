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
      <div style={{ height: "100vh", overflow: "auto" }}>
        <div className="ps-2 pb-5 mt-4 shadow rounded-4">
          <p className="pt-2 text-start fs-4 fw-bold">Preview Doctor</p>
          <Stack direction="horizontal" className="d-flex mb-2 me-2 justify-content-end">
            <Button variant="blue">+ Add Doctor</Button>
          </Stack>
          <Container className="pt-4">
            <Swiper freeMode grabCursor modules={[FreeMode]} className="mySwiper" slidesPerView={4} spaceBetween={50}>
              {doctor.data.doctor?.map((item) => (
                <SwiperSlide key={item.id}>
                  <DoctorCard key={item.id} data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <div className="ps-2 mt-5 shadow rounded-4 overflow-hidden">
          <Row>
            <p className="pt-2 fs-4 fw-bold text-start">Doctor's Schedule</p>
            <Stack direction="horizontal" gap={3} className="d-flex mb-4 me-3 justify-content-end">
              <Button variant="blue">+ Create Schedule</Button>
              <Button variant="outBlue">
                <MdEdit /> Edit Schedule
              </Button>
            </Stack>
            <DoctorTable />
          </Row>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
