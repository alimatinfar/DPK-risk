import {letterFromDateFieldLabel, letterFromDateFieldName} from "./index.constances.ts";
import LetterDateField from "../LetterDateField/LetterDateField.tsx";


function LetterFromDateField() {
  return (
    <LetterDateField
      customFieldName={letterFromDateFieldName}
      customLabel={letterFromDateFieldLabel}
    />
  )
}

export default LetterFromDateField;
