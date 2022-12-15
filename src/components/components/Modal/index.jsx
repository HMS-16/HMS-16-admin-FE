import React from "react";
import style from "./modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ handleModal, showModal }) => {
  //   const handleEmail = (e) => {
  //     e.preventDefault(), handleModal, (window.location = "mailto:rio.rasyid23@gmail.com");
  //   };
  if (!showModal) {
    return null;
  }
  return (
    <div>
      <div className={style.modalBox}>
        <div className={style.modalFrame}>
          <div className={style.modalImg}></div>
          <h4>Did You Forget Your Password ?</h4>
          <p>Please contact your super admin</p>
          <Link onClick={handleModal}>Send Email</Link>
        </div>
      </div>
    </div>
  );
};
export default Modal;
