import type {Moment} from "moment-jalaali";

export const WHEEL_DATE_TIME_PICKER_MODES = {
  DATE: 'date',
  TIME: 'time',
  DATE_TIME: 'dateTime',
} as const

export type WheelDateTimePickerModesType = typeof WHEEL_DATE_TIME_PICKER_MODES[keyof typeof WHEEL_DATE_TIME_PICKER_MODES];

export type WheelDateTimePickerProps = {
  onChange: (date: Moment) => void;
  value: Moment;
  mode?: WheelDateTimePickerModesType;
}