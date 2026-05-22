import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {accountNumberFieldLabel, accountNumberFieldName} from "./AccountNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 13

function AccountNumberField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(accountNumberFieldName);

  return (
    <InputForm
      fieldName={accountNumberFieldName}
      inputProps={{
        errorMessage,
        label: accountNumberFieldLabel,
        placeholder: 'برای مثال 1234567890123456',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default AccountNumberField;
