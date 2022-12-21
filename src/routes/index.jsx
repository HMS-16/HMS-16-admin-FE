import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDoctor from "../pages/AddDoctor";
import Appointment from "../pages/Appointment";
import Dasboard from "../pages/Dasboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import DoctorDetail from "../pages/DoctorDetail";
import EditDoctor from "../pages/EditDoctor";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import ManagePatient from "../pages/ManagePatient";
import NoPage from "../pages/NoPage";
import NurseDashboard from "../pages/NurseDashboard";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import EditAdmin from "../pages/EditAdmin";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dasboard />} />
          <Route path="editadmin" element={<EditAdmin/>}/>
          <Route path="patient" element={<ManagePatient />} />
          <Route path="doctor">
            <Route index element={<DoctorDashboard />} />
            <Route path=":str_num">
              <Route index element={<DoctorDetail />} />
              <Route path="edit" element={<EditDoctor />} />
            </Route>
            <Route path="add" element={<AddDoctor />} />
          </Route>
          <Route path="nurse" element={<NurseDashboard />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
