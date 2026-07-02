import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import type {PanelLegalRepresentativeStatutoryAuditorResponseType} from "../index.types.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS} from "../index.constances.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";

function usePanelLegalRepresentativeInformationPageStatutoryAuditor() {

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
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FIRST_NAME]: item?.firstName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.LAST_NAME]: item?.lastName,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.NATIONAL_CODE]: item?.nationalIDStr,
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.toDate),
    }))
  }, [data])

  return {
    error, isFetching, tableData
  }
}

export default usePanelLegalRepresentativeInformationPageStatutoryAuditor;
