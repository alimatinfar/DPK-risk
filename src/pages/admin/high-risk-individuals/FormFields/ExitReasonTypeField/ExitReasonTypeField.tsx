import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {exitReasonTypeFieldName, exitReasonTypeFieldOptions} from "./index.constances.ts";

function ExitReasonTypeField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(exitReasonTypeFieldName);

  return (
    <SelectForm
      fieldName={exitReasonTypeFieldName}
      inputProps={{
        errorMessage,
      }}
      selectProps={{
        options: exitReasonTypeFieldOptions
      }}
      rules={{
        required: 'دلیل خروج را انتخاب کنید',
      }}
    />
  );
}

export default ExitReasonTypeField;
