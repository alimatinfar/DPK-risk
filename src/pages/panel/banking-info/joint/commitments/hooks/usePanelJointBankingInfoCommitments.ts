import {useNavigate} from "react-router";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {PanelJointBankingInfoCommitmentsResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS} from "../index.constances.tsx";
import withSeparator from "../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";

function usePanelJointBankingInfoCommitments() {

  const navigate = useNavigate()

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelJointBankingInfoCommitmentsResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_SHARE_OBLIGATIONS,
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
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.SHARED_CUSTOMER_NUMBER]: item?.shareCustomerIdStr,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.INDIRECT_COMMITMENT]: item?.indirectObligations,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_NUMBER]: item?.obligationsNo,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.PRINCIPAL_AMOUNT]: withSeparator(item?.obligationsAmount),
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.TOTAL_AMOUNT]: withSeparator(item?.obligationsTotalAmount),
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.INTEREST_RATE]: `${item?.interestRate}%`,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_TYPE]: item?.obligationsType,
      // // TODO display tag instead only value
      // [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.STATUS]: item?.status,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.CENTRAL_BANK_CONTRACT_NUMBER]: item?.centralBankNumber,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.ALLOCATION_DATE]: displayDate(item?.allocationDate),
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.END_DATE]: displayDate(item?.endDate),
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_CODE]: item?.branchCode,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item?.branchName,
      [PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS_KEYS.REGION_NAME]: item?.areaName,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          navigate(ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_COMMITMENTS_DETAIL(item?.obligationsNo))
        })
      ],
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default usePanelJointBankingInfoCommitments;
