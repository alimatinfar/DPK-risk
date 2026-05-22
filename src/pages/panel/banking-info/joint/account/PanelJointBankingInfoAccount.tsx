import Table from "../../../../../components/others/Table/Table.tsx";
import {useNavigate} from "react-router";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import ArrowIcon2 from "../../../../../components/svg/ArrowIcon2.tsx";
import {
  PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS, PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS,
} from "./index.constances.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import type {PanelJointBankingInfoAccountResponseType} from "./index.types.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import {PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS} from "../../individual/account/index.constances.tsx";

function PanelJointBankingInfoAccount() {

  const {activePersonData} = getActivePersonData();

  const navigate = useNavigate()

  const {
    data, isFetching, error
  } = useFetchData<PanelJointBankingInfoAccountResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_SHARE_ACCOUNTS,
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
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SHARED_CUSTOMER_NUMBER]: item?.shareCustomerId,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_NUMBER]: item?.accountNumber,
      // TODO set tag for this field instead only value
      // [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS]:
      //   <Tag text='فعال' color='green' variant='fade'/>
      // ,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_STATUS]: item?.accountStatus,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_SUB_TYPE]: item?.accountSubType,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SAYYAH_ID]: item?.sayahId,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_DATE]: displayDate(item?.openingDate),
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_PURPOSE]: item?.targetOpening,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.BUSINESS_TYPE]: `${item?.isCommercial ? '' : 'غیر'}تجاری`,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.COMMERCIAL_DATE]: displayDate(item?.commercialDate),
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_CODE]: item?.branchCode,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_NAME]: item?.branchName,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_CODE]: item?.areaCode,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_NAME]: item?.areaName,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_NAME]: item?.bankPersonnelName,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        {
          onClick: () => navigate(ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_ACCOUNT_DETAIL(item?.accountNumber)),
          icon: <ArrowIcon2 width='100%' height='100%' />,
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
      columns={PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoAccount;
