import React from "react";
import DoctorTable from "../DoctorTable";

const schedule = [
  {
    id: 1,
    doctor: "Dr. Smith",
    day: "Monday",
    time: "9:00 AM",
  },
  {
    id: 0.2,
    doctor: "Dr. Johnson",
    day: "Tuesday",
    time: "10:00 AM",
  },
  // ...
];

const DoctorScheduleTable = () => {
  return (
    <div>
      <DoctorTable schedule={schedule} />
    </div>
  );
};

export default DoctorScheduleTable;
