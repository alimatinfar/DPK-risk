import moment from "moment-jalaali";
import parseJalaliDateToMomentFromResponse
  from "../../../../../../../utils/dateAndTIme/momentJalaliDateTime/parseJalaliDateToMomentFromResponse.ts";


type DataType = {
  isOut: boolean;
  letterDate: string | number;
  isOutValidityDate: boolean;
  validityDate: string | number;
}

const sortCustomersForTimeLine = (data: DataType[]) => {
  return [...data].sort((b, a) => {
    const dateA = parseJalaliDateToMomentFromResponse(
      a.isOut ? a.letterDate :
        a.isOutValidityDate ? a.validityDate :
          a.letterDate
    );

    const dateB = parseJalaliDateToMomentFromResponse(
      b.isOut ? b.letterDate :
        b.isOutValidityDate ? b.validityDate :
          b.letterDate
    );

    return (dateB?.valueOf() ?? 0) - (dateA?.valueOf() ?? 0);
  });
};

export default sortCustomersForTimeLine;
