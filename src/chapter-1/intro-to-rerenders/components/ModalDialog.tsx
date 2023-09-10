interface Props {
  onClose: Function;
}

const ModalDialog = ({ onClose }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1>Yo</h1>
        <button type="button" onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalDialog;
