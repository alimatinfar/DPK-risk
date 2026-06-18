import React from 'react';
import EServicePortalSharedCustomerNumberField, {
  type EServicePortalSharedCustomerNumberFieldProps
} from "./EServicePortalSharedCustomerNumberField.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA
} from "./index.constances.tsx";

function PanelIndividualBankingInfoEServicePortalRender(
  {
    selectedCustomerNumber, setSelectedCustomerNumber
  }: Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber' | 'setSelectedCustomerNumber'>
) {
  return (
    <div className='flex flex-col gap-y-4'>
      <EServicePortalSharedCustomerNumberField
        selectedCustomerNumber={selectedCustomerNumber}
        setSelectedCustomerNumber={setSelectedCustomerNumber}
      />

      <Table
        columns={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS}
        data={PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_FAKE_DATA}
      />
    </div>
  );
}

export default PanelIndividualBankingInfoEServicePortalRender;
