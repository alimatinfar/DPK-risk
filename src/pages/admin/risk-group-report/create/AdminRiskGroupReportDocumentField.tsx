import {documentsFieldName} from "./index.constances.ts";
import {uploadFileFieldLabel} from "../../high-risk-individuals/FormFields/UploadFileField/index.constances.ts";
import UploadBox from "../../../../components/others/UploadBox/UploadBox.tsx";
import {FILE_TYPES, FILE_ACCEPTS} from "../../../../constances/fileTypes.ts";
import useGetFormErrorMessage
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";

function AdminRiskGroupReportDocumentField() {

  const getErrorMessage = useGetFormErrorMessage()
  const errorMessage = getErrorMessage(documentsFieldName)

  return (
    <UploadBox
      fieldName={documentsFieldName}
      maxFileSize={15_000}
      rules={{required: `${uploadFileFieldLabel} را آپلود کنید`}}
      accept={FILE_ACCEPTS.EXCEL}
      fileTypes={FILE_TYPES.EXCEL}
      errorMessage={errorMessage}
    />
  );
}

export default AdminRiskGroupReportDocumentField;
