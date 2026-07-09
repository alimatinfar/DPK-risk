import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_FAKE_DATA
} from "./index.constances.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


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
        <TableRenderLogic
          renderLogicProps={{
            error: null,
            isLoading: false
          }}
          tableProps={{
            data: PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_FAKE_DATA,
            columns: PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServicePeriodDetailRender;
