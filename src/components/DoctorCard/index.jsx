import React from "react";
import { Image, Nav } from "react-bootstrap";

const DoctorCard = ({ data }) => {
  return (
    <>
      <Nav.Link href={`/doctor/${data.id}`}>
        <Image src={data.image} roundedCircle style={{ width: "200px" }}></Image>
        <p className="fs-5 fw-bold pt-4 text-dark">{data.name}</p>
      </Nav.Link>
    </>
  );
};
export default DoctorCard;
