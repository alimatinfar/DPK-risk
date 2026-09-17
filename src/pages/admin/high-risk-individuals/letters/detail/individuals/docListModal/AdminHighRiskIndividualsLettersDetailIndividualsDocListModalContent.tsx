import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";
import type {SetStateType} from "../../../../../../../types/SetStateType.ts";
import type {AdminHighRiskIndividualsDocListRenderStateType} from "./index.types.ts";
import AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentCard
  from "./AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentCard.tsx";


export type AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentProps = {
  documentsList: AdminHighRiskIndividualsLettersDetailDocumentType[];
  setRenderState: SetStateType<AdminHighRiskIndividualsDocListRenderStateType | undefined>;
}

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent(
  {documentsList, setRenderState}: AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentProps
) {
  return (
    <div className='flex flex-col gap-y-4'>
      {documentsList.map((document) => (
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContentCard
          document={document} setRenderState={setRenderState}
        />
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent;
