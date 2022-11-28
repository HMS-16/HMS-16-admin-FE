import React from "react";
import { Container, Table } from "react-bootstrap";

const DoctorTable = () => {
  return (
    <>
      <Container>
        <Table hover className="mb-0">
          <thead>
            <tr>
              <th>Time</th>
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
            <tr>
              <td>09.00 - 12.00</td>
              <td>Dr. Abed</td>
              <td>Dr. Abed</td>
              <td>Dr. Abed</td>
              <td>Dr. Putri</td>
              <td>Dr. Putri</td>
              <td>Dr. Putri</td>
              <td>Dr. Putri</td>
            </tr>
            <tr>
              <td>13.00 - 16.00</td>
              <td>Dr. Tasya</td>
              <td>Dr. Tasya</td>
              <td>Dr. Tasya</td>
              <td>Dr. Nurul</td>
              <td>Dr. Nurul</td>
              <td>Dr. Nurul</td>
              <td>Dr. Nurul</td>
            </tr>
            <tr>
              <td>18.00 - 21.00</td>
              <td>Dr. Abed</td>
              <td>Dr. Putri</td>
              <td>Dr. Tasya</td>
              <td>Dr. Nurul</td>
              <td>Dr. Abed</td>
              <td>Dr. Putri</td>
              <td>Close</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DoctorTable;
