import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import {requestReasonFieldLabel, requestReasonFieldName, requestReasonFieldOptions} from "./index.constances.ts";

type Props = {
  isRequired?: boolean;
}

function RequestReasonField(
  {isRequired}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(requestReasonFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(requestReasonFieldLabel, true)

  return (
    <SelectForm
      fieldName={requestReasonFieldName}
      inputProps={{
        errorMessage,
        label: requestReasonFieldLabel
      }}
      selectProps={{
        options: requestReasonFieldOptions
      }}
      rules={isRequired ? {
        required: requiredErrorMessage,
      } : {}}
    />
  );
}

export default RequestReasonField;
