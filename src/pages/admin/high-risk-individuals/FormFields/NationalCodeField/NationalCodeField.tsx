import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {nationalCodeFieldLabel, nationalCodeFieldName} from "./index.constances.ts";

function NationalCodeField() {
  // const getErrorMessage = useGetFormErrorMessage();
  // const errorMessage = getErrorMessage(nationalCodeFieldName);

  return (
    <InputForm
      fieldName={nationalCodeFieldName}
      inputProps={{
        // errorMessage,
        label: nationalCodeFieldLabel,
        placeholder: 'برای مثال 0065432107',
        maxLength: 11,
        justNumber: true
      }}
      rules={{
        // minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default NationalCodeField;
