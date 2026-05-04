import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS
} from "../statutoryAuditor/index.constances.ts";
import Table from "../../../../components/others/Table/Table.tsx";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import {useMemo} from "react";
import type {PanelLegalRepresentativeLegalInspectorResponseType} from "./index.types.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";


function PanelLegalRepresentativeInformationPageLegalInspector() {

  const {getActivePersonNationalId} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeLegalInspectorResponseType>({
    axiosConfig: {
      url: APIS.GET_LEGAL_INSPECTOR_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: '50005678',
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FIRST_NAME]: 'مریم',
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.LAST_NAME]: 'جعفری',
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.NATIONAL_CODE]: '0998877665',
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FROM_DATE]: '2023-01-01',
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.TO_DATE]: '-',
    }))
  }, [data])

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageLegalInspector;