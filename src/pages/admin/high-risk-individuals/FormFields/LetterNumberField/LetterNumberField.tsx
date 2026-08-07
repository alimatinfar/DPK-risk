import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {letterNumberFieldName, letterNumberFieldLabel} from "./index.constances.ts";


function LetterNumberField() {
  return (
    <InputForm
      fieldName={letterNumberFieldName}
      inputProps={{
        // errorMessage,
        label: letterNumberFieldLabel,
        placeholder: 'برای مثال 16897651231',
        justNumber: true
      }}
    />
  );
}

export default LetterNumberField;
