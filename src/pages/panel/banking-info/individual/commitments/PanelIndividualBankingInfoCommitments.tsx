import Table from "../../../../../components/others/Table/Table.tsx";
import {
  INDIRECT_COMMITMENT_KEYS,
  PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS, PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS,
} from "./index.constances.tsx";
import {useNavigate} from "react-router";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import ArrowIcon2 from "../../../../../components/svg/ArrowIcon2.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import type {PanelIndividualBankingInfoCommitmentsResponseType} from "./index.types.ts";
import withSeparator from "../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";


function PanelIndividualBankingInfoCommitments() {

  const navigate = useNavigate()

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelIndividualBankingInfoCommitmentsResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_OBLIGATIONS,
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
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.INDIRECT_COMMITMENT]: INDIRECT_COMMITMENT_KEYS?.[item?.indirectObligations ? 1 : 0],
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_NUMBER]: item?.obligationsNo,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.PRINCIPAL_AMOUNT]: withSeparator(item?.obligationsAmount),
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.TOTAL_AMOUNT]: withSeparator(item?.obligationsTotalAmount),
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.INTEREST_RATE]: `${item?.interestRate}%`,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.COMMITMENT_TYPE]: item?.obligationsType,
      // TODO display tag instead only value
      // [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.STATUS]: (
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ),
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.STATUS]: item?.status,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.CENTRAL_BANK_CONTRACT_NUMBER]: item?.centralBankNumber,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.ALLOCATION_DATE]: displayDate(item?.allocationDate),
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.END_DATE]: displayDate(item?.endDate),
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_CODE]: item?.branchCode,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item?.branchName,
      [PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS_KEYS.REGION_NAME]: item?.areaName,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        {
          onClick: () => navigate(ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_COMMITMENTS_DETAIL(item?.obligationsNo)),
          icon: <ArrowIcon2 width='100%' height='100%'/>,
          title: 'جزئیات',
        }
      ],
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_COMMITMENTS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoCommitments;
