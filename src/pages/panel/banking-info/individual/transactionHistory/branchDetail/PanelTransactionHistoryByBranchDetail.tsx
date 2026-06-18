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


function PanelTransactionHistoryByBranchDetail() {

  const {branchId} = useParams()

  const infoList: DetailInfoSection2Props['infoList'] = useMemo(function () {
    return [
      {
        label: 'کد شعبه',
        value: '123',
      },
      {
        label: 'نام شعبه',
        value: 'مرکزی',
      },
      {
        label: 'کد منطقه',
        value: '65461',
      },
      {
        label: 'نام منطقه',
        value: 'کریم خان',
      },
    ]
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`شعبه‌ی ${branchId}`} hasBack
      />

      <Card className='flex flex-col gap-y-4'>
        <DetailInfoSection2 infoList={infoList} />

        <Table
          columns={PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS}
          data={PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByBranchDetail;
