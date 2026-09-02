import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {RISK_LIST_OPTIONS, riskListTypeFieldLabel, riskListTypeFieldName} from "./index.constances.ts";


type Props = {
  notRequired?: boolean;
}

function RiskListTypeField(
  {notRequired}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(riskListTypeFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(riskListTypeFieldLabel)

  return (
    <SelectForm
      fieldName={riskListTypeFieldName}
      inputProps={{
        errorMessage,
        label: riskListTypeFieldLabel,
      }}
      selectProps={{
        // TODO should get from api
        // apiAddress: APIS.GET_LETTER_DOCUMENTS,
        options: RISK_LIST_OPTIONS
      }}
      rules={notRequired ? {} : {
        required: requiredErrorMessage,
      }}
    />
  );
}

export default RiskListTypeField;
