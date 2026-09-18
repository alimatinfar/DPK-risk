import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";

function useAdminHighRiskIndividualsLettersDetailDocumentsModals() {

  const {
    open: deleteModalOpen, shouldBeRemoved: deleteModalShouldBeRemoved, closeModal: closeDeleteModalHandler,
    modalState: deleteModalState, setModalState: setDeleteModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | false>(false)

  const {
    open: documentFormModalOpen, shouldBeRemoved: documentFormModalShouldBeRemoved, closeModal: closeDocumentFormModalHandler,
    modalState: documentFormModalState, setModalState: setDocumentFormModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | boolean>(false)

  return {
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsModals;
