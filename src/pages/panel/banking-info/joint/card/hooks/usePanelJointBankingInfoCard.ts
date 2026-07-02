import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelJointBankingInfoCardResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS} from "../index.constances.tsx";
import displayDate from "../../../../../../utils/display/displayDate.ts";


function usePanelJointBankingInfoCard() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelJointBankingInfoCardResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_SHARE_CARDS,
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
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_NUMBER]: item?.cardNumber,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_ACCOUNT_NUMBER]: item?.cardAccount,
      // TODO set tag for this field instead only value
      // [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_STATUS]: item?.cardStateTitle,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.CARD_TYPE]: item?.cardTypeTitle,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_DATE]: displayDate(item?.issueDate),
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.EXPIRY_DATE]: displayDate(item?.expirDate),
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_BRANCH_CODE]: item?.branchCode,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_BRANCH_NAME]: item?.branchName,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_REGION_CODE]: item?.areaCode,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUE_REGION_NAME]: item?.areaName,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUER_PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_JOINT_CARD_INFO_TABLE_COLUMNS_KEYS.ISSUER_NAME]: item?.bankPersonnelName,
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelJointBankingInfoCard;
