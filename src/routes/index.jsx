import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageDoctor from "../pages/ManageDoctor";
import ManageNurse from "../pages/ManageNurse";
import ManagePatient from "../pages/ManagePatient";
import Appointment from "../pages/Appointment";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dasboard/Dashboard";
import EditAdmin from "../pages/EditAdmin/EditAdmin";

const Routers = () => {
  const [isFalse, setFalse] = useState(false)
    const Toggle = () => {
        setFalse(!isFalse)
        localStorage.setItem('condition', isFalse)
    }
  return (
    <BrowserRouter>
      <Sidebar Toggle={Toggle} isFalse={isFalse}/>
        <div className="position-absolute" style={{width: `calc(100% - ${isFalse ? "265px" : '80px'})`, paddingLeft:`${isFalse ? '265px':'80px'}`, marginRight:`${isFalse ? '60px': '55px' }`, transitionDuration: '0.5s'}}>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patient" element={<ManagePatient />} />
            <Route path="/doctor" element={<ManageDoctor />} />
            <Route path="/nurse" element={<ManageNurse />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/editadmin" element={<EditAdmin />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default Routers;
