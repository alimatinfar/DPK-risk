import FileTypeField from "../FileTypeField/FileTypeField.tsx";
import DescriptionField from "../DescriptionField/DescriptionField.tsx";
import UploadFileField from "../UploadFileField/UploadFileField.tsx";


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
