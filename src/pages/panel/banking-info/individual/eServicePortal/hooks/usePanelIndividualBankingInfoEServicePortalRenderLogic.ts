import {useNavigate} from "react-router";
import {useMemo} from "react";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS,
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA
} from "../index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../../constances/routerLinks.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../../utils/getUrlWithParams.ts";
import type {
  PanelIndividualBankingInfoEServicePortalRenderProps
} from "../PanelIndividualBankingInfoEServicePortalRender.tsx";

function usePanelIndividualBankingInfoEServicePortalRenderLogic(
  {isJoint}: Pick<PanelIndividualBankingInfoEServicePortalRenderProps, 'isJoint'>
) {

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    return PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = isJoint ? ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_E_SERVICE_PORTAL_DETAIL(item?.id) : ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION_E_SERVICE_PORTAL_DETAIL(item?.id)
          const params = {
            [QUERY_PARAMS.NAME]: item[PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS.E_SERVICE_PORTAL]
          }
          navigate(getUrlWithParams(url, params))
        }, 'تاریخچه')
      ],
    }))
  }, [])

  return {
    tableData
  }
}

export default usePanelIndividualBankingInfoEServicePortalRenderLogic;
