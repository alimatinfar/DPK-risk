import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  memo,
  FC,
} from "react";
import { IoCalendarSharp } from "react-icons/io5";

import {
  DayData,
  IJalaliDate,
  IPersianCalendarProps,
  ViewType,
  YearRange,
} from "./PersianCalendar.type";
import { PersianCalendarTools } from "../../utils/PersianCalendarTools";

const PersianCalendar: FC<IPersianCalendarProps> = ({
  onDateChange,
  label = "تاریخ را انتخاب کنید",
  className = "",
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<IJalaliDate>();
  const [view, setView] = useState<ViewType>("month");
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [currentYearRange, setCurrentYearRange] = useState<YearRange>({
    startYear: 0,
    endYear: 0,
  });

  const changeMonth = useCallback(
    (direction: number) => {
      const currentJalali = PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      let newMonth = currentJalali.month + direction;
      let newYear = currentJalali.year;

      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
      } else if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1;
      }

      const newGregorian = PersianCalendarTools.jalaliToGregorian(newYear, newMonth, 1);
      setCurrentDate(
        new Date(newGregorian.year, newGregorian.month - 1, newGregorian.day)
      );
    },
    [currentDate]
  );

  const changeYear = useCallback(
    (direction: number) => {
      const currentJalali = PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      const newYear = currentJalali.year + direction;
      const newGregorian = PersianCalendarTools.jalaliToGregorian(newYear, currentJalali.month, 1);
      setCurrentDate(
        new Date(newGregorian.year, newGregorian.month - 1, newGregorian.day)
      );
    },
    [currentDate]
  );

  const changeYearSelection = useCallback((direction: number) => {
    setCurrentYearRange((prev) => ({
      startYear: prev.startYear + direction,
      endYear: prev.endYear + direction,
    }));
  }, []);

  const handleDayClick = useCallback(
    (day: number | null) => {
      if (!day) return;
      const currentJalali = PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      const newSelectedDate: IJalaliDate = {
        year: currentJalali.year,
        month: currentJalali.month,
        day,
      };
      setSelectedDate(newSelectedDate);
      setIsCalendarOpen(false);

      if (onDateChange) {
        const gregorianDate = PersianCalendarTools.jalaliToGregorian(
          newSelectedDate.year,
          newSelectedDate.month,
          newSelectedDate.day
        );
        onDateChange({
          jalali: newSelectedDate,
          gregorian: gregorianDate,
          formatted: `${newSelectedDate.year}/${newSelectedDate.month
            .toString()
            .padStart(2, "0")}/${newSelectedDate.day
            .toString()
            .padStart(2, "0")}`,
        });
      }
    },
    [currentDate, onDateChange]
  );

  const handleMonthClick = useCallback(
    (month: number) => {
      const currentJalali = PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      const newGregorian = PersianCalendarTools.jalaliToGregorian(currentJalali.year, month, 1);
      setCurrentDate(
        new Date(newGregorian.year, newGregorian.month - 1, newGregorian.day)
      );
      setView("month");
    },
    [currentDate]
  );

  const handleYearClick = useCallback(
    (year: number) => {
      const currentJalali = PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      const newGregorian = PersianCalendarTools.jalaliToGregorian(year, currentJalali.month, 1);
      setCurrentDate(
        new Date(newGregorian.year, newGregorian.month - 1, newGregorian.day)
      );
      setView("month");
    },
    [currentDate]
  );

  const showYearView = useCallback(() => setView("year"), []);

  const showYearSelectionView = useCallback(() => {
    const currentJalali = PersianCalendarTools.gregorianToJalali(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
    setCurrentYearRange({
      startYear: currentJalali.year - 5,
      endYear: currentJalali.year + 6,
    });
    setView("year-select");
  }, [currentDate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentJalali = useMemo(
    () =>
      PersianCalendarTools.gregorianToJalali(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      ),
    [currentDate]
  );

  const days = useMemo(
    (): DayData[] =>
      currentJalali
        ? PersianCalendarTools.generateMonthDays(
            currentJalali.year,
            currentJalali.month,
            selectedDate
          )
        : [],
    [currentJalali, selectedDate]
  );

  const years = useMemo(
    (): number[] => PersianCalendarTools.generateYears(currentYearRange),
    [currentYearRange]
  );

  const toggleCalendar = useCallback(() => {
    setIsCalendarOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative w-full mt-1" ref={calendarRef}>
      <div
        className={`w-full flex justify-between items-center px-3 py-2 rounded-md shadow-sm outline-none focus:outline-none hover:ring-2 hover:ring-indigo-500 border border-primary dark:text-white ${className}`}
        onClick={toggleCalendar}
      >
        <input
          type="text"
          name="persian calender"
          readOnly
          value={PersianCalendarTools.formatSelectedDate(selectedDate)}
          placeholder={label}
          className="flex-1 border-none placeholder-black dark:placeholder-white outline-none text-sm text-right cursor-pointer bg-transparent"
        />
        <IoCalendarSharp className="w-5 h-5 mr-2 text-primary dark:text-white" />
      </div>

      {isCalendarOpen && currentJalali && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-default rounded-md shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-1 flex justify-between items-center">
            <button
              className="bg-transparent w-9 h-9 rounded-full text-white text-2xl cursor-pointer p-1 transition-colors duration-300 hover:bg-white/20"
              onClick={() => {
                if (view === "month") changeMonth(-1);
                else if (view === "year") changeYear(-1);
                else if (view === "year-select") changeYearSelection(-12);
              }}
            >
              ‹
            </button>
            <h3 className="m-0 flex gap-12 text-lg font-bold">
              {view === "month" ? (
                <>
                  <span className="cursor-pointer" onClick={showYearView}>
                    {PersianCalendarTools.persianMonths()[currentJalali.month - 1]}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={showYearSelectionView}
                  >
                    {currentJalali.year}
                  </span>
                </>
              ) : view === "year" ? (
                <span
                  className="cursor-pointer"
                  onClick={showYearSelectionView}
                >
                  {currentJalali.year}
                </span>
              ) : (
                `${currentYearRange.startYear} - ${currentYearRange.endYear}`
              )}
            </h3>
            <button
              className="bg-transparent w-9 h-9 rounded-full text-white text-2xl cursor-pointer p-1 transition-colors duration-300 hover:bg-white/20"
              onClick={() => {
                if (view === "month") changeMonth(1);
                else if (view === "year") changeYear(1);
                else if (view === "year-select") changeYearSelection(12);
              }}
            >
              ›
            </button>
          </div>

          {view === "month" ? (
            <>
              <div className="grid grid-cols-7 p-1 font-bold">
                {PersianCalendarTools.persianWeekDays().map((day: string, index: number) => (
                  <div key={index} className="text-center p-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0.5 p-1">
                {days.map((dayData, index) => (
                  <div
                    key={index}
                    className={`
                      text-center justify-self-center w-9 h-9 p-2 rounded-full cursor-pointer transition-all duration-200 text-sm
                      ${
                        !dayData.isCurrentMonth
                          ? "opacity-30 cursor-default"
                          : ""
                      }
                      ${
                        dayData.isToday
                          ? "bg-primary-2 text-white font-bold"
                          : ""
                      }
                      ${
                        dayData.isSelected
                          ? "bg-blue-100 text-blue-600 font-bold"
                          : ""
                      }
                      ${
                        dayData.isFriday &&
                        dayData.isCurrentMonth &&
                        !dayData.isSelected &&
                        !dayData.isToday
                          ? "text-red-600 hover:bg-secondary-2"
                          : ""
                      }
                      ${
                        dayData.isCurrentMonth &&
                        !dayData.isSelected &&
                        !dayData.isToday &&
                        !dayData.isFriday
                          ? "hover:bg-secondary-2"
                          : ""
                      }
                    `}
                    onClick={() => handleDayClick(dayData.day)}
                  >
                    {dayData.day}
                  </div>
                ))}
              </div>
            </>
          ) : view === "year" ? (
            <div className="grid grid-cols-3 gap-2.5 p-4">
              {PersianCalendarTools.persianMonths().map((month: string, index: number) => (
                <div
                  key={index}
                  className={`text-center p-2 rounded-lg cursor-pointer text-sm transition-all duration-200 hover:bg-secondary-2 ${
                    index + 1 === currentJalali.month
                      ? "bg-primary-2 text-white hover:bg-primary-2"
                      : ""
                  }`}
                  onClick={() => handleMonthClick(index + 1)}
                >
                  {month}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 p-4">
              {years.map((year, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-lg cursor-pointer text-sm transition-all duration-200 hover:bg-secondary-2 ${
                    year === currentJalali.year
                      ? "bg-primary-2 text-white hover:bg-primary-2"
                      : ""
                  }`}
                  onClick={() => handleYearClick(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(PersianCalendar);
