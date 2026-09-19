import {useNavigate} from "react-router";
import {useMemo} from "react";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelIndividualBankingInfoEServicePortalRenderProps
} from "../PanelIndividualBankingInfoEServicePortalRender.tsx";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../../utils/getActivePersonData.ts";
import type {EServicePortalItemResponseType} from "../index.types.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";


function usePanelIndividualBankingInfoEServicePortalRenderLogic(
  {
    isJoint, selectedCustomerNumber
  }: Pick<PanelIndividualBankingInfoEServicePortalRenderProps,
    'isJoint' | 'selectedCustomerNumber'
  >
) {

  const {activePersonData} = getActivePersonData();

  const customerId = isJoint ? selectedCustomerNumber : activePersonData?.customerId

  const {
    data, isFetching, error
  } = useFetchData<EServicePortalItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_SERVICE_PORTAL,
      params: {
        customerId
      }
    }
  })

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    const finalData = data?.data || []

    return finalData?.map((item, index) => ({
      id: item?.portalType,
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.E_SERVICE_PORTAL]: item?.portalTypeTitle,
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.ACTIVATION_DATE]: displayDate(item?.firstDoneDate),
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.STATUS]: item?.lastStatusTitle,
      [PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.LAST_CHANGE_DATE]: displayDate(item?.lastDoneDate),
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ?
            ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_E_SERVICE_PORTAL_DETAIL(item?.portalType) :
            ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_E_SERVICE_PORTAL_DETAIL(item?.portalType)
          const params = {
            [QUERY_PARAMS.NAME]: item?.portalTypeTitle
          }
          navigate(getUrlWithParams(url, params))
        }, 'تاریخچه')
      ],
    }))
  }, [data])

  return {
    tableData, isFetching, error
  }
}

export default usePanelIndividualBankingInfoEServicePortalRenderLogic;
