import React from "react";
import ReactDOM from "react-dom";

//components
import ModalDialog from "./ModalDialog";

//hooks
import useModalDialog from "../useModalDialog";

const ButtonWithDialog = () => {
  const { isOpen, handleModal } = useModalDialog();
  const modalId = document.getElementById("modal-root");
  return (
    <>
      <button type="button" onClick={() => handleModal()}>
        Show Modal
      </button>
      {isOpen && (
        <>
          {ReactDOM.createPortal(
            <>
              <ModalDialog onClose={() => handleModal()} />
            </>,
            modalId as HTMLElement
          )}
        </>
      )}
    </>
  );
};

export default ButtonWithDialog;
