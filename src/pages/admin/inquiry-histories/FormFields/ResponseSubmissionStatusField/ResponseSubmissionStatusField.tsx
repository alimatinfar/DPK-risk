import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";

import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {
  responseSubmissionStatusFieldLabel,
  responseSubmissionStatusFieldName,
  responseSubmissionStatusFieldOptions
} from "./index.constances.ts";

type Props = {
  isRequired?: boolean;
}

function ResponseSubmissionStatusField(
  {isRequired}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(responseSubmissionStatusFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(responseSubmissionStatusFieldLabel, true)

  return (
    <SelectForm
      fieldName={responseSubmissionStatusFieldName}
      inputProps={{
        errorMessage,
        label: responseSubmissionStatusFieldLabel
      }}
      selectProps={{
        options: responseSubmissionStatusFieldOptions
      }}
      rules={isRequired ? {
        required: requiredErrorMessage,
      } : {}}
    />
  );
}

export default ResponseSubmissionStatusField;
