import React from "react";
import { Image } from "react-bootstrap";
import DevelopmentImg from "../../assets/images/development.png";

const NurseDashboard = () => {
  return (
    <>
      <div className="mt-5 pt-5">
        <Image src={DevelopmentImg} width="719px" height="469px" />
        <p className="fs-1 fw-bold" style={{ color: "#1153B5" }}>
          This feature is under construction
        </p>
        <p className="fs-3 fw-bold">We're working on it</p>
      </div>
    </>
  );
};

export default NurseDashboard;
