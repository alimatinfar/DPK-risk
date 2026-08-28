import React from 'react';
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage";
import SelectForm from "../../../../../components/Form/Select/SelectForm";
import {fileTypeFieldLabel, fileTypeFieldName} from "./index.constances";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage";
import APIS from "../../../../../request/constances/apis.ts";


function FileTypeField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(fileTypeFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(fileTypeFieldLabel)

  return (
    <SelectForm
      fieldName={fileTypeFieldName}
      inputProps={{
        errorMessage,
        label: fileTypeFieldLabel,
      }}
      selectProps={{
        apiAddress: APIS.GET_LETTER_DOCUMENTS,
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default FileTypeField;
