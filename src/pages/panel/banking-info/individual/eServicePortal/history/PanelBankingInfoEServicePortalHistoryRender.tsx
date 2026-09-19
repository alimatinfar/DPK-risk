import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import {
  PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS,
} from "./index.constances.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import usePanelBankingInfoEServicePortalHistoryRender from "./hooks/usePanelBankingInfoEServicePortalHistoryRender.ts";


function PanelBankingInfoEServicePortalHistoryRender() {

  const {
    error, isFetching, tableData, eServiceName
  } = usePanelBankingInfoEServicePortalHistoryRender()

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تاریخچه تغییرات ${eServiceName}`} hasBack
      />

      <Card>
        <TableRenderLogic
          renderLogicProps={{
            error,
            isLoading: isFetching
          }}
          tableProps={{
            data: tableData,
            columns: PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelBankingInfoEServicePortalHistoryRender;
