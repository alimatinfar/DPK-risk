import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "./index.constances.ts";


function PanelTransactionHistoryEServicePeriodDetailRender() {

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)

  const {
    isCurrentMonth, monthName
  } = useGetTransactionHistoryPeriodDateObject()

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel} ${`${monthName}${isCurrentMonth ? ' (ماه جاری)' : ''}`}`} hasBack
      />

      <Card>
        <Table
          columns={PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS}
          data={PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_FAKE_DATA}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServicePeriodDetailRender;
