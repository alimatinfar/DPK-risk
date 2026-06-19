import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import {useParams} from "react-router";
import Table from "../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";


function PanelIndividualBankingInfoEServicePortalHistory() {

  const {id} = useParams()

  const eServiceName = useGetQueryParam(QUERY_PARAMS.NAME)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تاریخچه تغییرات ${eServiceName}`} hasBack
      />

      <Card>
        <Table
          columns={PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_COLUMNS}
          data={PANEL_INDIVIDUAL_STATUS_HISTORY_TABLE_FAKE_DATA}
        />
      </Card>
    </div>
  );
}

export default PanelIndividualBankingInfoEServicePortalHistory;
