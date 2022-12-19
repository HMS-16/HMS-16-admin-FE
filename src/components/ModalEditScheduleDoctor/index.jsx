import React from "react";
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const ModalEditScheduleDoctor = (props) => {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Schedule Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm="5">
                <Form.Group className="mb-3" controlId="formDoctorName">
                  <Form.Label>Doctor</Form.Label>
                  <Form.Select required>
                    <option>Select Doctor</option>
                    <option value="1">Dr. One</option>
                    <option value="2">Dr. Two</option>
                    <option value="3">Dr. Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="5">
                <Form.Group className="mb-3" controlId="formScheduleDay">
                  <Form.Label>Day</Form.Label>
                  <Form.Control type="text" value="Monday" readOnly />
                </Form.Group>
              </Col>
              <Col sm="5">
                <Form.Group className="mb-3" controlId="formScheduleShift">
                  <Form.Label>Shift</Form.Label>
                  <Form.Control type="text" value="13.00 - 16.00" readOnly />
                </Form.Group>
              </Col>
              <Col sm="2" className="d-flex pt-3 align-items-center justify-content-center">
                <Button variant="outline-danger" size="md">
                  <MdDelete /> Delete
                </Button>
              </Col>
            </Row>
            <Stack direction="horizontal" gap={3} className="d-flex mt-3 justify-content-end">
              <Button variant="blue" type="submit">
                Save Changes
              </Button>
              <Button variant="outBlue" onClick={props.onHide}>
                Cancel
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditScheduleDoctor;
