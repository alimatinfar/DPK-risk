import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA
} from "./ index.constances.tsx";
import {
  DetailInfoSection2
} from "../../../../../../components/others/DetailInfo/DetailInfoSection2";
import Card from "../../../../../../components/others/Card/Card.tsx";
import usePanelTransactionHistoryByBranchDetailRender from "./hooks/usePanelTransactionHistoryByBranchDetailRender.ts";


function PanelTransactionHistoryByBranchDetailRender() {

  const {
    branchName, infoList
  } = usePanelTransactionHistoryByBranchDetailRender()

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

export default PanelTransactionHistoryByBranchDetailRender;
