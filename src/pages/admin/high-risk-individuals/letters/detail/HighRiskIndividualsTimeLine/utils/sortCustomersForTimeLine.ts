import moment from "moment-jalaali";


type DataType = {
  isOut: boolean;
  letterDate: string | number;
  isOutValidityDate: boolean;
  validityDate: string | number;
}

const parseJalaliDate = (date: number | string | null) => {
  if (!date) return null;

  return moment(String(date), 'jYYYYjMMjDD');
};

const sortCustomersForTimeLine = (data: DataType[]) => {
  return [...data].sort((b, a) => {
    if (a.isOut !== b.isOut) {
      return Number(b.isOut) - Number(a.isOut);
    }

    if (a.isOut && b.isOut) {
      const dateA = parseJalaliDate(a.letterDate);
      const dateB = parseJalaliDate(b.letterDate);

      return (dateB?.valueOf() ?? 0) - (dateA?.valueOf() ?? 0);
    }

    if (a.isOutValidityDate !== b.isOutValidityDate) {
      return Number(b.isOutValidityDate) - Number(a.isOutValidityDate);
    }

    if (a.isOutValidityDate && b.isOutValidityDate) {
      const dateA = parseJalaliDate(a.validityDate);
      const dateB = parseJalaliDate(b.validityDate);

      return (dateB?.valueOf() ?? 0) - (dateA?.valueOf() ?? 0);
    }

    return 0;
  });
}

export default sortCustomersForTimeLine;
