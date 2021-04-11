import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeKeyDown);
  }

  closeBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  closeKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.closeBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
