import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";
import type {SetStateType} from "../../../../../../../types/SetStateType.ts";
import type {AdminHighRiskIndividualsDocListRenderStateType} from "./index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "./index.constances.ts";
import AdminHighRiskIndividualsDocumentCard from "./AdminHighRiskIndividualsDocumentCard.tsx";


type Props = {
  documentsList: AdminHighRiskIndividualsLettersDetailDocumentType[];
  setRenderState: SetStateType<AdminHighRiskIndividualsDocListRenderStateType | undefined>;
}

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent(
  {documentsList, setRenderState}: Props
) {
  return (
    <div className='flex flex-col gap-y-4'>
      {documentsList.map((document) => (
        <AdminHighRiskIndividualsDocumentCard
          key={document.id}
          document={document}
          editAction={() => setRenderState({
            data: document,
            state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT
          })}
          deleteAction={() => setRenderState({
            data: document,
            state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE
          })}
        />
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent;
