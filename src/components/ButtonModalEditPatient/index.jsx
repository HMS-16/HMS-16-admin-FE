import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ButtonModalEditPatient.css";
import vector from "../../assets/images/Modal-Icons-Edit-Data.png";

const ButtonModalEditPatient = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="modal-frame"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img className="vector-modal-edit" src={vector} alt="modal-image" />
        </Modal.Body>

        <Modal.Footer>
          <div className="container-modal-edit-patient">
            <Button
              className="button-modal-edit-yes-patient"
              onClick={props.onHide}
            >
              Yes
            </Button>
            <Button
              className="button-modal-edit-no-patient"
              onClick={props.onHide}
            >
              No
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="button-save-form" onClick={() => setModalShow(true)}>
        Save
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ButtonModalEditPatient;
