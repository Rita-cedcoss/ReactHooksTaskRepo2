import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, updatedState }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Form Detail</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <table>
              <tr>
                <td>Title</td>
                <td>{updatedState.title}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{updatedState.Description}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{updatedState.Time}</td>
              </tr>
              <tr>
                <td>Amazone Parent SKU</td>
                <td>{updatedState.SKU}</td>
              </tr>
              <tr>
                <td>Barcode</td>
                <td>{updatedState.Barcode}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{updatedState.Category}</td>
              </tr>
              <tr>
                <td>Image Selection</td>
                <td>{updatedState.imgSel}</td>
              </tr>
            </table>
          </div>
          <div className={styles.modalActions}></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
