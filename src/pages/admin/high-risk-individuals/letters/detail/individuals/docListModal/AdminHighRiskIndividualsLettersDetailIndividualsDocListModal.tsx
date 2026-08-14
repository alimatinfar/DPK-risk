import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";
import {fileTypeFieldOptions} from "../../../../FormFields/FileTypeField/index.constances.ts";
import IconClickable from "../../../../../../../components/others/Icon/IconClickable.tsx";
import EditIcon2 from "../../../../../../../components/svg/EditIcon2.tsx";
import DeleteIcon from "../../../../../../../components/svg/DeleteIcon.tsx";
import FileDataCard from "../../../../../../../components/others/FileDataCard/FileDataCard.tsx";
import type {AdminHighRiskIndividualsLettersDetailIndividualsDataItemType} from "../index.types.ts";


type Props = {
  modalState: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType['id'] | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModal(
  {
    modalState, onClose, open
  }: Props
) {

  const documentsList: AdminHighRiskIndividualsLettersDetailDocumentType[] = [
    {
      id: 1,
      fileType: fileTypeFieldOptions[0],
      description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
      fileData: undefined
    },
    {
      id: 2,
      fileType: fileTypeFieldOptions[0],
      description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
      fileData: undefined
    },
  ]

  return (
    <Modal
      open={open} onClose={onClose} title='لیست مستندات'
    >
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
                  onClick={() => console.log('edit action')}
                >
                  <EditIcon2/>
                </IconClickable>

                <IconClickable
                  hoverClass='hover:bg-red-100'
                  onClick={() => console.log('delete action')}
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
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModal;
