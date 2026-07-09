import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA
} from "./ index.constances.tsx";
import {
  DetailInfoSection2
} from "../../../../../../components/others/DetailInfo/DetailInfoSection2";
import Card from "../../../../../../components/others/Card/Card.tsx";
import usePanelTransactionHistoryByBranchDetailRender from "./hooks/usePanelTransactionHistoryByBranchDetailRender.ts";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


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

        <TableRenderLogic
          renderLogicProps={{
            error: null,
            isLoading: false
          }}
          tableProps={{
            data: PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_FAKE_DATA,
            columns: PANEL_TRANSACTION_HISTORY_BY_BRANCH_DETAIL_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByBranchDetailRender;
