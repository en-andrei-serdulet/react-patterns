import React from "react";
import useResizeDetector from "./hooks/useResizeDetector";

const useModalDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  useResizeDetector();

  const handleModal = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleModal,
  };
};

export default useModalDialog;
