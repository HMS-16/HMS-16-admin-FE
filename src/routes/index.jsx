import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import Sidebar from "../components/Sidebar";
import DoctorDetail from "../pages/DoctorDetail";

const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<ManagePatient />} />
          <Route path="doctor">
            <Route index element={<DoctorDashboard />} />
            <Route path=":id" element={<DoctorDetail />} />
          </Route>
          <Route path="nurse" element={<ManageNurse />} />
          <Route path="appointment" element={<Appointment />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Routers;
