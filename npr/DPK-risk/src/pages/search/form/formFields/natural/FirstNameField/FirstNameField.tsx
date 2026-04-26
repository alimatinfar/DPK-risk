import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {firstNameFieldLabel, firstNameFieldName} from "./FirstNameField.constances.ts";

function FirstNameField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(firstNameFieldName);

  return (
    <InputForm
      fieldName={firstNameFieldName}
      inputProps={{
        errorMessage,
        label: firstNameFieldLabel,
        placeholder: 'برای مثال علی',
      }}
    />
  );
}

export default FirstNameField;