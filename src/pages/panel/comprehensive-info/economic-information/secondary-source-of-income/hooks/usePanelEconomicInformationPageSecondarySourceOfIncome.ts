import {
  PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import React, {useMemo} from "react";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelEconomicInformationSecondarySourceOfIncomeResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import withSeparator from "../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";

function usePanelEconomicInformationPageSecondarySourceOfIncome() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelEconomicInformationSecondarySourceOfIncomeResponseType>({
    axiosConfig: {
      url: APIS.GET_SECONDARY_INCOME_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.INCOME_SOURCE_TITLE]:
      item?.sourceOfIncomeTitle,
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_INCOME_MAX]:
        withSeparator(item?.maxAnnualIncomeAmount),
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TRANSACTION_ORIGIN_DEST]:
      item?.expectedTranOriginAndDestinTypes,
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNOUNCEMENT_DATE]:
        displayDate(item?.announcementDate),
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE]:
        displayDate(item?.validityStartDate),
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TO_DATE]:
        displayDate(item?.validityEndDate),
      [PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE]:
        displayDate(item?.registrationDate),
    }))

  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelEconomicInformationPageSecondarySourceOfIncome;
