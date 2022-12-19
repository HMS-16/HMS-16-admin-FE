import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDoctor } from "../../store/features/doctor/doctorsSlice";

const ModalDeleteDoctor = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (str_num) => {
    console.log(str_num);
    dispatch(deleteDoctor(str_num));
    navigate("/");
  };

  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5 mt-5 text-center">Are you sure want to delete this profile?</p>
          <Stack direction="horizontal" gap={5} className="d-flex mt-5 justify-content-center">
            <Button
              variant="danger"
              onClick={() => {
                handleDelete(props.str_num);
              }}
            >
              Delete
            </Button>
            <Button onClick={props.onHide}>Cancel</Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDeleteDoctor;
