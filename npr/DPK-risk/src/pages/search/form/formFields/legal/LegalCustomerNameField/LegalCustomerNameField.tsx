import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {legalCustomerNameFieldLabel, legalCustomerNameFieldName} from "./LegalCustomerNameField.constances.ts";


function LegalCustomerNameField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalCustomerNameFieldName);

  return (
    <InputForm
      fieldName={legalCustomerNameFieldName}
      inputProps={{
        errorMessage,
        label: legalCustomerNameFieldLabel,
        placeholder: 'برای مثال دیجی',
      }}
    />
  );
}

export default LegalCustomerNameField;