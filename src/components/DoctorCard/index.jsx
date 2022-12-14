import React, { useEffect, useState } from "react";
import { Image, Nav } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
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
      <Nav.Link href={`/doctor/${data.id}`}>
        <Image
          src={DoctorImage}
          alt="doctor image"
          width={200}
          height={200}
          style={{ backgroundColor: "#C7DAF5" }}
          roundedCircle
        />
        {doctorName ? <p className="fs-5 fw-bold pt-4 text-dark">{doctorName}</p> : <Skeleton />}
      </Nav.Link>
    </>
  );
};
export default DoctorCard;
