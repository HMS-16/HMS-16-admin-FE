import React from "react";
import { Container, Table } from "react-bootstrap";
import { joinResponse } from "../../utils";

const DoctorTable = (props) => {
  const { doctor, schedule } = props;
  const arr = joinResponse(doctor, schedule);

  const generateTime = (index) => {
    if (index === 0) {
      return <td>09.00 - 12.00</td>;
    } else if (index === 1) {
      return <td>13.00 - 16.00</td>;
    } else if (index === 2) {
      return <td>18.00 - 21.00</td>;
    }
  };

  return (
    <>
      <Container>
        <Table hover className="mb-0">
          <thead>
            <tr>
              <th>Shift</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((item, index) => (
              <tr key={index}>
                {generateTime(index)}
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DoctorTable;
