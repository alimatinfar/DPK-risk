import useModalOpen from "../../../../../../../../hooks/modal/useModalOpen.tsx";
import type {ModalStateTypeId} from "../../index.types.ts";

function useAdminHighRiskIndividualsDocumentListModalStates() {

  const {
    open: docListModalOpen, shouldBeRemoved: docListModalShouldBeRemoved, closeModal: closeDocListModalHandler,
    modalState: docListModalState, setModalState: setDocListModalState
  } = useModalOpen<ModalStateTypeId | boolean>(false)

  return {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  }
}

export default useAdminHighRiskIndividualsDocumentListModalStates;
