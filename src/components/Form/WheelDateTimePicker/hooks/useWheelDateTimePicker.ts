import { useMemo, useCallback } from "react";
import moment, { type Moment } from "moment-jalaali";
import { type WheelDateTimePickerProps } from "../WheelDateTimePicker.constances";

function useWheelDateTimePicker(
  {
    onChange, value, minDateTime, maxDateTime,
  }: Pick<
    WheelDateTimePickerProps,
    "onChange" | "value" | "minDateTime" | "maxDateTime"
  >
) {
  const today = useMemo(() => moment(), []);

  const minDate = useMemo(
    () => minDateTime?.clone().startOf("minute"),
    [minDateTime]
  );

  const maxDate = useMemo(
    () => maxDateTime?.clone().startOf("minute"),
    [maxDateTime]
  );

  const currentValue = useMemo(() => {
    const momentValue = typeof value === 'string' ? moment(value) :  value
    return momentValue?.clone() ?? today.clone()
    }, [value, today]);

  const year = currentValue.jYear();
  const month = currentValue.jMonth() + 1;
  const day = currentValue.jDate();
  const hour = currentValue.hour();
  const minute = currentValue.minute();

  const clampDateTime = useCallback(
    (date: Moment) => {
      let result = date.clone();

      if (minDate && result.isBefore(minDate)) {
        result = minDate.clone();
      }

      if (maxDate && result.isAfter(maxDate)) {
        result = maxDate.clone();
      }

      return result;
    },
    [minDate, maxDate]
  );

  const updateHandler = useCallback(
    (fn: (prevValue: Moment) => Moment) => {
      const nextValue = fn(currentValue.clone());

      onChange(clampDateTime(nextValue));
    },
    [currentValue, onChange, clampDateTime]
  );

  const setYear = useCallback(
    (currentValue: number) => {
      updateHandler((prevValue) => {
        const next = prevValue.clone().jYear(currentValue);

        // اگر با تغییر سال، روز فعلی در آن سال معتبر نبود
        const maxDay = moment.jDaysInMonth(
          next.jYear(),
          next.jMonth()
        );

        if (next.jDate() > maxDay) {
          next.jDate(maxDay);
        }

        return next;
      });
    },
    [updateHandler]
  );

  const setMonth = useCallback(
    (currentValue: number) => {
      updateHandler((prevValue) => {
        const next = prevValue.clone().jMonth(currentValue - 1);

        const maxDay = moment.jDaysInMonth(
          next.jYear(),
          next.jMonth()
        );

        if (next.jDate() > maxDay) {
          next.jDate(maxDay);
        }

        return next;
      });
    },
    [updateHandler]
  );

  const setDay = useCallback(
    (currentValue: number) => {
      updateHandler((prevValue) =>
        prevValue.clone().jDate(currentValue)
      );
    },
    [updateHandler]
  );

  const setHour = useCallback(
    (currentValue: number) => {
      updateHandler((prevValue) =>
        prevValue.clone().hour(currentValue)
      );
    },
    [updateHandler]
  );

  const setMinute = useCallback(
    (currentValue: number) => {
      updateHandler((prevValue) =>
        prevValue.clone().minute(currentValue)
      );
    },
    [updateHandler]
  );


  const years = useMemo(() => {
    const defaultMinYear = today.jYear() - 100;
    const defaultMaxYear = today.jYear() + 100;

    const minYear = minDate
      ? Math.max(defaultMinYear, minDate.jYear())
      : defaultMinYear;

    const maxYear = maxDate
      ? Math.min(defaultMaxYear, maxDate.jYear())
      : defaultMaxYear;

    return Array.from(
      { length: maxYear - minYear + 1 },
      (_, i) => minYear + i
    );
  }, [today, minDate, maxDate]);


  const months = useMemo(() => {
    let minMonth = 1;
    let maxMonth = 12;

    if (minDate && year === minDate.jYear()) {
      minMonth = minDate.jMonth() + 1;
    }

    if (maxDate && year === maxDate.jYear()) {
      maxMonth = maxDate.jMonth() + 1;
    }

    return Array.from(
      { length: maxMonth - minMonth + 1 },
      (_, i) => minMonth + i
    );
  }, [year, minDate, maxDate]);


  const days = useMemo(() => {
    const maxDaysInMonth = moment.jDaysInMonth(
      year,
      month - 1
    );

    let minDay = 1;
    let maxDay = maxDaysInMonth;

    if (
      minDate &&
      year === minDate.jYear() &&
      month === minDate.jMonth() + 1
    ) {
      minDay = minDate.jDate();
    }

    if (
      maxDate &&
      year === maxDate.jYear() &&
      month === maxDate.jMonth() + 1
    ) {
      maxDay = maxDate.jDate();
    }

    return Array.from(
      { length: maxDay - minDay + 1 },
      (_, i) => minDay + i
    );
  }, [year, month, minDate, maxDate]);


  const hours = useMemo(() => {
    let minHour = 0;
    let maxHour = 23;

    const sameDate = (date: Moment) =>
      year === date.jYear() &&
      month === date.jMonth() + 1 &&
      day === date.jDate();

    if (minDate && sameDate(minDate)) {
      minHour = minDate.hour();
    }

    if (maxDate && sameDate(maxDate)) {
      maxHour = maxDate.hour();
    }

    return Array.from(
      { length: maxHour - minHour + 1 },
      (_, i) => minHour + i
    );
  }, [year, month, day, minDate, maxDate]);


  const minutes = useMemo(() => {
    let minMinute = 0;
    let maxMinute = 59;

    const sameHour = (date: Moment) =>
      year === date.jYear() &&
      month === date.jMonth() + 1 &&
      day === date.jDate() &&
      hour === date.hour();

    if (minDate && sameHour(minDate)) {
      minMinute = minDate.minute();
    }

    if (maxDate && sameHour(maxDate)) {
      maxMinute = maxDate.minute();
    }

    return Array.from(
      { length: maxMinute - minMinute + 1 },
      (_, i) => minMinute + i
    );
  }, [year, month, day, hour, minDate, maxDate]);

  return {
    hours, hour, setHour,
    minutes, minute, setMinute,
    years, year, setYear,
    months, month, setMonth,
    days, day, setDay,
  };
}

export default useWheelDateTimePicker;
