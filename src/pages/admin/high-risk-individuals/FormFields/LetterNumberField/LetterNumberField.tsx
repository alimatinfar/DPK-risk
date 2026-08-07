import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {letterNumberFieldName, letterNumberFieldLabel} from "./index.constances.ts";


function LetterNumberField() {

  // const getErrorMessage = useGetFormErrorMessage();
  // const errorMessage = getErrorMessage(letterNumberFieldName);

  return (
    <InputForm
      fieldName={letterNumberFieldName}
      inputProps={{
        // errorMessage,
        label: letterNumberFieldLabel,
        placeholder: 'برای مثال 16897651231',
      }}
    />
  );
}

export default LetterNumberField;
