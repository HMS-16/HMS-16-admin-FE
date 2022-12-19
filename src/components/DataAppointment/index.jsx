import { React } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "./DataAppointment.css";

const DataAppointment = () => {
  const rows = [
    {
      id: "1",
      date: "08/11/2022",
      shift: "09.00 - 09.30",
      medicalNumber: "ABCD12345",
      name: "Sally",
      doctor: "Dr Abed",
      status: "In Session",
    },
    {
      id: "2",
      date: "08/11/2022",
      shift: "09.00 - 09.30",
      medicalNumber: "ABCD12346",
      name: "Wendy",
      doctor: "Dr Abed",
      status: "Waiting",
    },
    {
      id: "3",
      date: "08/11/2022",
      shift: "09.00 - 09.30",
      medicalNumber: "ABCD12347",
      name: "Nicole",
      doctor: "Dr Abed",
      status: "Done",
    },
    {
      id: "4",
      date: "08/11/2022",
      shift: "09.00 - 09.30",
      medicalNumber: "ABCD12348",
      name: "Giselle",
      doctor: "Dr Abed",
      status: "Waiting",
    },
    {
      id: "5",
      date: "08/11/2022",
      shift: "09.00 - 09.30",
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
      width: 120,
    },
    {
      headerName: "Shift",
      field: "shift",
      width: 150,
    },
    {
      headerName: "No.Medical Record",
      field: "medicalNumber",
      width: 170,
    },
    {
      headerName: "Name",
      field: "name",
      width: 170,
    },
    {
      headerName: "Doctor",
      field: "doctor",
      width: 170,
    },
    {
      headerName: "Status",
      field: "status",
      width: 120,
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
