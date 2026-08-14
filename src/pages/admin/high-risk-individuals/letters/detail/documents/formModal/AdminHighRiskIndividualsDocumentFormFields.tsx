import FileTypeField from "../../../../FormFields/FileTypeField/FileTypeField.tsx";
import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import UploadFileField from "../../../../FormFields/UploadFileField/UploadFileField.tsx";

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
