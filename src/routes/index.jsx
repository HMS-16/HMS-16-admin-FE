import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDoctor from "../pages/AddDoctor";
import AddPatient from "../pages/AddPatient";
import AppointmentDashboard from "../pages/AppointmentDashboard";
import ChangeAppointment from "../pages/ChangeAppointment";
import CreateAppointment from "../pages/CreateAppointment";
import Dasboard from "../pages/Dasboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import DoctorDetail from "../pages/DoctorDetail";
import EditDoctor from "../pages/EditDoctor";
import EditPatient from "../pages/EditPatient";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import NurseDashboard from "../pages/NurseDashboard";
import PatientDashboard from "../pages/PatientDashboard";
import PatientDetail from "../pages/PatientDetail";
import PatientHistoryCondition from "../pages/PatientHistoryCondition";
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
          <Route path="editadmin" element={<EditAdmin />} />

          <Route path="patient">
            <Route index element={<PatientDashboard />} />
            <Route path="edit/:id" element={<EditPatient />} />
            <Route
              path="history/condition/:id"
              element={<PatientHistoryCondition />}
            />
            <Route path="detail/:id" element={<PatientDetail />} />
            <Route path="add" element={<AddPatient />} />
          </Route>

          <Route path="appointment">
            <Route index element={<AppointmentDashboard />} />
            <Route path="create" element={<CreateAppointment />} />
            <Route path="change" element={<ChangeAppointment />} />
          </Route>

          <Route path="doctor">
            <Route index element={<DoctorDashboard />} />
            <Route path=":str_num">
              <Route index element={<DoctorDetail />} />
              <Route path="edit" element={<EditDoctor />} />
            </Route>
            <Route path="add" element={<AddDoctor />} />
          </Route>
          <Route path="nurse" element={<NurseDashboard />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
