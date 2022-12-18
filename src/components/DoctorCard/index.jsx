import React, { useEffect, useState } from "react";
import { Image, Nav } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";
import DoctorImage from "../../assets/images/doctor.png";

const DoctorCard = ({ data }) => {
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const { name } = data;
    setTimeout(() => {
      setDoctorName(name);
    });
  }, [data]);

  return (
    <>
      <Nav.Link href={`/doctor/${data.str_num}`}>
        <Image
          src={DoctorImage}
          alt="doctor image"
          width={200}
          height={200}
          style={{ backgroundColor: "#C7DAF5" }}
          roundedCircle
        />
        <p className="fs-5 fw-bold pt-4 text-dark">{doctorName}</p>
      </Nav.Link>
    </>
  );
};
export default DoctorCard;
