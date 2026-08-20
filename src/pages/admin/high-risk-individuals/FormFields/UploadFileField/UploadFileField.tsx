import UploadBox, {type UploadBoxProps} from "../../../../../components/others/UploadBox/UploadBox";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage";
import {uploadFileFieldName, uploadFileFieldLabel} from "./index.constances";


export type UploadFileFieldProps = {
  uploadBoxProps?: Partial<UploadBoxProps>;
}

function UploadFileField(
  {uploadBoxProps}: UploadFileFieldProps
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(uploadFileFieldName);

  return (
    <UploadBox
      fieldName={uploadFileFieldName}
      maxFileSize={1000}
      rules={{required: `${uploadFileFieldLabel} را آپلود کنید`}}
      errorMessage={errorMessage}
      {...uploadBoxProps}
    />
  );
}

export default UploadFileField;