import type {WheelDateTimePickerProps} from "../../components/Form/WheelDateTimePicker/WheelDateTimePicker.constances";
import getDateValue from "../../utils/dateAndTIme/momentJalaliDateTime/getDateValue.ts";
import toEnglishDigit from "../../utils/inputOperations/toEnglishDigit.ts";

function getBodyDataDateField(value: WheelDateTimePickerProps['value'] | undefined) {
  if (!value) return ''

  const momentValue = getDateValue(value);

  return value ? toEnglishDigit(momentValue.format('jYYYYjMMjDD')) : ''
}

export default getBodyDataDateField;
