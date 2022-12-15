import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import DoctorDetail from "../pages/DoctorDetail";
import PrivateRoute from "./PrivateRoute";
import AddDoctor from "../pages/AddDoctor";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import EditDoctor from "../pages/EditDoctor";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<ManagePatient />} />
          <Route path="doctor">
            <Route index element={<DoctorDashboard />} />
            <Route path=":str_num" element={<DoctorDetail />} />
            <Route path="add" element={<AddDoctor />} />
            <Route path="edit" element={<EditDoctor />} />
          </Route>
          <Route path="nurse" element={<ManageNurse />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
