import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {riskListTypeFieldLabel, riskListTypeFieldName} from "./index.constances.ts";
import APIS from "../../../../../request/constances/apis.ts";


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
        apiAddress: APIS.GET_RISK_LIST_TYPES,
      }}
      rules={notRequired ? {} : {
        required: requiredErrorMessage,
      }}
    />
  );
}

export default RiskListTypeField;
