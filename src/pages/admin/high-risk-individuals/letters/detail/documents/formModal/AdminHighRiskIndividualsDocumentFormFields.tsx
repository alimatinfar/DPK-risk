import FileTypeField from "../../../../FormFields/FileTypeField/FileTypeField.tsx";
import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import UploadFileField from "../../../../FormFields/UploadFileField/UploadFileField.tsx";
import {fileTypeFieldName, type FileTypeFieldType} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {
  uploadFileFieldName,
  type UploadFileFieldType
} from "../../../../FormFields/UploadFileField/index.constances.ts";


export type AdminHighRiskIndividualsDocumentFormDataType = {
  [fileTypeFieldName]: FileTypeFieldType;
  [descriptionFieldName]: DescriptionFieldType;
  [uploadFileFieldName]: UploadFileFieldType;
}

function AdminHighRiskIndividualsDocumentFormFields() {
  return (
    <>
      <FileTypeField/>

      <DescriptionField placeholder='توضیحات مربوط به فایل بارگزاری شده'/>

      <UploadFileField/>
    </>
  );
}

export default AdminHighRiskIndividualsDocumentFormFields;
