import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageDoctor from "../pages/ManageDoctor";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import Sidebar from "../components/Sidebar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<ManagePatient />} />
          <Route path="/doctor" element={<ManageDoctor />} />
          <Route path="/nurse" element={<ManageNurse />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Routers;
