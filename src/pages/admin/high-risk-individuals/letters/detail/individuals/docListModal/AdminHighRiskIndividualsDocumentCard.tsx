import IconClickable from "../../../../../../../components/others/Icon/IconClickable.tsx";
import DeleteIcon from "../../../../../../../components/svg/DeleteIcon.tsx";
import EditIcon2 from "../../../../../../../components/svg/EditIcon2.tsx";
import FileDataCard, {
  type FileDataCardProps
} from "../../../../../../../components/others/FileDataCard/FileDataCard.tsx";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import {fileTypeFieldName} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";


type Props = {
  document: AdminHighRiskIndividualsDocumentFormDataType;
  editAction?: () => void;
  deleteAction?: () => void;
} & Pick<FileDataCardProps, 'downloadFileHandler' | 'downloadFileLoading'>

function AdminHighRiskIndividualsDocumentCard(
  {
    document, editAction, deleteAction, downloadFileHandler, downloadFileLoading
  }: Props
) {
  return (
    <div
      className='rounded-lg bg-slate-100 p-2 flex flex-col gap-y-2'
    >
      <div className='flex items-center justify-between gap-x-4'>
        <p>
          {document?.[fileTypeFieldName] ? document?.[fileTypeFieldName]?.name : ''}
        </p>

        {(editAction || deleteAction) && (
          <div className='flex items-center gap-x-2'>
            {editAction && (
              <IconClickable
                hoverClass='hover:bg-white'
                onClick={editAction}
              >
                <EditIcon2/>
              </IconClickable>
            )}

            {deleteAction && (
              <IconClickable
                hoverClass='hover:bg-red-100'
                onClick={deleteAction}
              >
                <DeleteIcon/>
              </IconClickable>
            )}
          </div>
        )}
      </div>

      <p className='text-sm text-slate-500'>
        {document?.[descriptionFieldName]}
      </p>

      <div className='mt-auto'>
        <FileDataCard
          fileData={document?.[uploadFileFieldName]}
          downloadFileHandler={downloadFileHandler}
          downloadFileLoading={downloadFileLoading}
        />
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsDocumentCard;
