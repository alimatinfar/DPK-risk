import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {nationalCodeFieldLabel, nationalCodeFieldName} from "./NationalCodeField.constances.ts";

const SPECIFIC_LENGTH = 10

function NationalCodeField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(nationalCodeFieldName);

  return (
    <InputForm
      fieldName={nationalCodeFieldName}
      inputProps={{
        errorMessage,
        label: nationalCodeFieldLabel,
        placeholder: 'برای مثال 123457890',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.MIN_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default NationalCodeField;