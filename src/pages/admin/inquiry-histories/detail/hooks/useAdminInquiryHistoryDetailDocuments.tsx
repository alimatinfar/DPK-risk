import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import useModalOpenBoolean from "../../../../../hooks/modal/useModalOpenBoolean.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsModals
  from "../../../high-risk-individuals/letters/detail/documents/hooks/useAdminHighRiskIndividualsLettersDetailDocumentsModals.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "../../../high-risk-individuals/letters/detail/documents/hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDocs.ts";


function useAdminInquiryHistoryDetailDocuments(
  {
    responseData
  }: Pick<AdminInquiryHistoryLetterDetailProps, 'responseData'>
) {

  const {
    shouldBeRemoved: editModalShouldBeRemoved, open: editModalOpen,
    openModalHandler: openEditModalModalHandler, closeModalHandler: closeEditModalModalHandler
  } = useModalOpenBoolean(false)

  const {
    documents
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocs({
    documentsResponse: responseData?.data?.letter?.documents
  })

  const {
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocumentsModals()

  return {
    documents, editModalShouldBeRemoved, editModalOpen, openEditModalModalHandler, closeEditModalModalHandler,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  }
}

export default useAdminInquiryHistoryDetailDocuments;
