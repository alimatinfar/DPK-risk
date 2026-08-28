import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {entryReasonsFieldLabel, entryReasonsFieldName} from "./index.constances.ts";
import APIS from "../../../../../request/constances/apis.ts";

function EntryReasonsField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(entryReasonsFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(entryReasonsFieldLabel)

  return (
    <SelectForm
      fieldName={entryReasonsFieldName}
      inputProps={{
        errorMessage,
        label: entryReasonsFieldLabel,
      }}
      selectProps={{
        apiAddress: APIS.GET_LETTER_REASONS,
        mode: 'multiple'
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default EntryReasonsField;
