import React from "react";
import "./Style.css";
import ChartDasboard from '../../components/Molecules/Chart/ChartDasboard'
import TotalDasboard from '../../components/Molecules/TotalDasboard/TotalDasboard'
import TableDasboard from '../../components/Molecules/Table/TableDasboard'

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
