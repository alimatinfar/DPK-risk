import getBodyDataDateField from "../../../../../../request/utils/getBodyDataDateField.ts";
import moment from "moment-jalaali";

function getPrevYearDateRange() {
  return {
    fromDate: getBodyDataDateField(
      moment()
        .startOf("jMonth")
        .subtract(12, "jMonth")
    ),
    toDate: getBodyDataDateField(moment()),
  }
}

export default getPrevYearDateRange;
