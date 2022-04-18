import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import {
  Backdrop,
  Container,
  CloseButton,
  Title,
  ButtonBox,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, onAgree, title, confirmationRequest, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container>
        <CloseButton type="button" onClick={onClose} />
        <Title>{title}</Title>
        {children}
        {confirmationRequest && (
          <ButtonBox>
            <Button type="button" onClick={onAgree}>
              Yes
            </Button>
            <Button type="button" onClick={onClose}>
              No
            </Button>
          </ButtonBox>
        )}
      </Container>
    </Backdrop>,
    modalRoot
  );
};
export default Modal;
