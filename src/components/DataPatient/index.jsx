import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { BsEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./DataPatient.css";

const DataPatient = () => {
  const navigate = useNavigate();
  const editPatient = () => {
    navigate(`/edit/data/patient`);
  };

  const rows = [
    {
      date: "21/01/2022",
      id: "1",
      medicalNumber: "ABC1234567",
      name: "Sally",
      age: "21",
      gender: "Female",
      status: "Process",
    },
    {
      date: "21/01/2022",
      id: "2",
      medicalNumber: "ABC1234567",
      name: "Giselle",
      age: "21",
      gender: "Female",
      status: "Done",
    },
    {
      date: "21/01/2022",
      id: "3",
      medicalNumber: "ABC1234567",
      name: "Wendy",
      age: "22",
      gender: "Female",
      status: "Process",
    },
    {
      date: "21/01/2022",
      id: "4",
      medicalNumber: "ABC1234567",
      name: "Bryan",
      age: "19",
      gender: "Male",
      status: "Done",
    },
    {
      date: "21/01/2022",
      id: "5",
      medicalNumber: "ABC1234567",
      name: "Nicole",
      age: "18",
      gender: "Male",
      status: "Process",
    },
    {
      date: "21/01/2022",
      id: "6",
      medicalNumber: "ABC1234567",
      name: "Jude",
      age: "22",
      gender: "Female",
      status: "Done",
    },
    {
      date: "21/01/2022",
      id: "7",
      medicalNumber: "ABC1234567",
      name: "Zeph",
      age: "15",
      gender: "Male",
      status: "Process",
    },
  ];

  const columns = [
    {
      headerName: "Date",
      field: "date",
      width: 170,
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
      headerName: "Age",
      field: "age",
      width: 170,
    },
    {
      headerName: "Gender",
      field: "gender",
      width: 150,
    },
    {
      headerName: "Status",
      field: "status",
      width: 170,
      type: "singleSelect",
    },
    {
      headerName: "Action",
      field: "action",
      width: 150,
      renderCell: () => {
        return (
          <>
            <BsEyeFill
              className="nav-link"
              style={{
                color: "#424952",
              }}
            />
            <MdEdit
              onClick={editPatient}
              className="nav-link"
              style={{
                color: "#0E4597",
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <Box className="box">
          <DataGrid rowHeight={40} columns={columns} rows={rows} />
        </Box>
      </div>
    </>
  );
};

export default DataPatient;
