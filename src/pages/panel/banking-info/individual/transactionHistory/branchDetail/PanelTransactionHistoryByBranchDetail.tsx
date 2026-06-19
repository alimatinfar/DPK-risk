import React, {useMemo} from 'react';
import {useParams} from "react-router";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA
} from "./ index.constances.tsx";
import {
  DetailInfoSection2,
  type DetailInfoSection2Props
} from "../../../../../../components/others/DetailInfo/DetailInfoSection2";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import type {TransactionHistoryBranchObjectType} from "../periodDetail/index.types.ts";


function PanelTransactionHistoryByBranchDetail() {

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

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`لیست تراکنش‌های شعبه ${branchName}`} hasBack
      />

      <Card className='flex flex-col gap-y-4'>
        <DetailInfoSection2 infoList={infoList}/>

        <Table
          columns={PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS}
          data={PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByBranchDetail;
