import Tab from "../../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT,
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "./index.constances.tsx";
import TabContentRender from "../../../../../components/others/Tab/TabContentRender.tsx";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";


function PanelIndividualBankingInfoTransactionHistory() {

  const [activeTab, setActiveTab] = useActiveTab(
    PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE,
    `${QUERY_PARAMS.ACTIVE_TAB}-transactionHistory`
  )

  return (
    <>
      <Tab
        tabs={PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS}
        activeTab={activeTab} onChange={setActiveTab}
      />

      <TabContentRender
        renderObject={PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT}
        activeTab={activeTab}
      />
    </>
  );
}

export default PanelIndividualBankingInfoTransactionHistory;
