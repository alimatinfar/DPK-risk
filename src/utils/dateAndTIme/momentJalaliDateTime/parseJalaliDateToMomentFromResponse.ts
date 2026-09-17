import moment from "moment-jalaali";

function parseJalaliDateToMomentFromResponse(date: number | string | null) {
  if (!date) return null;

  return moment(String(date), 'jYYYYjMMjDD');
};

export default parseJalaliDateToMomentFromResponse;
