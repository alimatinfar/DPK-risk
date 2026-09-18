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
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocumentsModals()

  return {
    documents, timeLineHistories,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
