import useAdminHighRiskIndividualsLettersDetailDocumentsDescription
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDescription.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDocs.ts";

function useAdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    descriptionItems
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDescription()

  const {
    documents
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocs()

  return {
    descriptionItems, documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
