import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {customerNumberFieldLabel, customerNumberFieldName} from "./CustomerNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 10

function CustomerNumberField() {

  // const requiredErrorMessage = useGetRequiredErrorMessage(customerNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(customerNumberFieldName);

  return (
    <InputForm
      fieldName={customerNumberFieldName}
      inputProps={{
        errorMessage,
        label: customerNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        // required: requiredErrorMessage,
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default CustomerNumberField;