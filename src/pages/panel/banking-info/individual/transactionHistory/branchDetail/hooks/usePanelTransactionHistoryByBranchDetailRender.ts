import {
  type DetailInfoSection2Props
} from "../../../../../../../components/others/DetailInfo/DetailInfoSection2";
import {useMemo} from "react";
import type {
  TransactionHistoryBranchObjectType
} from "../../periodDetail/index.types.ts";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {PanelTransactionHistoryByBranchDetailItemResponseType} from "../index.types.ts";
import {
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS,
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA
} from "../ index.constances.tsx";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";

function usePanelTransactionHistoryByBranchDetailRender() {

  const {branchId} = useParams()

  const customerId = useGetQueryParam(QUERY_PARAMS.CUSTOMER_ID)
  const periodDateObject = useGetTransactionHistoryPeriodDateObject()
  const {monthName, fromDate, toDate} = periodDateObject
  console.log({fromDate, toDate})

  const branchObject = useGetQueryParam(QUERY_PARAMS.BRANCH_OBJECT)
  const {
    branchName, branchCode, areaCode, areaName
  } = (branchObject ? JSON.parse(branchObject) : {}) as unknown as TransactionHistoryBranchObjectType

  const infoList: DetailInfoSection2Props['infoList'] = useMemo(function () {
    return [
      {
        label: 'بازه تاریخی تراکنش‌ها',
        value: monthName,
      },
      {
        label: 'از تاریخ',
        value: fromDate,
      },
      {
        label: 'تا تاریخ',
        value: toDate,
      },
      {
        label: 'کد شعبه',
        value: branchCode,
      },
      {
        label: 'نام شعبه',
        value: branchName,
      },
      {
        label: 'کد منطقه',
        value: areaCode,
      },
      {
        label: 'نام منطقه',
        value: areaName,
      },
    ]
  }, [monthName, fromDate, toDate, branchName, branchCode, areaCode, areaName])

  const {
    data, isFetching, error
  } = useFetchData<PanelTransactionHistoryByBranchDetailItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_TRANSACTION_HISTORY_BRANCH_DETAIL_INFO,
      params: {
        customerId,
        branchCode: branchId,
        fromDate,
        toDate
      }
    }
  })

  const tableData = useMemo(function () {
    // const finalData = PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA
    const finalData = data?.data
    if (!finalData) return []

    return finalData?.map((item, index) => ({
      id: index,
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.ACCOUNT_NUMBER]: item?.accountNumber,
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.OPERATION_TYPE]: item?.operationType,
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.CREDITOR_AMOUNT]: withSeparator(item?.totalCredit),
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.DEBTOR_AMOUNT]: withSeparator(item?.totalDebit),
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.FIRST_NAME]: item?.firstName,
      [PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS_KEYS.LAST_NAME]: item?.lastName,
    }))
  }, [data])

  return {
    branchName, infoList, tableData, isFetching, error
  }
}

export default usePanelTransactionHistoryByBranchDetailRender;
