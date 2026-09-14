import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import {requestReasonFieldLabel, requestReasonFieldName} from "./index.constances.ts";
import APIS from "../../../../../request/constances/apis.ts";

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
        apiAddress: APIS.GET_INQUIRY_REASONS
      }}
      rules={isRequired ? {
        required: requiredErrorMessage,
      } : {}}
    />
  );
}

export default RequestReasonField;
