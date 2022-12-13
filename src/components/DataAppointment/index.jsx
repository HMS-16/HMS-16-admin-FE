import { React } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "./DataAppointment.css";

const DataAppointment = () => {
  const rows = [
    {
      date: "08/11/2022",
      time: "09.00 - 09.30",
      id: "U-12345",
      medicalNumber: "ABCD12345",
      name: "Sally",
      doctor: "Dr Abed",
      status: "In Session",
    },
    {
      date: "08/11/2022",
      time: "09.00 - 09.30",
      id: "U-12346",
      medicalNumber: "ABCD12346",
      name: "Wendy",
      doctor: "Dr Abed",
      status: "Waiting",
    },
    {
      date: "08/11/2022",
      time: "09.00 - 09.30",
      id: "U-12347",
      medicalNumber: "ABCD12347",
      name: "Nicole",
      doctor: "Dr Abed",
      status: "Done",
    },
    {
      date: "08/11/2022",
      time: "09.00 - 09.30",
      id: "U-12348",
      medicalNumber: "ABCD12348",
      name: "Giselle",
      doctor: "Dr Abed",
      status: "Waiting",
    },
    {
      date: "08/11/2022",
      time: "09.00 - 09.30",
      id: "U-12349",
      medicalNumber: "ABCD12349",
      name: "Jude",
      doctor: "Dr Abed",
      status: "Done",
    },
  ];

  const columns = [
    {
      headerName: "Date",
      field: "date",
      width: 150,
    },
    {
      headerName: "Time",
      field: "time",
      width: 170,
    },
    {
      headerName: "ID",
      field: "id",
      width: 120,
    },
    {
      headerName: "No.Medical Record",
      field: "medicalNumber",
      width: 170,
    },
    {
      headerName: "Name",
      field: "name",
      width: 250,
    },
    {
      headerName: "Doctor",
      field: "doctor",
      width: 200,
    },
    {
      headerName: "Status",
      field: "status",
      width: 170,
    },
  ];

  return (
    <div>
      <div className="dataAppointment">
        <Box className="box-appointment">
          <p className="today-appointment" style={{ display: "flex" }}>
            Today's Appointment
          </p>
          <DataGrid rowHeight={40} columns={columns} rows={rows} />
        </Box>
      </div>
    </div>
  );
};

export default DataAppointment;
