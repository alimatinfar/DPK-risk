import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {lastNameFieldLabel, lastNameFieldName} from "./LastNameField.constances.ts";


function LastNameField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(lastNameFieldName);

  return (
    <InputForm
      fieldName={lastNameFieldName}
      inputProps={{
        errorMessage,
        label: lastNameFieldLabel,
        placeholder: 'برای مثال علوی',
      }}
    />
  );
}

export default LastNameField;