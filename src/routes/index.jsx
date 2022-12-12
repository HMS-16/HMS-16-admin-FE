import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import DoctorDetail from "../pages/DoctorDetail";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<ManagePatient />} />
          <Route path="doctor" element={<DoctorDashboard />} />
          <Route path="doctor/:id" element={<DoctorDetail />} />
          <Route path="nurse" element={<ManageNurse />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
