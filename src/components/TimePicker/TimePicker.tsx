import { useState, useRef, useEffect, FC } from "react";
import { IoTimeOutline } from "react-icons/io5";
import NumberButton from "../NumberButton/NumberButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ITimePickerProps } from "./TimePicker.type";

const TimePicker: FC<ITimePickerProps> = ({
  className = "",
  is24Hour = true,
  onChange,
  initialValue,
}) => {
  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false);
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(0);
  const [isAm, setIsAm] = useState<boolean>(true);
  const timePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialValue) {
      if (typeof initialValue === "string") {
        const timeParts = initialValue.split(":");
        if (timeParts.length >= 2) {
          let h = parseInt(timeParts[0]);
          const m = parseInt(timeParts[1]);

          if (!is24Hour && h >= 12) {
            setIsAm(false);
            if (h > 12) h -= 12;
          }

          setHour(h);
          setMinute(m);
        }
      } else if (
        initialValue.hour !== undefined &&
        initialValue.minute !== undefined
      ) {
        let h = initialValue.hour;
        const m = initialValue.minute;

        if (!is24Hour && h >= 12) {
          setIsAm(false);
          if (h > 12) h -= 12;
        }

        setHour(h);
        setMinute(m);
      }
    } else {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();

      if (!is24Hour) {
        setIsAm(h < 12);
        if (h > 12) h -= 12;
        if (h === 0) h = 12;
      }

      setHour(h);
      setMinute(m);
    }
  }, [initialValue, is24Hour]);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        timePickerRef.current &&
        !timePickerRef.current.contains(event.target as Node)
      ) {
        setIsTimePickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatTime = (): string => {
    let displayHour = hour;
    let amPm = "";

    if (!is24Hour) {
      amPm = isAm ? " ق.ظ" : " ب.ظ";
      if (hour === 0) displayHour = 12;
    }

    return `${displayHour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}${amPm}`;
  };

  const changeHour = (increment: number): void => {
    let newHour = hour + increment;

    if (is24Hour) {
      if (newHour < 0) newHour = 23;
      if (newHour > 23) newHour = 0;
    } else {
      if (newHour < 1) newHour = 12;
      if (newHour > 12) newHour = 1;
    }

    setHour(newHour);
    notifyChange(newHour, minute);
  };

  const changeMinute = (increment: number): void => {
    let newMinute = minute + increment;

    if (newMinute < 0) {
      newMinute = 59;
    } else if (newMinute > 59) {
      newMinute = 0;
    }
    setMinute(newMinute);
    notifyChange(hour, newMinute);
  };

  const toggleAmPm = (): void => {
    setIsAm(!isAm);
    notifyChange(hour, minute);
  };

  const notifyChange = (h: number, m: number): void => {
    if (onChange) {
      let finalHour = h;

      if (!is24Hour) {
        if (isAm && h === 12) finalHour = 0;
        else if (!isAm && h < 12) finalHour = h + 12;
      }

      onChange({ hour: finalHour, minute: m });
    }
  };

  return (
    <div className="relative" ref={timePickerRef}>
      <div
        className={`w-full flex justify-between items-center px-3 py-2 rounded-md shadow-sm outline-none focus:outline-none hover:ring-2 hover:ring-primary-500 border border-primary bg-default ${className}`}
        onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
      >
        <input
          type="text"
          name="input time"
          readOnly
          value={formatTime()}
          placeholder="زمان را انتخاب کنید"
          className="flex-1 border-none placeholder-black dark:placeholder-white outline-none text-sm text-right cursor-pointer bg-transparent"
        />
        <IoTimeOutline className="w-5 h-5 mr-2 text-primary dark:text-white" />
      </div>

      {isTimePickerOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-default rounded-md shadow-lg overflow-hidden">
          <div className="p-4 flex items-center justify-center gap-4">
            {!is24Hour && (
              <div className="flex flex-col items-center ml-2">
                <button
                  className="p-3 flex cursor-pointer items-center justify-center rounded-full hover:bg-primary-500"
                  onClick={() => toggleAmPm()}
                >
                  <FaChevronUp className="text-primary  dark:text-white" />
                </button>

                <div className="flex items-center justify-center w-10 h-10 my-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <span>{isAm ? "ق.ظ" : "ب.ظ"}</span>
                </div>

                <button
                  className="p-3 flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => toggleAmPm()}
                >
                  <FaChevronDown
                    className="text-primary  dark:text-white"
                    onClick={() => toggleAmPm()}
                  />
                </button>
              </div>
            )}
            <NumberButton
              value={minute}
              onChange={changeMinute}
              min={0}
              max={59}
            />
            <span className="text-2xl">:</span>
            <NumberButton
              value={hour}
              onChange={changeHour}
              min={is24Hour ? 0 : 1}
              max={is24Hour ? 23 : 12}
            />
          </div>

          <div className="p-3 bg-primary-100 flex justify-center">
            <button
              className="px-4 py-1 rounded-md bg-primary text-white"
              onClick={() => setIsTimePickerOpen(false)}
            >
              تایید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
