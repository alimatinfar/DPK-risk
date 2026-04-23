import Modal, {type ModalProps} from "../../Modal.tsx";
import DeleteModalButtons, {type DeleteModalButtonsProps} from "./DeleteModalButtons.tsx";


export type DeleteModalProps = {
  cancelButtonOnClick?: DeleteModalButtonsProps["cancelButtonOnClick"];
} & Omit<DeleteModalButtonsProps, 'cancelButtonOnClick'> & ModalProps

function DeleteModal(
  {
    mainButtonOnClick, cancelButtonOnClick, mainButtonLoading, mainButtonText, cancelButtonText, ...props
  }: DeleteModalProps
) {
  return (
    <Modal {...props}>
      {props.children && props.children}

      <DeleteModalButtons
        cancelButtonOnClick={cancelButtonOnClick || props.onClose} mainButtonOnClick={mainButtonOnClick}
        mainButtonText={mainButtonText} mainButtonLoading={mainButtonLoading} cancelButtonText={cancelButtonText}
      />
    </Modal>
  )
}

export default DeleteModal