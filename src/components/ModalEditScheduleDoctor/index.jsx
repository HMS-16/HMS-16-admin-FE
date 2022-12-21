import React, { useState } from "react";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import { mergeData, extractUniqueUsers } from "../../utils";
import { EditDropdown } from "./EditDropdown";
import { EditTable } from "./EditTable";

const ModalEditScheduleDoctor = (props) => {
  const { doctor, schedule } = props;
  const mergedData = mergeData(doctor, schedule);
  const users = extractUniqueUsers(mergedData);

  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Schedule Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm="6" className="pb-4">
              <p className="fs-5">Doctor</p>
              <EditDropdown users={users} onChange={setSelectedUser} />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <p className="fs-5">Schedule</p>
              <EditTable list={mergedData} selectedUser={selectedUser} onHide={props.onHide} />
            </Col>
          </Row>
          <Stack direction="horizontal" className="d-flex mt-3 justify-content-center">
            <Button variant="blue" onClick={props.onHide}>
              Save Changes
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditScheduleDoctor;
