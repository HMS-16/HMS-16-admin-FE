import { React, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { BsEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { getPatient } from "../../store/features/patient/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import "./DataPatient.css";
import { Link } from "react-router-dom";

const DataPatient = () => {
  const dataPatients = useSelector((state) => state.patients.data);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);

  return (
    <div className="box-data-patient">
      <div style={{ padding: "10px 10px 0px" }}>
        <input
          className="search-patient-name"
          type="text"
          placeholder="Search Patients..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table className="table-patients">
        <thead style={{ backgroundColor: "#D0E0F7" }}>
          <tr>
            <th>Date</th>
            <th>No.Medical Record</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataPatients
            ?.filter((patients) => patients.name.toLowerCase().includes(search))
            .map((patients) => (
              <tr key={patients.id}>
                <td>{patients.date}</td>
                <td>{patients.id}</td>
                <td>{patients.name}</td>
                <td>{patients.age}</td>
                <td>{patients.gender}</td>
                <td>
                  <div className="flex justify-center">
                    {patients.status === "Process" ? (
                      <p
                        style={{
                          backgroundColor: "#E3ECFA",
                          borderRadius: "10px",
                          color: "#0E4597",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {patients.status}
                      </p>
                    ) : (
                      <p
                        style={{
                          backgroundColor: "#B8DDB4",
                          color: "#228018",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {patients.status}
                      </p>
                    )}
                  </div>
                </td>
                <td
                  style={{
                    display: "flex",
                    height: "60px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link to={`detail/${patients.id}`}>
                    <BsEyeFill
                      style={{
                        color: "#424952",
                        marginRight: "10px",
                      }}
                    />
                  </Link>

                  <Link to={`edit/${patients.id}`}>
                    <MdEdit
                      style={{
                        color: "#424952",
                      }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataPatient;
