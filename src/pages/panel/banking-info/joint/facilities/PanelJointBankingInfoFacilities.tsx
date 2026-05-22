import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_JOINT_FACILITIES_TABLE_COLUMNS,
  PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS
} from "./index.constances.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import withSeparator from "../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import type {PanelJointBankingInfoFacilitiesResponseType} from "./index.types.ts";


function PanelJointBankingInfoFacilities() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelJointBankingInfoFacilitiesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_SHARE_FACILITIES,
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
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.SHARED_CUSTOMER_NUMBER]: item?.shareCustomerIdStr,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_NUMBER]: item?.number,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_AMOUNT]: withSeparator(item?.amount),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.TOTAL_FACILITY_AMOUNT]: withSeparator(item?.totalAmount),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.INTEREST_RATE]: `${item?.interestRate}%`,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.PAID_AMOUNT]: withSeparator(item?.paidAmount),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.REMAINING_AMOUNT]: withSeparator(item?.remain),
      // // TODO display tag instead only value
      // [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.STATUS]: item?.status,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_TYPE]: item?.facilitiesType,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_SUB_TYPE]: item?.subFacilities,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.ALLOCATION_DATE]: displayDate(item?.allocationDate),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.END_DATE]: displayDate(item?.endDate),
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_BRANCH_CODE]: item?.branchCode,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_BRANCH_NAME]: item?.branchName,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_REGION_CODE]: item?.areaCode,
      [PANEL_JOINT_FACILITIES_TABLE_COLUMNS_KEYS.FACILITY_REGION_NAME]: item?.areaName,
    }))
  }, [data])


  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_JOINT_FACILITIES_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoFacilities;
