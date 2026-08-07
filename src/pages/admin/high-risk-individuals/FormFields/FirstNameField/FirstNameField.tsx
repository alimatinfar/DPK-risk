import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {firstNameFieldLabel, firstNameFieldName} from "./index.constances.ts";

function FirstNameField() {
  // const getErrorMessage = useGetFormErrorMessage();
  // const errorMessage = getErrorMessage(firstNameFieldName);

  return (
    <InputForm
      fieldName={firstNameFieldName}
      inputProps={{
        // errorMessage,
        label: firstNameFieldLabel,
        placeholder: 'برای مثال احمد',
      }}
    />
  );
}

export default FirstNameField;
