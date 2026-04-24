import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {legalBrandNameFieldLabel, legalBrandNameFieldName} from "./LegalBrandNameField.constances.ts";


function LegalBrandNameField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalBrandNameFieldName);

  return (
    <InputForm
      fieldName={legalBrandNameFieldName}
      inputProps={{
        errorMessage,
        label: legalBrandNameFieldLabel,
        placeholder: 'برای مثال دیجی کالا',
      }}
    />
  );
}

export default LegalBrandNameField;