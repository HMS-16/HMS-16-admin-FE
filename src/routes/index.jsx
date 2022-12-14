import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageDoctor from "../pages/ManageDoctor";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import Sidebar from "../components/Sidebar";
import LandingPage from "../pages/LandingPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient" element={<ManagePatient />} />
        <Route path="/doctor" element={<ManageDoctor />} />
        <Route path="/nurse" element={<ManageNurse />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      {/* <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default Routers;
