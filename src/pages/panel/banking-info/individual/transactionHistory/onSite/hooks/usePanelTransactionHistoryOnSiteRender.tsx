import {useNavigate} from "react-router";
import {useMemo} from "react";
import {
  PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS,
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../../components/others/Table/constances/tableAccessors.ts";
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
import getJalaliMonthName from "../../../../../../../utils/dateAndTIme/momentJalaliDateTime/getJalaliMonthName.ts";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";
import BankIcon from "../../../../../../../components/svg/BankIcon.tsx";
import AmountIcon from "../../../../../../../components/svg/AmountIcon.tsx";
import getMonthDateRangeQueryParams from "../../utils/getMonthDateRangeQueryParams.ts";
import getPrevYearDateRange from "../../utils/getPrevYearDateRange.ts";


function usePanelTransactionHistoryOnSiteRender(
  {
    isJoint, selectedCustomerNumber
  }: Pick<PanelTransactionHistoryOnSiteMaxCountRenderProps, 'isJoint' | 'selectedCustomerNumber'>
) {

  const {activePersonData} = getActivePersonData();

  const customerId = isJoint ? selectedCustomerNumber?.id : activePersonData?.customerId

  const isJointAndHasNotSelectedCustomerNumber = isJoint && !selectedCustomerNumber

  const {
    data, isFetching, error
  } = useFetchData<PanelTransactionHistoryOnSiteItemResponseType[]>({
    queryKey: [customerId],
    axiosConfig: {
      url: APIS.BANK_INFO_GET_MAX_TRANSACTION_HISTORY,
      params: {
        ...getPrevYearDateRange(),
        customerId,
      }
    },
    options: {
      enabled: !isJointAndHasNotSelectedCustomerNumber
    }
  })

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    const finalData = data?.data
    // const finalData = PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_FAKE_DATA
    if (!finalData) return []

    return finalData?.map((item, index) => {

      const getDetailLink = (isMaxCount: boolean) => {
        const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_TRANSACTION_HISTORY_PERIOD_DETAIL
        const periodDateObject: PanelTransactionHistoryPeriodObjectType = {
          monthName: getJalaliMonthName(item.month),
          year: item?.year,
          ...getMonthDateRangeQueryParams(item?.year, item?.month),
        }

        const params = {
          [QUERY_PARAMS.PERIOD_DATE_OBJECT]: JSON.stringify(periodDateObject),
          [QUERY_PARAMS.CUSTOMER_ID]: customerId,
          [QUERY_PARAMS.IS_MAX_COUNT]: isMaxCount
        }
        return getUrlWithParams(url, params)
      }

      return {
        id: index + 1,
        [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.MONTH]: `${getJalaliMonthName(item?.month)} ${item?.year}`,
        [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.VISIT_COUNT]: item?.totalCount,
        [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_CREDITOR]: withSeparator(item?.totalCredit),
        [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.TOTAL_DEBTOR]: withSeparator(item?.totalDebit),
        [PANEL_INDIVIDUAL_TRANSACTION_HISTORY_ONSITE_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
        [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
          {
            onClick: () => {
              navigate(getDetailLink(true))
            },
            icon: <BankIcon width='100%' height='100%' textColor='text-black'/>,
            title: 'مراجعات به تفکیک شعب بر اساس بیشترین تعداد',
          },
          {
            onClick: () => {
              navigate(getDetailLink(false))
            },
            icon: <AmountIcon width='100%' height='100%' textColor='text-black'/>,
            title: 'مراجعات به تفکیک شعب بر اساس بیشترین مبلغ',
          },
        ],
      }
    })
  }, [data])

  return {
    tableData, isFetching, error
  }
}

export default usePanelTransactionHistoryOnSiteRender;
