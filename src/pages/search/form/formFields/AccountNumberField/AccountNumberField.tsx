import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {accountNumberFieldLabel, accountNumberFieldName} from "./AccountNumberField.constances.ts";

function AccountNumberField() {

  const requiredErrorMessage = useGetRequiredErrorMessage(accountNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(accountNumberFieldName);

  return (
    <InputForm
      fieldName={accountNumberFieldName}
      inputProps={{
        errorMessage,
        label: accountNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
        maxLength: 20,
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default AccountNumberField;