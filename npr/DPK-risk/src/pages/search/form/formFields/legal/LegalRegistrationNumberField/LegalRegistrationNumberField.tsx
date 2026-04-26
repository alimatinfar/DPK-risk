import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {
  legalRegistrationNumberFieldLabel,
  legalRegistrationNumberFieldName
} from "./LegalRegistrationNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 11

function LegalRegistrationNumberField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalRegistrationNumberFieldName);

  return (
    <InputForm
      fieldName={legalRegistrationNumberFieldName}
      inputProps={{
        errorMessage,
        label: legalRegistrationNumberFieldLabel,
        placeholder: 'برای مثال 11112222333',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default LegalRegistrationNumberField;