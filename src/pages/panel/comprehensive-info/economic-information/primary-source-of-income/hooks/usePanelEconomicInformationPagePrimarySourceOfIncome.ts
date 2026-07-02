import {
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelEconomicInformationPrimarySourceOfIncomeResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import withSeparator from "../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import {useMemo} from "react";


function usePanelEconomicInformationPagePrimarySourceOfIncome() {
  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelEconomicInformationPrimarySourceOfIncomeResponseType>({
    axiosConfig: {
      url: APIS.GET_MAIN_INCOME_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_DEPOSIT_MAX]: withSeparator(item?.maxAnnualDepositAmount),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNUAL_WITHDRAWAL_MAX]: withSeparator(item?.maxAnnualwithdrawalAmount),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.PER_TRANSACTION_MAX]: withSeparator(item?.maxAmountOfEachTran),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.MAIN_INCOME_MAX]: withSeparator(item?.maxAmountOfIncomeFromMainJob),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TRANSACTION_ORIGIN_DEST]: item?.expectedTranOriginAndDestinTypes,
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNOUNCEMENT_DATE]: displayDate(item?.announcementDate),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.validityStartDate),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.validityEndDate),
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE]: displayDate(item?.registrationDate),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelEconomicInformationPagePrimarySourceOfIncome;
