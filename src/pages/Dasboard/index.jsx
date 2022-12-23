import React from "react";
import "./Style.css";
import DataPatient from "../../components/DataPatient/index";
import ChartDasboard from "../../components/Molecules/Chart/ChartDasboard";
import TotalDasboard from "../../components/Molecules/TotalDasboard/TotalDasboard";

const Dashboard = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
      {/* <Navbar name="Dashboard" link={"/editadmin"} /> */}
      <TotalDasboard />
      <ChartDasboard />
      <p className="latest-patient-title">Latest Patient</p>
      <DataPatient />
    </div>
  );
};

export default Dashboard;
