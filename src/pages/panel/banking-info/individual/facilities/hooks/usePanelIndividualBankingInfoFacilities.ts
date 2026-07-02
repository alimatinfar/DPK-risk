import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelIndividualBankingInfoFacilitiesResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS} from "../index.constances.tsx";
import withSeparator from "../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";


function usePanelIndividualBankingInfoFacilities() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelIndividualBankingInfoFacilitiesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_FACILITIES,
      method: "POST",
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_NUMBER]: item?.number,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_AMOUNT]: withSeparator(item?.amount),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.TOTAL_FACILITY_AMOUNT]: withSeparator(item?.totalAmount),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.INTEREST_RATE]: `${item?.interestRate}%`,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.PAID_AMOUNT]: withSeparator(item?.paidAmount),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.REMAINING_AMOUNT]: withSeparator(item?.remain),
      // TODO display tag instead only value
      // [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.STATUS]: item?.status,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_TYPE]: item?.facilitiesType,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_SUB_TYPE]: item?.subFacilities,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.ALLOCATION_DATE]: displayDate(item?.allocationDate),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.END_DATE]: displayDate(item?.endDate),
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_BRANCH_CODE]: item?.branchCode,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_BRANCH_NAME]: item?.branchName,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_REGION_CODE]: item?.areaCode,
      [PANEL_INDIVIDUAL_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_REGION_NAME]: item?.areaName,
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelIndividualBankingInfoFacilities;
