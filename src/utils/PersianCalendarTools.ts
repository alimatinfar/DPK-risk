export const PersianCalendarTools = {
  gregorianToJalali,
  jalaliToGregorian,
  persianMonths,
 persianWeekDays,
 generateMonthDays,
 generateYears,
 formatSelectedDate
};
interface ISelectedDate{
year:number;
month:number;
day:number;
}
interface ICurrentYearRange{
startYear:number;
endYear:number;
}
function gregorianToJalali (gy:number, gm:number, gd:number) {
  const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  const isGregorianLeap = gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0);
  if (gm === 2 && gd === 29 && !isGregorianLeap) gd = 28;

  let gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    355666 +
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400) +
    gd;

  for (let i = 0; i < gm - 1; i++) {
    days += gDaysInMonth[i];
    if (i === 1 && isGregorianLeap) days += 1;
  }

  let jy = -1595 + 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;

  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let jm, jd;
  if (days < 186) {
    jm = 1 + Math.floor(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + Math.floor((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }

  return { year: jy, month: jm, day: jd };
};

function jalaliToGregorian (jy:number, jm:number, jd:number) {
  const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  const daysInMonth = jm === 12 && !isLeapYear(jy) ? 29 : jDaysInMonth[jm - 1];
  if (jd > daysInMonth) jd = daysInMonth;

  jy += 1595;
  let days =
    -355668 +
    365 * jy +
    Math.floor(jy / 33) * 8 +
    Math.floor(((jy % 33) + 3) / 4) +
    jd;

  for (let i = 0; i < jm - 1; i++) {
    days += jDaysInMonth[i];
  }

  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;

  if (days > 36524) {
    gy += 100 * Math.floor(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }

  gy += 4 * Math.floor(days / 1461);
  days %= 1461;

  if (days > 365) {
    gy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let gd = days + 1;
  let gm = 0;
  const isGregorianLeap = gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0);

  for (; gm < 12; gm++) {
    let v = gDaysInMonth[gm];
    if (gm === 1 && isGregorianLeap) v++;
    if (gd <= v) break;
    gd -= v;
  }

  return { year: gy, month: gm + 1, day: Math.floor(gd) };
};

const getCurrentJalali = () => {
  const now = new Date();
  return gregorianToJalali(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate()
  );
};
function persianMonths(){
  return [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
}
 

function persianWeekDays(){return ["ش", "ی", "د", "س", "چ", "پ", "ج"];}

const isLeapYear = (year:number) => {
  const cyclePosition = year % 33;
  return [1, 5, 9, 13, 17, 22, 26, 30].includes(cyclePosition);
};

const getDaysInMonth = (year:number, month:number) => {
  if (month <= 6) return 31;
  if (month <= 11) return 30;
  return isLeapYear(year) ? 30 : 29;
};

function generateMonthDays (year:number, month:number, selectedDate:ISelectedDate) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayGregorian = jalaliToGregorian(year, month, 1);
  const firstDayDate = new Date(
    firstDayGregorian.year,
    firstDayGregorian.month - 1,
    firstDayGregorian.day
  );
  const startingDay = (firstDayDate.getDay() + 1) % 7;

  const days = Array(startingDay).fill({ day: null, isCurrentMonth: false });
  const todayJalali = getCurrentJalali();

  for (let i = 1; i <= daysInMonth; i++) {
    const gregorianDate = jalaliToGregorian(year, month, i);
    const date = new Date(
      gregorianDate.year,
      gregorianDate.month - 1,
      gregorianDate.day
    );
    const isFriday = (date.getDay() + 1) % 7 === 6;
    const isToday =
      todayJalali.year === year &&
      todayJalali.month === month &&
      todayJalali.day === i;
    const isSelected =
      selectedDate?.year === year &&
      selectedDate?.month === month &&
      selectedDate?.day === i;
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday,
      isSelected,
      isFriday,
    });
  }

  return days;
};


function generateYears(currentYearRange:ICurrentYearRange) {
  return Array.from(
    { length: currentYearRange.endYear - currentYearRange.startYear + 1 },
    (_, i) => currentYearRange.startYear + i
  );
};
 
function formatSelectedDate (selectedDate:ISelectedDate) {
  if (!selectedDate) return "";
  return `${selectedDate.year}/${selectedDate.month
    .toString()
    .padStart(2, "0")}/${selectedDate.day.toString().padStart(2, "0")}`;
};
