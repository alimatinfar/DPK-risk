import moment from "moment-jalaali";
import WheelDateTimePickerColumn from "./WheelDateTimePickerColumn";
import useWheelDateTimePicker from "./hooks/useWheelDateTimePicker";
import WheelDateTimePickerSection from "./WheelDateTimePickerSection";
import {WHEEL_DATE_TIME_PICKER_MODES, type WheelDateTimePickerProps} from "./WheelDateTimePicker.constances";

moment.loadPersian({dialect: "persian-modern"});

function WheelDateTimePicker(
  {onChange, value, mode = WHEEL_DATE_TIME_PICKER_MODES.DATE_TIME}: WheelDateTimePickerProps
) {

  const {
    hours, hour, setHour, minutes, minute, setMinute,
    years, year, setYear, months, month, setMonth, days, day, setDay
  } = useWheelDateTimePicker({
    onChange, value
  })

  return (
    <div className="flex items-center justify-center gap-12">
      {mode !== WHEEL_DATE_TIME_PICKER_MODES.DATE && (
        <WheelDateTimePickerSection title='ساعت'>
          <WheelDateTimePickerColumn
            items={hours}
            value={hour}
            onChange={setHour}
            format={(h) => h.toString().padStart(2, "0")}
          />

          <WheelDateTimePickerColumn
            items={minutes}
            value={minute}
            onChange={setMinute}
            format={(m) => m.toString().padStart(2, "0")}
          />
        </WheelDateTimePickerSection>
      )}

      {mode !== WHEEL_DATE_TIME_PICKER_MODES.TIME && (
        <WheelDateTimePickerSection title='تاریخ'>
          <WheelDateTimePickerColumn
            items={years}
            value={year}
            onChange={setYear}
          />

          <WheelDateTimePickerColumn
            items={months}
            value={month}
            onChange={setMonth}
            format={(m) => moment().jMonth(m - 1).format("jMMMM")}
          />

          <WheelDateTimePickerColumn
            items={days}
            value={day}
            onChange={setDay}
          />
        </WheelDateTimePickerSection>
      )}
    </div>
  );
}

export default WheelDateTimePicker;