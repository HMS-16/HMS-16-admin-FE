import React, { useEffect, useState } from "react";
import { Image, Nav } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DoctorCard = ({ data }) => {
  const [doctorImage, setDoctorImage] = useState("");
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const { image, name } = data;
    setTimeout(() => {
      setDoctorImage(image);
      setDoctorName(name);
    });
  }, [data]);

  return (
    <>
      <Nav.Link href={`/doctor/${data.id}`}>
        {doctorImage ? (
          <Image src={doctorImage} alt={doctorName} roundedCircle style={{ width: "200px" }} />
        ) : (
          <Skeleton circle width="200px" height="200px" />
        )}
        {doctorName ? <p className="fs-5 fw-bold pt-4 text-dark">{doctorName}</p> : <Skeleton />}
      </Nav.Link>
    </>
  );
};
export default DoctorCard;
