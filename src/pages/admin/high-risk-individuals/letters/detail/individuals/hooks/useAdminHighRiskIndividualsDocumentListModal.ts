import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {DocumentModalState} from "../index.types.ts";

function useAdminHighRiskIndividualsDocumentListModal() {

  const {
    open: docListModalOpen, shouldBeRemoved: docListModalShouldBeRemoved, closeModal: closeDocListModalHandler,
    modalState: docListModalState, setModalState: setDocListModalState
  } = useModalOpen<DocumentModalState | boolean>(false)

  return {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  }
}

export default useAdminHighRiskIndividualsDocumentListModal;
