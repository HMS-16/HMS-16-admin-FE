import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDoctor } from "../../store/features/doctor/doctorsSlice";

const ModalDeleteteDoctor = (props) => {
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
          <p className="fs-4 text-center">Are you sure want to delete this profile?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(props.str_num);
            }}
          >
            Delete
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteteDoctor;
