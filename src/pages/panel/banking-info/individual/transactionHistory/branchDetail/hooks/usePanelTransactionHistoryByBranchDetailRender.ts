import {
  type DetailInfoSection2Props
} from "../../../../../../../components/others/DetailInfo/DetailInfoSection2";
import {useMemo} from "react";
import type {TransactionHistoryBranchObjectType} from "../../periodDetail/index.types.ts";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import {useParams} from "react-router";

function usePanelTransactionHistoryByBranchDetailRender() {

  const {branchId} = useParams()

  const periodDateObject = useGetTransactionHistoryPeriodDateObject()
  const {monthName, fromDate, toDate} = periodDateObject

  const branchObject = useGetQueryParam(QUERY_PARAMS.BRANCH_OBJECT)
  const {
    branchName, branchCode, regionCode, regionName
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
        value: regionCode,
      },
      {
        label: 'نام منطقه',
        value: regionName,
      },
    ]
  }, [monthName, fromDate, toDate, branchName, branchCode, regionCode, regionName])

  return {
    branchName, infoList
  }
}

export default usePanelTransactionHistoryByBranchDetailRender;
