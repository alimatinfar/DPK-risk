import WheelDateTimePickerForm from "../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import {letterFromDateFieldLabel, letterFromDateFieldName} from "./index.constances.ts";


function LetterFromDateField() {
  return (
    <WheelDateTimePickerForm
      fieldName={letterFromDateFieldName}
      title={letterFromDateFieldLabel}
      inputProps={{
        label: letterFromDateFieldLabel,
      }}
      wheelPickerProps={{
        mode: 'date'
      }}
    />
  )
}

export default LetterFromDateField;
