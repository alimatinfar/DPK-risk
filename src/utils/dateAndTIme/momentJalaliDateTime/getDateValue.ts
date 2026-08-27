import type {
  WheelDateTimePickerProps
} from "../../../components/Form/WheelDateTimePicker/WheelDateTimePicker.constances.ts";
import moment from "moment-jalaali";

function getDateValue(date: WheelDateTimePickerProps['value']) {
  return typeof date === 'string' ? moment(date) : date
}

export default getDateValue;
