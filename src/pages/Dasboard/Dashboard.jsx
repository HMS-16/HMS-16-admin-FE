import React from "react";
import "./Style.css";
import {
  ChartDasboard,
  TableDasboard,
  TotalDasboard,
} from "../../components/Molecules";
import Navbar from "../../components/Molecules/Navbar/Navbar";

const Dashboard = () => {
  

  return (
    <div className="position-absolute" style={{width:'100%'}} >
      <Navbar name="Dashboard" link={'/editadmin'}/>
      <TotalDasboard />
      <ChartDasboard />
      <TableDasboard />
    </div>
  );
};

export default Dashboard;
