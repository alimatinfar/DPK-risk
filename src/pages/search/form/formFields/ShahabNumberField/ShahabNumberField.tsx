import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {shahabNumberFieldLabel, shahabNumberFieldName} from "./ShahabNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 16

function ShahabNumberField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(shahabNumberFieldName);

  return (
    <InputForm
      fieldName={shahabNumberFieldName}
      inputProps={{
        errorMessage,
        label: shahabNumberFieldLabel,
        placeholder: 'برای مثال 8572193405687124',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default ShahabNumberField;
