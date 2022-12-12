import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageDoctor from "../pages/ManageDoctor";
import ManageNurse from "../pages/ManageNurse";

import PatientDashboard from "../pages/PatientDashboard/index";
import AddPatient from "../pages/AddPatient";
import EditDataPatient from "../pages/EditDataPatient";
import ChangeAppointment from "../pages/ChangeAppointment";
import PatientDetail from "../pages/PatientDetail";
import EditPatientDetail from "../pages/EditPatientDetail";

import Appointment from "../pages/Appointment";

import Sidebar from "../components/Sidebar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/add/patient" element={<AddPatient />} />
          <Route path="/edit/data/patient" element={<EditDataPatient />} />
          <Route path="/change/appointment" element={<ChangeAppointment />} />
          <Route path="/patient/detail" element={<PatientDetail />} />
          <Route path="/edit/detail/patient" element={<EditPatientDetail />} />

          <Route path="/doctor" element={<ManageDoctor />} />
          <Route path="/nurse" element={<ManageNurse />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Routers;
