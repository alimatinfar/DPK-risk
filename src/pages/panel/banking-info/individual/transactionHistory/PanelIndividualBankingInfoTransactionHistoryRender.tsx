import useActiveTab from "../../../../../components/others/Tab/hooks/useActiveTab.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "./index.constances.tsx";
import Tab from "../../../../../components/others/Tab/Tab.tsx";
import TabContentRender, {type TabContentRenderProps} from "../../../../../components/others/Tab/TabContentRender.tsx";
import EServicePortalSharedCustomerNumberField, {
  type EServicePortalSharedCustomerNumberFieldProps
} from "../eServicePortal/EServicePortalSharedCustomerNumberField.tsx";


type Props = {
  isJoint?: boolean;
} & Pick<TabContentRenderProps, 'renderObject'> &
  Pick<EServicePortalSharedCustomerNumberFieldProps, 'selectedCustomerNumber' | 'setSelectedCustomerNumber'>

function PanelIndividualBankingInfoTransactionHistoryRender(
  {renderObject, selectedCustomerNumber, setSelectedCustomerNumber, isJoint}: Props
) {

  const [activeTab, setActiveTab] = useActiveTab(
    PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE,
    `${QUERY_PARAMS.ACTIVE_TAB}-transactionHistory`
  )

  return (
    <>
      <div className='flex items-center justify-between'>
        {isJoint && (
          <EServicePortalSharedCustomerNumberField
            selectedCustomerNumber={selectedCustomerNumber}
            setSelectedCustomerNumber={setSelectedCustomerNumber}
          />
        )}

        <Tab
          tabs={PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <TabContentRender
        renderObject={renderObject}
        activeTab={activeTab}
      />
    </>
  );
}

export default PanelIndividualBankingInfoTransactionHistoryRender;
