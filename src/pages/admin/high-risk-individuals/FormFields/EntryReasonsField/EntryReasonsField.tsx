import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import React from "react";
import {entryReasonsFieldLabel, entryReasonsFieldName, entryReasonsFieldOptions} from "./index.constances.ts";

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
        // TODO get options from api
        options: entryReasonsFieldOptions
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default EntryReasonsField;
