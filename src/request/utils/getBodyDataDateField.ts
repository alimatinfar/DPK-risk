import type {WheelDateTimePickerProps} from "../../components/Form/WheelDateTimePicker/WheelDateTimePicker.constances";
import getDateValue from "../../utils/dateAndTIme/momentJalaliDateTime/getDateValue.ts";

function getBodyDataDateField(value: WheelDateTimePickerProps['value'] | undefined) {
  if (!value) return ''

  const momentValue = getDateValue(value);
  return value ? Number(momentValue.format('YYYYMMDD')) : ''
}

export default getBodyDataDateField;
