import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";
import IconClickable from "../../../../../../../components/others/Icon/IconClickable.tsx";
import EditIcon2 from "../../../../../../../components/svg/EditIcon2.tsx";
import DeleteIcon from "../../../../../../../components/svg/DeleteIcon.tsx";
import FileDataCard from "../../../../../../../components/others/FileDataCard/FileDataCard.tsx";
import type {SetStateType} from "../../../../../../../types/SetStateType.ts";
import type {AdminHighRiskIndividualsDocListRenderStateType} from "./index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "./index.constances.ts";


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
        <div
          key={document.id}
          className='rounded-lg bg-gray-100 p-2 flex flex-col gap-y-2'
        >
          <div className='flex items-center justify-between gap-x-4'>
            <p>
              {document.fileType?.name}
            </p>

            <div className='flex items-center gap-x-2'>
              <IconClickable
                hoverClass='hover:bg-white'
                onClick={() => setRenderState({
                  data: document,
                  state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT
                })}
              >
                <EditIcon2/>
              </IconClickable>

              <IconClickable
                hoverClass='hover:bg-red-100'
                onClick={() => setRenderState({
                  data: document,
                  state: ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE
                })}
              >
                <DeleteIcon/>
              </IconClickable>
            </div>
          </div>

          <p className='text-sm text-gray-500'>
            {document.description}
          </p>

          <FileDataCard
            fileData={document.fileData}
          />
        </div>
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent;
