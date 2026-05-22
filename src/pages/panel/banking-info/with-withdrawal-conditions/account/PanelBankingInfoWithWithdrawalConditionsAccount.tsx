import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS, PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS
} from "../../individual/account/index.constances.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import displayDate from "../../../../../utils/display/displayDate.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {PanelBankingInfoWithWithdrawalConditionsAccountResponseType} from "./index.types.ts";

function PanelBankingInfoWithWithdrawalConditionsAccount() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelBankingInfoWithWithdrawalConditionsAccountResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_SPECIAL_CONDITIONS_ACCOUNTS,
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
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_NUMBER]: item?.accountNumberStr,
      // TODO display tag instead only value
      // [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS]: item?.accountStatus,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_SUB_TYPE]: item?.accountSubType,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SAYYAH_ID]: item?.sayahId,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_DATE]: displayDate(item?.openingDate),
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_PURPOSE]: item?.targetOpening,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.BUSINESS_TYPE]: `${item?.isCommercial ? '' : 'غیر'}تجاری`,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_CODE]: item?.branchCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_NAME]: item?.branchName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_CODE]: item?.areaCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_NAME]: item?.areaName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_NAME]: item?.bankPersonnelName,
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelBankingInfoWithWithdrawalConditionsAccount;
