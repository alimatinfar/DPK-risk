import FileTypeField from "../FileTypeField/FileTypeField.tsx";
import DescriptionField from "../DescriptionField/DescriptionField.tsx";
import UploadFileField, {type UploadFileFieldProps} from "../UploadFileField/UploadFileField.tsx";


export type AdminHighRiskIndividualsDocumentFormFieldsProps = {
  descriptionClass?: string;
  uploadFileFieldProps?: Partial<UploadFileFieldProps>;
}

function AdminHighRiskIndividualsDocumentFormFields(
  {
    descriptionClass, uploadFileFieldProps
  }: AdminHighRiskIndividualsDocumentFormFieldsProps
) {
  return (
    <>
      <FileTypeField/>

      <div className={descriptionClass || ''}>
        <DescriptionField isNotRequired placeholder='توضیحات مربوط به فایل بارگزاری شده'/>
      </div>

      <UploadFileField
        {...uploadFileFieldProps}
      />
    </>
  );
}

export default AdminHighRiskIndividualsDocumentFormFields;
