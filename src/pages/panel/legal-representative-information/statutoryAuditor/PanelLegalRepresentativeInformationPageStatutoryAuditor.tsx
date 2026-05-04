import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS
} from "./index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import {useMemo} from "react";
import type {PanelLegalRepresentativeStatutoryAuditorResponseType} from "./index.types.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";


function PanelLegalRepresentativeInformationPageStatutoryAuditor() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeStatutoryAuditorResponseType>({
    axiosConfig: {
      url: APIS.GET_STATUTORY_AUDITOR_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FIRST_NAME]: item?.firstName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.LAST_NAME]: item?.lastName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.NATIONAL_CODE]: item?.nationalID,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FROM_DATE]: item?.fromDate,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.TO_DATE]: item?.toDate,
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

export default PanelLegalRepresentativeInformationPageStatutoryAuditor;