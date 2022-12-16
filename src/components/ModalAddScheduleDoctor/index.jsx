import React from "react";
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";

const ModalAddScheduleDoctor = (props) => {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Create Schedule Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm="6">
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
              <Col>
                <Form.Group className="mb-3" controlId="formScheduleDay">
                  <Form.Label>Day</Form.Label>
                  <Form.Select required>
                    <option>Select Day</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                    <option value="7">Sunday</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formScheduleShift">
                  <Form.Label>Shift</Form.Label>
                  <Form.Select required>
                    <option>Select Shift</option>
                    <option value="1">09.00 - 12.00</option>
                    <option value="2">13.00 - 16.00</option>
                    <option value="3">18.00 - 21.00</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Stack direction="horizontal" gap={3} className="d-flex mt-3 justify-content-end">
              <Button variant="blue" type="submit">
                Submit
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

export default ModalAddScheduleDoctor;
