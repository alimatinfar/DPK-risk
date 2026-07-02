import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS} from "./index.constances.ts";
import usePanelTransactionHistoryEServiceDetailRender from "./hooks/usePanelTransactionHistoryEServiceDetailRender.ts";


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
        <Table
          columns={PANEL_TRANSACTION_HISTORY_E_SERVICE_TABLE_COLUMNS}
          data={tableData}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServiceDetailRender;
