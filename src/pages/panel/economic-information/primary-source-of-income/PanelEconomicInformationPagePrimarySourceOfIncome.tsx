import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import type {PanelEconomicInformationPrimarySourceOfIncomeResponseType} from "./index.types.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import withSeparator from "../../../../utils/separator/withSeparator.ts";


function PanelEconomicInformationPagePrimarySourceOfIncome() {

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
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.ANNOUNCEMENT_DATE]: item?.announcementDate,
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE]: item?.validityStartDate,
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.TO_DATE]: item?.validityEndDate,
      [PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE]: item?.registrationDate,
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_ECONOMIC_PRIMARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncome;