import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS
} from "../statutoryAuditor/index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import type {PanelLegalRepresentativeLegalInspectorResponseType} from "./index.types.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import displayDate from "../../../../../utils/display/displayDate.ts";


function PanelLegalRepresentativeInformationPageLegalInspector() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeLegalInspectorResponseType>({
    axiosConfig: {
      url: APIS.GET_LEGAL_INSPECTOR_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FIRST_NAME]: item?.firstName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.LAST_NAME]: item?.lastName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.NATIONAL_CODE]: item?.nationalIDStr,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.toDate),
    }))
  }, [data])

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageLegalInspector;
