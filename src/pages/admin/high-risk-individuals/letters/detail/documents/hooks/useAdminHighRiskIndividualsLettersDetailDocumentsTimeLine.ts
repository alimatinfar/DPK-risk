import type {HighRiskIndividualsTimeLineProps} from "../../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import RemoveUserIcon from "../../../../../../../components/svg/RemoveUserIcon.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailPageProps, AdminHighRiskIndividualsLettersDetailPageResponseType
} from "../../index.types.ts";
import {useMemo} from "react";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import sortCustomersForTimeLine from "../../HighRiskIndividualsTimeLine/utils/sortCustomersForTimeLine.ts";


function useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine(
  {responseData}: Pick<AdminHighRiskIndividualsLettersDetailPageProps, 'responseData'>
) {

  const timeLineHistories: HighRiskIndividualsTimeLineProps['histories'] = useMemo(function () {
    const customers = responseData?.data?.customers
    const isOutCustomers = customers?.filter(customer => customer?.isOut || customer?.isOutValidityDate)
    const sortedIsOutCustomers = sortCustomersForTimeLine(isOutCustomers || []) as AdminHighRiskIndividualsLettersDetailPageResponseType['customers']

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
