import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelLegalRepresentativeInfoShareholdersResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS} from "../index.constances.ts";
import displayAvailableValues from "../../../../../../utils/display/displayAvailableValues.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";

function usePanelLegalRepresentativeInformationPageShareholders() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInfoShareholdersResponseType>({
    axiosConfig: {
      url: APIS.GET_SHAREHOLDERS_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: item?.personalityType,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationalityTitle,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.companyName),
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: item?.nationalIDStr,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS]: item?.managementStatus,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NUMBER_OF_SHARES]: item?.sharesNumber,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.SHARE_PERCENTAGE]: item?.percentageOfTotalShares,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.toDate),
    }))
  }, [data])

  return {
    error, isFetching, tableData
  }
}

export default usePanelLegalRepresentativeInformationPageShareholders;
