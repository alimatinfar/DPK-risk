import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS
} from "./index.constances.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import usePanelTransactionHistoryByPeriodDetailRender from "./hooks/usePanelTransactionHistoryByPeriodDetailRender.ts";


export type PanelTransactionHistoryByPeriodDetailRenderProps = {
  isJoint?: boolean
}

function PanelTransactionHistoryByPeriodDetailRender(
  {isJoint}: PanelTransactionHistoryByPeriodDetailRenderProps
) {

  const {
    monthName, isCurrentMonth, tableData
  } = usePanelTransactionHistoryByPeriodDetailRender({
    isJoint
  })

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`مجموع تراکنش‌های ${`${monthName}${isCurrentMonth ? ' (ماه جاری)' : ''}`} به تفکیک شعب`} hasBack
      />

      <Card>
        <Table
          columns={PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS}
          data={tableData}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByPeriodDetailRender;
