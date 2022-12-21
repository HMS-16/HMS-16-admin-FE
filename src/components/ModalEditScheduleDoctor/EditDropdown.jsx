import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditDropdown({ users, onChange }) {
  const [selectedUser, setSelectedUser] = useState("");

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Form.Select value={selectedUser} onChange={handleChange}>
      <option value={""}>Select Doctor</option>
      {users.map((user, index) => (
        <option value={user} key={index}>
          {user}
        </option>
      ))}
    </Form.Select>
  );
}
