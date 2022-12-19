import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDoctor from "../pages/AddDoctor";
import AddPatient from "../pages/AddPatient";
import Appointment from "../pages/Appointment";
import AppointmentDashboard from "../pages/AppointmentDashboard";
import ChangeAppointment from "../pages/ChangeAppointment";
import CreateAppointment from "../pages/CreateAppointment";
import Dashboard from "../pages/Dashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import DoctorDetail from "../pages/DoctorDetail";
import EditDataPatient from "../pages/EditDataPatient";
import EditDoctor from "../pages/EditDoctor";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import ManagePatient from "../pages/ManagePatient";
import NoPage from "../pages/NoPage";
import NurseDashboard from "../pages/NurseDashboard";
import PatientDashboard from "../pages/PatientDashboard/index";
import PatientDetail from "../pages/PatientDetail";
import PatientHistoryCondition from "../components/PatientHistoryCondition";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

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

          <Route path="patient">
            <Route index element={<PatientDashboard />} />
            <Route path="detail" element={<PatientDetail />} />
            <Route path="edit" element={<EditDataPatient />} />
            <Route path="change" element={<ChangeAppointment />} />
            <Route path="create" element={<CreateAppointment />} />
            <Route path="history" element={<PatientHistoryCondition />}/>
            <Route path="add" element={<AddPatient />} />
          </Route>

          <Route path="doctor">
            <Route index element={<DoctorDashboard />} />
            <Route path=":str_num">
              <Route index element={<DoctorDetail />} />
              <Route path="edit" element={<EditDoctor />} />
            </Route>
            <Route path="add" element={<AddDoctor />} />
          </Route>

          <Route path="appointment">
            <Route index element={<AppointmentDashboard />} />
            <Route path="change" element={<ChangeAppointment />} />
            <Route path="create" element={<CreateAppointment />} />
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
