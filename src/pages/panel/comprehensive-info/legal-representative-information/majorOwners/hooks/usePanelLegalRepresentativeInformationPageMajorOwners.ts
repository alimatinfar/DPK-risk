import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelLegalRepresentativeInfoMajorOwnersResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS} from "../index.constances.ts";
import displayAvailableValues from "../../../../../../utils/display/displayAvailableValues.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";

function usePanelLegalRepresentativeInformationPageMajorOwners() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInfoMajorOwnersResponseType>({
    axiosConfig: {
      url: APIS.GET_MAJOR_OWNERS_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: item?.personalityType,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationalityTitle,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.companyName),
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: item?.nationalIDStr,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS]: item?.managementStatus,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CAPITAL_AMOUNT]: item?.capitalAmount,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.OWNERSHIP_PERCENTAGE]: item?.ownershipPercentage,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.toDate),
    }))
  }, [data])

  return {
    error, isFetching, tableData
  }
}

export default usePanelLegalRepresentativeInformationPageMajorOwners;
