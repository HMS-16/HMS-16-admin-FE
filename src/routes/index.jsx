import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Doctor from "../pages/Doctor";
import Patient from "../pages/Patient";
import Report from "../pages/Report";
import Sidebar from "../components/Sidebar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Routers;
