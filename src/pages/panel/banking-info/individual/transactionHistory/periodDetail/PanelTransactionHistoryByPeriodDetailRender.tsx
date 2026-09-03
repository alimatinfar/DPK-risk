import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import {
  PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS
} from "./index.constances.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import usePanelTransactionHistoryByPeriodDetailRender from "./hooks/usePanelTransactionHistoryByPeriodDetailRender.tsx";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


export type PanelTransactionHistoryByPeriodDetailRenderProps = {
  isJoint?: boolean
}

function PanelTransactionHistoryByPeriodDetailRender(
  {isJoint}: PanelTransactionHistoryByPeriodDetailRenderProps
) {

  const {
    monthName, year, tableData, isFetching, error, isMaxCount
  } = usePanelTransactionHistoryByPeriodDetailRender({
    isJoint
  })

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`مجموع تراکنش‌های ${monthName} ${year} به تفکیک شعب بر اساس ${isMaxCount ? 'تعداد' : 'مبلغ'}`} hasBack
      />

      <Card>
        <TableRenderLogic
          renderLogicProps={{
            error,
            isLoading: isFetching
          }}
          tableProps={{
            data: tableData,
            columns: PANEL_TRANSACTION_HISTORY_BY_PERIOD_DETAIL_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryByPeriodDetailRender;
