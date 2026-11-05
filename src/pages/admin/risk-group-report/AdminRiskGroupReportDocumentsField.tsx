import {
  documentsFieldName
} from "./index.constances.ts";
import {uploadFileFieldLabel} from "../high-risk-individuals/FormFields/UploadFileField/index.constances.ts";
import UploadBox from "../../../components/others/UploadBox/UploadBox.tsx";
import {FILE_TYPES, FILE_ACCEPTS} from "../../../constances/fileTypes.ts";

function AdminRiskGroupReportDocumentsField() {
  return (
    <UploadBox
      fieldName={documentsFieldName}
      maxFileSize={15_000}
      rules={{required: `${uploadFileFieldLabel} را آپلود کنید`}}
      accept={FILE_ACCEPTS.EXCEL}
      fileTypes={FILE_TYPES.EXCEL}
    />
  );
}

export default AdminRiskGroupReportDocumentsField;
