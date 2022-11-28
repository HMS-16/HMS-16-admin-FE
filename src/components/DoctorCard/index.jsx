import React from "react";
import { Image } from "react-bootstrap";

const DoctorCard = (props) => {
  const { imgSrc, name } = props.data;
  return (
    <>
      <Image src={imgSrc} roundedCircle style={{ width: "200px" }} onClick={() => console.log("click")}></Image>
      <p className="fs-5 fw-bold pt-4">{name}</p>
    </>
  );
};
export default DoctorCard;
