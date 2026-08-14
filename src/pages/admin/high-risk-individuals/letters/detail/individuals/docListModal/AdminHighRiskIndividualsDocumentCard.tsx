import IconClickable from "../../../../../../../components/others/Icon/IconClickable.tsx";
import DeleteIcon from "../../../../../../../components/svg/DeleteIcon.tsx";
import EditIcon2 from "../../../../../../../components/svg/EditIcon2.tsx";
import FileDataCard from "../../../../../../../components/others/FileDataCard/FileDataCard.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";


type Props = {
  document: AdminHighRiskIndividualsLettersDetailDocumentType;
  editAction?: () => void;
  deleteAction?: () => void;
}

function AdminHighRiskIndividualsDocumentCard(
  {
    document, editAction, deleteAction
  }: Props
) {
  return (
    <div
      key={document.id}
      className='rounded-lg bg-gray-100 p-2 flex flex-col gap-y-2'
    >
      <div className='flex items-center justify-between gap-x-4'>
        <p>
          {document.fileType?.name}
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

      <p className='text-sm text-gray-500'>
        {document.description}
      </p>

      <FileDataCard
        fileData={document.fileData}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsDocumentCard;
