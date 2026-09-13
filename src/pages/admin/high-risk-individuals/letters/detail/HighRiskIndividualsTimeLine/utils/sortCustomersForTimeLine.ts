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
    const dateA = parseJalaliDate(
      a.isOut ? a.letterDate :
        a.isOutValidityDate ? a.validityDate :
          a.letterDate
    );

    const dateB = parseJalaliDate(
      b.isOut ? b.letterDate :
        b.isOutValidityDate ? b.validityDate :
          b.letterDate
    );

    return (dateB?.valueOf() ?? 0) - (dateA?.valueOf() ?? 0);
  });
};

export default sortCustomersForTimeLine;
