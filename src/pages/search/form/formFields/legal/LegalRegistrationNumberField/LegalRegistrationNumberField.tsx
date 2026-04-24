import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {
  legalRegistrationNumberFieldLabel,
  legalRegistrationNumberFieldName
} from "./LegalRegistrationNumberField.constances.ts";


function LegalRegistrationNumberField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalRegistrationNumberFieldName);

  return (
    <InputForm
      fieldName={legalRegistrationNumberFieldName}
      inputProps={{
        errorMessage,
        label: legalRegistrationNumberFieldLabel,
        placeholder: 'برای مثال 0112345789',
      }}
    />
  );
}

export default LegalRegistrationNumberField;