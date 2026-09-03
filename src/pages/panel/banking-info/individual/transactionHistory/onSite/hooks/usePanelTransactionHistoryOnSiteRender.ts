import {useNavigate} from "react-router";
import {useMemo} from "react";
import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS,
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelTransactionHistoryOnSiteItemResponseType,
  PanelTransactionHistoryPeriodObjectType
} from "../index.types.ts";
import type {
  PanelTransactionHistoryOnSiteMaxCountRenderProps
} from "../PanelTransactionHistoryOnSite.tsx";
import getActivePersonData from "../../../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import getBodyDataDateField from "../../../../../../../request/utils/getBodyDataDateField.ts";
import moment from "moment-jalaali";
import getJalaliMonthName from "../../../../../../../utils/dateAndTIme/momentJalaliDateTime/getJalaliMonthName.ts";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";


function usePanelTransactionHistoryOnSiteRender(
  {isJoint}: Pick<PanelTransactionHistoryOnSiteMaxCountRenderProps, 'isJoint'>
) {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelTransactionHistoryOnSiteItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_MAX_TRANSACTION_HISTORY,
      params: {
        fromDate: getBodyDataDateField(
          moment()
            .startOf("jMonth")
            .subtract(12, "jMonth")
        ),
        toDate: getBodyDataDateField(moment()),
        customerId: activePersonData?.customerId,
      }
    }
  })

  const navigate = useNavigate()

  function getMonthDateRange(year: number, month: number){
    const fromDate = moment(`${year}/${month}/1`, "jYYYY/jM/jD").startOf("day");

    const now = moment();

    const isCurrentMonth =
      now.jYear() === year &&
      now.jMonth() + 1 === month;

    const toDate = isCurrentMonth
      ? now
      : fromDate.clone().endOf("jMonth");

    return {
      fromDate: getFormattedMomentJalaliDateTime({date: fromDate, mode: 'jDate'}),
      toDate: getFormattedMomentJalaliDateTime({date: toDate, mode: 'jDate'}),
    };
  };

  const tableData = useMemo(function () {
    // const finalData = data?.data
    const finalData = PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA
    if (!finalData) return []

    return finalData?.map((item, index) => ({
      id: index + 1,
      [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.MONTH]: `${getJalaliMonthName(item?.month)} ${item?.year}`,
      [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.VISIT_COUNT]: item?.totalCount,
      [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR]: withSeparator(item?.totalCredit),
      [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR]: withSeparator(item?.totalDebit),
      [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL
          const periodDateObject: PanelTransactionHistoryPeriodObjectType = {
            monthName: getJalaliMonthName(item.month),
            ...getMonthDateRange(item?.year, item?.month),
            isCurrentMonth: index === 0
          }
          const params = {
            [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject)
          }
          navigate(getUrlWithParams(url, params))
        }, 'مراجعات به تفکیک شعب')
      ],
    }))
  }, [data])

  return {
    tableData, isFetching, error
  }
}

export default usePanelTransactionHistoryOnSiteRender;
