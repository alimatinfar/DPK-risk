import AdminHighRiskIndividualsDocumentCard from "./AdminHighRiskIndividualsDocumentCard.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentProps
} from "./AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent.tsx";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "./index.constances.ts";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile
  from "../../documents/hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile.ts";


type Props = {
  document: AdminHighRiskIndividualsLettersDetailDocumentType
} & Pick<AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentProps,
  'setRenderState'
>

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentCard(
  {
    setRenderState, document
  }: Props
) {

  const {
    downloadFileHandler, isPending: downloadFileLoading
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile()

  return (
    <AdminHighRiskIndividualsDocumentCard
      key={document.id}
      document={document}
      // editAction={() => setRenderState({
      //   data: document,
      //   state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT
      // })}
      deleteAction={() => setRenderState({
        data: document,
        state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE
      })}
      downloadFileHandler={() => downloadFileHandler(document)}
      downloadFileLoading={downloadFileLoading}
    />
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentCard;
