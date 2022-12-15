import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { BsEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DataPatient.css";

const DataPatient = () => {
  const navigate = useNavigate();
  const editPatient = () => {
    navigate(`/edit/data/patient`);
  };

  const patientDetail = () => {
    navigate(`/patient/detail`);
  };

  const client = axios.create({
    baseURL: "https://hms-api.fly.dev/v1/patients",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzEwODA4OTAsImlhdCI6MTY3MTAzNzY5MCwiaWQiOiJlOTI0MjgxNy1kMTdmLTRkN2UtOTIxNC1iMzk2YzAwNzVmOGEiLCJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluQGhtcy5jb20ifQ.qT_NUEEBPel-Uc5UDs0fP3LpXeNClX9lmjwWLlSAAgY"}`,
    },
  });

  const response = client.get("/patients");
  console.log(response);

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
      width: 170,
    },
    {
      headerName: "Age",
      field: "age",
      width: 100,
    },
    {
      headerName: "Gender",
      field: "gender",
      width: 120,
    },
    {
      headerName: "Status",
      field: "status",
      width: 120,
    },
    {
      headerName: "Action",
      field: "action",
      width: 120,
      renderCell: () => {
        return (
          <>
            <BsEyeFill
              onClick={patientDetail}
              className="nav-link"
              style={{
                color: "#424952",
              }}
            />
            <MdEdit
              onClick={editPatient}
              className="nav-link"
              style={{
                color: "#424952",
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
          <DataGrid
            style={{
              fontSize: "13px",
            }}
            rowHeight={40}
            columns={columns}
            rows={rows}
          />
        </Box>
      </div>
    </>
  );
};

export default DataPatient;
