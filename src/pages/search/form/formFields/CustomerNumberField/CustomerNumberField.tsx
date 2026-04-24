import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {customerNumberFieldLabel, customerNumberFieldName} from "./CustomerNumberField.constances.ts";


function CustomerNumberField() {

  const requiredErrorMessage = useGetRequiredErrorMessage(customerNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(customerNumberFieldName);

  return (
    <InputForm
      fieldName={customerNumberFieldName}
      inputProps={{
        errorMessage,
        label: customerNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default CustomerNumberField;