import EServicePortalSharedCustomerNumberField, {
  type EServicePortalSharedCustomerNumberFieldProps
} from "./EServicePortalSharedCustomerNumberField.tsx";
import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoEServicePortalRenderLogic
  from "./hooks/usePanelIndividualBankingInfoEServicePortalRenderLogic.ts";


export type PanelIndividualBankingInfoEServicePortalRenderProps = {
  isJoint?: boolean;
} & Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber' | 'setSelectedCustomerNumber'>

function PanelIndividualBankingInfoEServicePortalRender(
  {
    selectedCustomerNumber, setSelectedCustomerNumber, isJoint
  }: PanelIndividualBankingInfoEServicePortalRenderProps
) {

  const {
    tableData
  } = usePanelIndividualBankingInfoEServicePortalRenderLogic({
    isJoint
  })

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
