import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageDoctor from "../pages/ManageDoctor";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";

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
          <Route path="doctor" element={<ManageDoctor />} />
          <Route path="nurse" element={<ManageNurse />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default Routers;
