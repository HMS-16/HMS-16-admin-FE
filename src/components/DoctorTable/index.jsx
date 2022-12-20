import React from "react";
import { Container, Table } from "react-bootstrap";

const DoctorTable = (props) => {
  const { schedule } = props;

  return (
    <>
      <Container>
        <Table hover className="mb-0">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Day</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.doctor}</td>
                <td>{appointment.day}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DoctorTable;
