import WhiteAddButton from "../../../../../../components/Form/Button/inheritedButtons/WhiteAddButton.tsx";
import DetailInfoSectionLabelValue
  from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import DeleteIcon from "../../../../../../components/svg/DeleteIcon.tsx";
import DownloadIcon from "../../../../../../components/svg/DownloadIcon.tsx";
import EditIcon from "../../../../../../components/svg/EditIcon.tsx";
import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";
import type {SetStateType} from "../../../../../../types/SetStateType.ts";
import {fileTypeFieldName} from "../../../FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";


type Props = {
  documents: AdminHighRiskIndividualsLettersDetailDocumentType[];
  setDeleteModalState: SetStateType<AdminHighRiskIndividualsLettersDetailDocumentType | false>;
  setFormModalState: SetStateType<AdminHighRiskIndividualsLettersDetailDocumentType | boolean>;
}

function AdminHighRiskIndividualsLettersDetailDocumentsDocs(
  {documents, setDeleteModalState, setFormModalState}: Props
) {
  return (
    <CardWithHeader
      title='مستندات'
      headerEndAdornment={(
        <WhiteAddButton
          onClick={() => setFormModalState(true)}
        >
          افزودن مستند
        </WhiteAddButton>
      )}
    >
      {documents.map((document, index) => (
        <div
          key={document?.id}
          className={`flex flex-col gap-y-4 ${index === 0 ? '' : 'pt-4 mt-4 border-t border-gray-200'}`}
        >
          <div className='flex items-center justify-between'>
            <DetailInfoSectionLabelValue
              label='نوع فایل' value={document?.[fileTypeFieldName] ? document?.[fileTypeFieldName]?.name : ''}
            />

            <div className='flex items-center gap-x-4'>
              <Button
                justIcon variant='default' color='red'
                onClick={() => setDeleteModalState(document)}
              >
                <DeleteIcon textColor='text-red-500'/>
              </Button>

              {/*<Button*/}
              {/*  justIcon variant='default' color='white'*/}
              {/*  onClick={() => setFormModalState(document)}*/}
              {/*>*/}
              {/*  <EditIcon/>*/}
              {/*</Button>*/}

              <Button
                rightIcon={<DownloadIcon/>} variant='outlined'
              >
                دریافت فایل
              </Button>
            </div>
          </div>

          <DetailInfoSectionLabelValue
            label='توضیحات' value={document?.[descriptionFieldName]}
          />
        </div>
      ))}
    </CardWithHeader>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDocs;
