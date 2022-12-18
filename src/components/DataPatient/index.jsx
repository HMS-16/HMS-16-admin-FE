import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { BsEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./DataPatient.css";
import { getPatient } from "../../store/features/patients/patientsSlice";

const DataPatient = () => {
  const dispatch = useDispatch();
  const { data: patient } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);

  const navigate = useNavigate();
  const editPatient = () => {
    navigate(`edit`);
  };

  const patientDetail = () => {
    navigate(`detail`);
  };

  const columns = [
    {
      headerName: "Date",
      field: "date",
      width: 170,
    },
    {
      headerName: "No.Medical Record",
      field: "id",
      width: 150,
    },
    {
      headerName: "Name",
      field: "name",
      width: 120,
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
      width: 100,
      renderCell: () => {
        return (
          <>
            {/* <NavLink to={`/patient/detail/${APIPatients.id}`}> */}
            <BsEyeFill
              onClick={patientDetail}
              className="nav-link"
              style={{
                color: "#424952",
              }}
            />
            {/* </NavLink> */}

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
            rows={patient}
          />
        </Box>
      </div>
    </>
  );
};

export default DataPatient;
