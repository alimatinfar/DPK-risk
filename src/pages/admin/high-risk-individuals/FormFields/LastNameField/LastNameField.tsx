import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {lastNameFieldLabel, lastNameFieldName} from "./index.constances.ts";


function LastNameField() {
  // const getErrorMessage = useGetFormErrorMessage();
  // const errorMessage = getErrorMessage(firstNameFieldName);

  return (
    <InputForm
      fieldName={lastNameFieldName}
      inputProps={{
        // errorMessage,
        label: lastNameFieldLabel,
        placeholder: 'برای مثال احمد',
      }}
    />
  );
}

export default LastNameField;
