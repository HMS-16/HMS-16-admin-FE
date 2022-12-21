import React from "react";
import { Button, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteDoctorSchedule } from "../../store/features/doctor/doctorsSlice";

export function EditTable({ list, selectedUser, onHide }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteDoctorSchedule(id));
    onHide();
  };

  const generateFunctionTable = () => {
    const arr = [];
    list.forEach((user) => {
      if (user.name === selectedUser) {
        user.session.forEach((session, index) => {
          arr.push(
            <tr key={index}>
              <td>{session.day}</td>
              <td>{session.time}</td>
              <td>
                <Button variant="outline-danger" onClick={() => handleDelete(session.id)}>
                  <MdDelete /> Delete
                </Button>
              </td>
            </tr>
          );
        });
      }
    });
    return arr;
  };
  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{generateFunctionTable()}</tbody>
    </Table>
  );
}
