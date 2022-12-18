import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import ManageNurse from "../pages/ManageNurse";
import PatientDashboard from "../pages/PatientDashboard/index";
import AddPatient from "../pages/AddPatient";
import EditDataPatient from "../pages/EditDataPatient";
import ChangeAppointment from "../pages/ChangeAppointment";
import PatientDetail from "../pages/PatientDetail";
import AppointmentDashboard from "../pages/AppointmentDashboard";
import PatientHistoryCondition from "../components/PatientHistoryCondition";
import CreateAppointment from "../pages/CreateAppointment";
import DoctorDetail from "../pages/DoctorDetail";
import PrivateRoute from "./PrivateRoute";
import AddDoctor from "../pages/AddDoctor";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";

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
            <Route path=":str_num" element={<DoctorDetail />} />
            <Route path="add" element={<AddDoctor />} />
          </Route>

          <Route path="nurse" element={<ManageNurse />} />

          <Route path="appointment">
            <Route index element={<AppointmentDashboard />} />
            <Route path="change" element={<ChangeAppointment />} />
            <Route path="create" element={<CreateAppointment />} />
          </Route>

        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
