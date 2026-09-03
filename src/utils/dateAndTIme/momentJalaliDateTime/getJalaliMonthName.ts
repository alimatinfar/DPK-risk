import moment from "moment-jalaali";

function getJalaliMonthName(month: number) {
  return moment(`${month}/1/1400`, "jM/jD/jYYYY").format("jMMMM");
}

export default getJalaliMonthName;
