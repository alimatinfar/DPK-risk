export type ViewType = "month" | "year" | "year-select";

export interface IJalaliDate {
  year: number;
  month: number;
  day: number;
}

export interface DateChangePayload {
  jalali: IJalaliDate;
  gregorian: IJalaliDate;
  formatted: string;
}

export interface DayData {
  day: number | null;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isFriday: boolean;
}

export interface YearRange {
  startYear: number;
  endYear: number;
}

export interface IPersianCalendarProps {
  onDateChange?: (date: DateChangePayload) => void;
  label?: string;
  className?: string;
}
