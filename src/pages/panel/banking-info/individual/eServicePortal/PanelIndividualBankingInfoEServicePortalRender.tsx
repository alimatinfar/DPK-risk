import React, {useMemo} from 'react';
import EServicePortalSharedCustomerNumberField, {
  type EServicePortalSharedCustomerNumberFieldProps
} from "./EServicePortalSharedCustomerNumberField.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS, PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS_KEYS,
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import {useNavigate} from "react-router";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../utils/getUrlWithParams.ts";


type Props = {
  isJoint?: boolean;
} & Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber' | 'setSelectedCustomerNumber'>

function PanelIndividualBankingInfoEServicePortalRender(
  {
    selectedCustomerNumber, setSelectedCustomerNumber, isJoint
  }: Props
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

  return (
    <div className='flex flex-col gap-y-4'>
      <EServicePortalSharedCustomerNumberField
        selectedCustomerNumber={selectedCustomerNumber}
        setSelectedCustomerNumber={setSelectedCustomerNumber}
      />

      <Table
        columns={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS}
        data={tableData}
      />
    </div>
  );
}

export default PanelIndividualBankingInfoEServicePortalRender;
