import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS, PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS
} from "./index.constances.tsx";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import ArrowIcon2 from "../../../../../components/svg/ArrowIcon2.tsx";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import type {PanelIndividualBankingInfoAccountResponseType} from "./index.types.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import displayDate from "../../../../../utils/display/displayDate.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../utils/getUrlWithParams.ts";


function PanelIndividualBankingInfoAccount() {

  const navigate = useNavigate()

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<PanelIndividualBankingInfoAccountResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_ACCOUNTS,
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
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.ACCOUNT_SUB_TYPE]: item?.accountSubType,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.SAYYAH_ID]: item?.sayahId,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_DATE]: displayDate(item?.openingDate),
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_PURPOSE]: item?.targetOpening,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.BUSINESS_TYPE]: `${item?.isCommercial ? '' : 'غیر'}تجاری`,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.COMMERCIAL_DATE]: displayDate(item?.commercialDate),
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_CODE]: item?.branchCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_BRANCH_NAME]: item?.branchName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_CODE]: item?.areaCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPEN_REGION_NAME]: item?.areaName,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_PERSONNEL_CODE]: item?.bankPersonnelCode,
      [PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS_KEYS.OPENER_NAME]: item?.bankPersonnelName,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        {
          onClick: () => {
            const params = {
              [QUERY_PARAMS.ACCOUNT_NUMBER_STR]: item?.accountNumberStr
            }
            const url = getUrlWithParams(ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_ACCOUNT_DETAIL(item?.accountNumber), params)
            navigate(url)
          },
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
        columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoAccount;
