import {
  PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelLegalRepresentativeBoardMembersResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import displayAvailableValues from "../../../../../../utils/display/displayAvailableValues.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import {useMemo} from "react";

function usePanelLegalRepresentativeInformationPageBoardMembers() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeBoardMembersResponseType>({
    axiosConfig: {
      url: APIS.GET_BOARD_MEMBERS_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: item?.personalityType,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationalityTitle,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.companyName),
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: item?.nationalIDStr,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_POSITION]: item?.boardPosition,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_START_DATE]: displayDate(item?.boardStartDate),
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_END_DATE]: displayDate(item?.boardEndDate),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelLegalRepresentativeInformationPageBoardMembers;
