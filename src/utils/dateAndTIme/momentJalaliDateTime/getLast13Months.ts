import moment from "moment-jalaali";

moment.loadPersian({
  usePersianDigits: true,
  dialect: "persian-modern",
})

moment.locale("fa");

function getLast13Months() {

  const now = moment();

  return Array.from({ length: 13 }, (_, index) => {
    const month = moment()
      .startOf("jMonth")
      .subtract(index, "jMonth");

    const isCurrentMonth =
      month.format("jYYYY/jMM") === now.format("jYYYY/jMM");

    return {
      monthName: month.format("jMMMM jYYYY"),

      fromDate: month
        .clone()
        .startOf("jMonth")
        .format("jYYYY/jMM/jDD"),

      toDate: isCurrentMonth
        ? now.format("jYYYY/jMM/jDD")
        : month
          .clone()
          .endOf("jMonth")
          .format("jYYYY/jMM/jDD"),
    };
  })
}

export default getLast13Months;
