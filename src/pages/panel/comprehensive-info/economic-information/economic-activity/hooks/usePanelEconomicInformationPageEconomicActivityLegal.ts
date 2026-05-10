import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import type {PanelEconomicInformationActivityLegalResponseType} from "../index.types.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import {useMemo} from "react";
import {PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS} from "../index.legal.constances.ts";
import displayDate from "../../../../../../utils/dateAndTIme/displayDate.ts";


function usePanelEconomicInformationPageEconomicActivityLegal() {

  const {activePersonData, isLegalBool} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelEconomicInformationActivityLegalResponseType>({
    axiosConfig: {
      url: APIS.GET_ECONOMIC_ACTIVITY_INFO_LEGAL,
      params: {
        customerId: activePersonData?.customerId
      }
    },
    options: {
      enabled: isLegalBool
    }
  })

  const legalTableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.COMPANY_TYPE]:
        item?.companyType,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ACTIVITY_TYPE_OR_FIELD]:
      item?.activatyType,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ACTIVITY_CLASSIFICATION]:
      item?.activityClassification,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ECONOMIC_CODE]:
      item?.economicCode,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.COMMERCIAL_CARD_NUMBER]:
      item?.commercialCardNumber,
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.DECLARATION_DATE]:
      displayDate(item?.announcementDate),
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE]:
      displayDate(item?.validityStartDate),
      [PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE]:
      displayDate(item?.validityEndDate),
    }))

  }, [data])

  return {
    legalTableData, legalLoading: isFetching, legalError: error
  }
}

export default usePanelEconomicInformationPageEconomicActivityLegal;