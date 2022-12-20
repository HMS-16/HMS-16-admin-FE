import { React, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getAppointment } from "../../store/features/appointment/appointmentSlice";
import { useDispatch, useSelector } from "react-redux";
import "./DataAppointment.css";
// import { Link } from "react-router-dom";

const DataAppointment = () => {
  const { data: appointment } = useSelector((state) => state.appointments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);

  return (
    <div>
      <Table className="table-appointments">
        <thead style={{ backgroundColor: "#D0E0F7" }}>
          <tr>
            <th>Date</th>
            <th>Shift</th>
            <th>No.Medical Record</th>
            <th>Name</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((appointments) => (
            <tr key={appointments.id}>
              <td>{appointments.date}</td>
              <td>{appointments.shift}</td>
              <td>{appointments.patient_id}</td>
              <td>{appointments.name}</td>
              <td>{appointments.doctor}</td>
              <td>
                <div className="flex justify-center">
                  {appointments.status_string === "Process" ? (
                    <p
                      style={{
                        backgroundColor: "#E3ECFA",
                        borderRadius: "10px",
                        color: "#0E4597",
                      }}
                    >
                      {appointments.status_string}
                    </p>
                  ) : (
                    <p
                      style={{
                        backgroundColor: "#B8DDB4",
                        color: "#228018",
                        borderRadius: "10px",
                      }}
                    >
                      {appointments.status}
                    </p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataAppointment;
