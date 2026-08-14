import LetterDateField from "../LetterDateField/LetterDateField.tsx";
import {letterToDateFieldLabel, letterToDateFieldName} from "./index.constances.ts";


function LetterToDateField() {
  return (
    <LetterDateField
      customFieldName={letterToDateFieldName}
      customLabel={letterToDateFieldLabel}
    />
  )
}

export default LetterToDateField;
