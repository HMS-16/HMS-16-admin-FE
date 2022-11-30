import React from "react";
import { Image } from "react-bootstrap";

const DoctorCard = ({ data }) => {
  return (
    <>
      <Image src={data.image} roundedCircle style={{ width: "200px" }} onClick={() => console.log("click")}></Image>
      <p className="fs-5 fw-bold pt-4">{data.name}</p>
    </>
  );
};
export default DoctorCard;
