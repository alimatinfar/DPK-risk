import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS} from "./index.constances.ts";
import usePanelTransactionHistoryEServiceDetailRender from "./hooks/usePanelTransactionHistoryEServiceDetailRender.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


export type PanelTransactionHistoryEServiceDetailRenderProps = {
  isJoint?: boolean;
}

function PanelTransactionHistoryEServiceDetailRender(
  {isJoint}: PanelTransactionHistoryEServiceDetailRenderProps
) {

  const {
    eServiceLabel, tableData
  } = usePanelTransactionHistoryEServiceDetailRender({
    isJoint
  })

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel}`} hasBack
      />

      <Card>
        <TableRenderLogic
          renderLogicProps={{
            error: null,
            isLoading: false
          }}
          tableProps={{
            data: tableData,
            columns: PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServiceDetailRender;
