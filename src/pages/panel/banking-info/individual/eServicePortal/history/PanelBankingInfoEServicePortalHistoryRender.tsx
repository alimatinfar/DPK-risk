import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import {useParams} from "react-router";
import {
  PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import TableRenderLogic from "../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelBankingInfoEServicePortalHistoryRender() {

  const {id} = useParams()

  const eServiceName = useGetQueryParam(QUERY_PARAMS.NAME)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تاریخچه تغییرات ${eServiceName}`} hasBack
      />

      <Card>
        <TableRenderLogic
          renderLogicProps={{
            error: null,
            isLoading: false
          }}
          tableProps={{
            data: PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_FAKE_DATA,
            columns: PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelBankingInfoEServicePortalHistoryRender;
