import useAdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDocs.ts";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";

function useAdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    documents
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocs()

  const {
    open: deleteModalOpen, shouldBeRemoved: deleteModalShouldBeRemoved, closeModal: closeDeleteModalHandler,
    modalState: deleteModalState, setModalState: setDeleteModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | false>(false)

  const {
    open: formModalOpen, shouldBeRemoved: formModalShouldBeRemoved, closeModal: closeFormModalHandler,
    modalState: formModalState, setModalState: setFormModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | boolean>(false)

  return {
    documents,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
