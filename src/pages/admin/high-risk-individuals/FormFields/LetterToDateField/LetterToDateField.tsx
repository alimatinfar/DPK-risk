import WheelDateTimePickerForm from "../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import {letterToDateFieldLabel, letterToDateFieldName} from "./index.constances.ts";


function LetterToDateField() {
  return (
    <WheelDateTimePickerForm
      fieldName={letterToDateFieldName}
      title={letterToDateFieldLabel}
      inputProps={{
        label: letterToDateFieldLabel,
      }}
      wheelPickerProps={{
        mode: 'date'
      }}
    />
  )
}

export default LetterToDateField;
