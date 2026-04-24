import {useMemo, useCallback} from "react";
import moment, {type Moment} from "moment-jalaali";
import type {WheelDateTimePickerProps} from "../WheelDateTimePicker.constances";


function useWheelDateTimePicker(
  {onChange, value}: Pick<WheelDateTimePickerProps, 'onChange' | 'value'>
) {

  const today = useMemo(() => moment(), [])

  const year = useMemo(() => value.jYear(), [value])
  const month = useMemo(() => (value.jMonth() + 1), [value])
  const day = useMemo(() => value.jDate(), [value])
  const hour = useMemo(() => value.hour(), [value])
  const minute = useMemo(() => value.minute(), [value])

  const updateHandler = useCallback(function (fn:(prevValue: Moment) => Moment) {
    onChange(fn(value || today).clone())
  }, [onChange, value, today])

  const setYear = useCallback(function (currentValue: number) {
    updateHandler((prevValue) => prevValue.jYear(currentValue))
  }, [updateHandler])
  const setMonth = useCallback(function (currentValue: number) {
    updateHandler((prevValue) => prevValue.jMonth(currentValue - 1))
  }, [updateHandler])
  const setDay = useCallback(function (currentValue: number) {
    updateHandler((prevValue) => prevValue.jDate(currentValue))
  }, [updateHandler])
  const setHour = useCallback(function (currentValue: number) {
    updateHandler((prevValue) => prevValue.hour(currentValue))
  }, [updateHandler])
  const setMinute = useCallback(function (currentValue: number) {
    updateHandler((prevValue) => prevValue.minute(currentValue))
  }, [updateHandler])

  const years = useMemo(function () {
    return Array.from({length: 201}, (_, i) => today.jYear() - 100 + i)
  }, [today])

  const months = useMemo(function () {
    return Array.from({length: 12}, (_, i) => i + 1)
  }, [])

  const days = useMemo(function () {
    const getDaysInMonth = () => {
      return moment.jDaysInMonth(year, month - 1);
    };

    return Array.from({length: getDaysInMonth()}, (_, i) => i + 1)
  }, [year, month])

  const hours = useMemo(function () {
    return Array.from({length: 24}, (_, i) => i)
  }, [])

  const minutes = useMemo(function () {
    return Array.from({length: 60}, (_, i) => i)
  }, [])

  return {
    hours, hour, setHour, minutes, minute, setMinute,
    years, year, setYear, months, month, setMonth, days, day, setDay
  }
}

export default useWheelDateTimePicker;