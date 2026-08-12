import React from 'react';
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage";
import SelectForm from "../../../../../components/Form/Select/SelectForm";
import {fileTypeFieldLabel, fileTypeFieldName, fileTypeFieldOptions} from "./index.constances";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage";


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
        // TODO get options from api
        options: fileTypeFieldOptions
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default FileTypeField;