import EServicePortalSharedCustomerNumberField, {
  type EServicePortalSharedCustomerNumberFieldProps
} from "./EServicePortalSharedCustomerNumberField.tsx";
import {
  PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoEServicePortalRenderLogic
  from "./hooks/usePanelIndividualBankingInfoEServicePortalRenderLogic.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


export type PanelIndividualBankingInfoEServicePortalRenderProps = {
  isJoint?: boolean;
} & Partial<Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber' | 'setSelectedCustomerNumber'>>

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
      {(isJoint && setSelectedCustomerNumber) && (
        <EServicePortalSharedCustomerNumberField
          selectedCustomerNumber={selectedCustomerNumber}
          setSelectedCustomerNumber={setSelectedCustomerNumber}
        />
      )}

      <TableRenderLogic
        renderLogicProps={{
          error: null,
          isLoading: false,
          ...(isJoint && !selectedCustomerNumber) ? {
            emptyText: 'برای مشاهده نتایج شماره مشتری مشترک را انتخاب نمایید',
            isEmpty: true
          } : {}
        }}
        tableProps={{
          data: tableData,
          columns: PANEL_INDIVIDUAL_E_SERVICE_PORTAL_TABLE_COLUMNS
        }}
      />
    </div>
  );
}

export default PanelIndividualBankingInfoEServicePortalRender;
