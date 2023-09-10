import React from "react";
// import ReactDOM from "react-dom";

// components
import BunchOfStuff from "./components/BunchOfStuff";
import OtherStuffComplicated from "./components/OtherStuffAlsoComplicated";
import VerySlowComponent from "./components/VerySlowComponent";
import ButtonWithDialog from "./components/ButtonWithDialog";
// import ModalDialog from "./components/ModalDialog";

//hooks
// import useModalDialog from "./useModalDialog";

import "./style.css";

interface Props {
  title: string;
}

const IntroToRerenders = ({ title }: Props) => {
  React.useEffect(() => {
    console.log("Number of rerenders");
  });
  return (
    <>
      <header>
        <h1>{title}</h1>
        {/* Performance issue */}
        {/* <button type="button" onClick={() => handleModal()}>
          Show Modal
        </button>
        {isOpen &&
          ReactDOM.createPortal(
            <ModalDialog onClose={handleModal} />,
            modalId as HTMLElement
          )} */}
        {/* Solving the issue of the rerenders by creating a separate comp */}
        <ButtonWithDialog />
        <div className="layout">
          <VerySlowComponent />
          <BunchOfStuff />
          <OtherStuffComplicated />
        </div>
      </header>
    </>
  );
};

export default IntroToRerenders;
