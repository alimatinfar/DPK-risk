import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {
  birthCertificationNumberFieldLabel,
  birthCertificationNumberFieldName
} from "./BirthCertificateNumberField.constances.ts";


function BirthCertificateNumberField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(birthCertificationNumberFieldName);

  return (
    <InputForm
      fieldName={birthCertificationNumberFieldName}
      inputProps={{
        errorMessage,
        label: birthCertificationNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
      }}
    />
  );
}

export default BirthCertificateNumberField;