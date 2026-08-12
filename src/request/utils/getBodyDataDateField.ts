import type {WheelDateTimePickerProps} from "../../components/Form/WheelDateTimePicker/WheelDateTimePicker.constances";
import moment, {type Moment} from "moment-jalaali";

function getBodyDataDateField(value: WheelDateTimePickerProps['value']) {
  const momentValue = typeof value === 'string' ? moment(value) : value;
  return value ? Number(momentValue.format('YYYYMMDD')) : ''
}

export default getBodyDataDateField;