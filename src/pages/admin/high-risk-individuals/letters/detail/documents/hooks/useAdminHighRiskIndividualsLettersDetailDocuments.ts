import useAdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDocs.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine.ts";
import type {AdminHighRiskIndividualsLettersDetailPageProps} from "../../index.types.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsModals
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsModals.ts";

function useAdminHighRiskIndividualsLettersDetailDocuments(
  {responseData}: Pick<AdminHighRiskIndividualsLettersDetailPageProps, 'responseData'>
) {

  const {
    documents
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocs({
    documentsResponse: responseData?.data?.letter?.documents
  })

  const {
    timeLineHistories
  } = useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine({
    responseData
  })

  const {
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocumentsModals()

  return {
    documents, timeLineHistories,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
