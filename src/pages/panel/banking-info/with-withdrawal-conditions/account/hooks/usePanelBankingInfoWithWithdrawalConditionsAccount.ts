import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS
} from "../../../individual/account/index.constances.tsx";
import {useMemo} from "react";
import type {PanelBankingInfoWithWithdrawalConditionsAccountResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";

function usePanelBankingInfoWithWithdrawalConditionsAccount() {

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
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS]: item?.accountStatusTitle,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_SUB_TYPE]: item?.accountSubTypeTitle,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SAYYAH_ID]: item?.sayahId,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_DATE]: displayDate(item?.openingDate),
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_PURPOSE]: item?.targetOpening,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.BUSINESS_TYPE]: item?.isCommercialTitle,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_CODE]: item?.branchCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_NAME]: item?.branchName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_CODE]: item?.areaCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_NAME]: item?.areaName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_NAME]: item?.bankPersonnelName,
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelBankingInfoWithWithdrawalConditionsAccount;
