import moment, {type Moment} from "moment-jalaali";
import toEnglishDigit from "../../../../../../utils/inputOperations/toEnglishDigit.ts";

function getMonthDateRangeQueryParams(year: number, month: number) {
  const fromDate = moment(`${year}/${month}/1`, "jYYYY/jM/jD").startOf("day");

  const now = moment();

  const isCurrentMonth =
    now.jYear() === year &&
    now.jMonth() + 1 === month;

  const toDate = isCurrentMonth
    ? now
    : fromDate.clone().endOf("jMonth");

  const getFormattedValue = (value: Moment) => toEnglishDigit(value.format('jYYYYjMMjDD'))

  return {
    fromDate: getFormattedValue(fromDate),
    toDate: getFormattedValue(toDate),
  };
}

export default getMonthDateRangeQueryParams;
