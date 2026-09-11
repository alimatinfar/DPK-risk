import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "./index.types.ts";
import DetailInfoSectionLabelValue
  from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue.tsx";
import {fileTypeFieldName} from "../../../FormFields/FileTypeField/index.constances.ts";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import DeleteIcon from "../../../../../../components/svg/DeleteIcon.tsx";
import DownloadIcon from "../../../../../../components/svg/DownloadIcon.tsx";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDocsProps
} from "./AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile.ts";

type Props = {
  document: AdminHighRiskIndividualsLettersDetailDocumentType;
  index: number;
} & Pick<AdminHighRiskIndividualsLettersDetailDocumentsDocsProps, 'setDeleteModalState'>

function AdminHighRiskIndividualsLettersDetailDocumentsDocsCard(
  {document, index, setDeleteModalState}: Props
) {

  const {
    downloadFileHandler, isPending
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile(document)

  return (
    <div
      key={document?.id}
      className={`flex flex-col gap-y-4 ${index === 0 ? '' : 'pt-4 mt-4 border-t border-gray-200'}`}
    >
      <div className='flex items-center justify-between'>
        <DetailInfoSectionLabelValue
          label='نوع فایل' value={document?.[fileTypeFieldName] ? document?.[fileTypeFieldName]?.name : ''}
        />

        <div className='flex items-center gap-x-4'>
          {setDeleteModalState && (
            <Button
              justIcon variant='default' color='red'
              onClick={() => setDeleteModalState(document)}
            >
              <DeleteIcon textColor='text-red-500'/>
            </Button>
          )}

          {/*<Button*/}
          {/*  justIcon variant='default' color='white'*/}
          {/*  onClick={() => setFormModalState(document)}*/}
          {/*>*/}
          {/*  <EditIcon/>*/}
          {/*</Button>*/}

          <Button
            rightIcon={<DownloadIcon/>} variant='outlined' loading={isPending}
            onClick={downloadFileHandler}
          >
            دریافت فایل
          </Button>
        </div>
      </div>

      <DetailInfoSectionLabelValue
        label='توضیحات' value={document?.[descriptionFieldName]}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDocsCard;
