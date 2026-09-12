import type {HighRiskIndividualsTimeLineProps} from "../../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import RemoveUserIcon from "../../../../../../../components/svg/RemoveUserIcon.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailPageProps,
  AdminHighRiskIndividualsLettersDetailPageResponseType
} from "../../index.types.ts";
import {useMemo} from "react";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import moment from 'moment-jalaali';


function useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine(
  {responseData}: Pick<AdminHighRiskIndividualsLettersDetailPageProps, 'responseData'>
) {

  const parseJalaliDate = (date: number | string | null) => {
    if (!date) return null;

    return moment(String(date), 'jYYYYjMMjDD');
  };

  const sortCustomers = (data: AdminHighRiskIndividualsLettersDetailPageResponseType['customers']) => {
    return [...data].sort((a, b) => {
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
  };

  const timeLineHistories: HighRiskIndividualsTimeLineProps['histories'] = useMemo(function () {
    const customers = responseData?.data?.customers
    const isOutCustomers = customers?.filter(customer => customer?.isOut || customer?.isOutValidityDate)
    const sortedIsOutCustomers = sortCustomers(isOutCustomers || [])

    return [
      {
        title: `افزودن ${customers?.length} نفر`,
        subTitle: 'ایجاد لیست',
        date: displayDate(responseData?.data?.letter?.letterDate),
        isGreen: true,
      },
      ...sortedIsOutCustomers.map(item => {
        return {
          title: `خروج با ${item?.isOut ? 'نامه'  : item?.isOutValidityDate ? 'تاریخ اعتبار' : ''}`,
          ...item?.customerId ? {subTitle: item?.customerId} : {},
          // subTitleLink,
          subTitleIcon: RemoveUserIcon,
          date: item?.isOut ? displayDate(item?.letterDate) : item?.isOutValidityDate ? displayDate(item?.validityDate) : '',
          isGreen: false,
        }
      })
    ]
  }, [responseData])

  return {
    timeLineHistories
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine;
