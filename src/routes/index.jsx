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
import AppointmentDashboard from "../pages/AppointmentDashboard";
import PatientHistoryCondition from "../components/PatientHistoryCondition";

import Sidebar from "../components/Sidebar";
import CreateAppointment from "../pages/CreateAppointment";

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
          <Route path="/create/appointment" element={<CreateAppointment />} />
          <Route path="/patient/detail" element={<PatientDetail />} />
          <Route
            path="/patient/history/condition"
            element={<PatientHistoryCondition />}
          />
          <Route path="/appointment" element={<AppointmentDashboard />} />
          <Route path="/doctor" element={<ManageDoctor />} />
          <Route path="/nurse" element={<ManageNurse />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Routers;
