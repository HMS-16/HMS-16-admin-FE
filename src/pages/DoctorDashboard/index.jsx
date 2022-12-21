import React, { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor, getDoctorSchedule } from "../../store/features/doctor/doctorsSlice";
import DoctorCard from "../../components/DoctorCard";
import { Link } from "react-router-dom";
import "./DoctorDashboard.css";
import "swiper/css";
import ModalAddScheduleDoctor from "../../components/ModalAddScheduleDoctor";
import ModalEditScheduleDoctor from "../../components/ModalEditScheduleDoctor";
import DoctorTable from "../../components/DoctorTable";

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const { data: doctor, dataSchedule: schedule, status: loading } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctor());
    dispatch(getDoctorSchedule());
  }, [dispatch]);

  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  if (loading === "succeeded") {
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
                <Swiper
                  freeMode
                  grabCursor
                  modules={[FreeMode]}
                  className="mySwiper"
                  slidesPerView={4}
                  spaceBetween={50}
                >
                  {doctor.map((item, index) => (
                    <SwiperSlide key={index}>
                      <DoctorCard key={index} data={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="py-4">
                  <p className="fs-2">Empty Data</p>
                  <p className="fs-4 ">Please Insert Doctor Data</p>
                </div>
              )}
            </Container>
          </div>
          <div className="ps-2 mt-5 shadow rounded-4 overflow-auto">
            <div>
              <p className="pt-2 ps-2 fs-4 fw-bold text-start">Doctor's Schedule</p>
              <Stack direction="horizontal" gap={3} className="d-flex mb-4 me-3 justify-content-end">
                <Button variant="blue" onClick={() => setAddModalShow(true)}>
                  + Create Schedule
                </Button>
                <ModalAddScheduleDoctor show={addModalShow} onHide={() => setAddModalShow(false)} />
                <Button variant="outBlue" onClick={() => setEditModalShow(true)}>
                  <MdEdit /> Edit Schedule
                </Button>
                <ModalEditScheduleDoctor
                  doctor={doctor}
                  schedule={schedule}
                  show={editModalShow}
                  onHide={() => setEditModalShow(false)}
                />
              </Stack>
              <DoctorTable doctor={doctor} schedule={schedule} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DoctorDashboard;
