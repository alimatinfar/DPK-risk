import type {Moment} from "moment-jalaali";

const MODES = {
  DATE_TIME: 'dateTime',
  DATE: 'date',
  J_DATE_TIME: 'jDateTime',
  J_DATE: 'jDate',
  TIME: 'time',
} as const

const dateFormat = 'YYYY-MM-DD'
const jDateFormat = 'jYYYY-jMM-jDD'
const timeFormat = 'HH:mm'

const FORMATS = {
  [MODES.DATE_TIME]: `${dateFormat}T${timeFormat}`,
  [MODES.DATE]: dateFormat,
  [MODES.J_DATE_TIME]: `${jDateFormat} | ${timeFormat}`,
  [MODES.J_DATE]: jDateFormat,
  [MODES.TIME]: timeFormat,
}

export type GetFormattedMomentJalaliDateTimeProps = {
  date: Moment;
  mode: typeof MODES[keyof typeof MODES];
}

function getFormattedMomentJalaliDateTime(
  {date, mode}: GetFormattedMomentJalaliDateTimeProps
) {
  return date.format(FORMATS[mode])
}

export default getFormattedMomentJalaliDateTime;