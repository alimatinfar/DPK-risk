import useActiveTab from "../../../../../components/others/Tab/hooks/useActiveTab.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS
} from "./index.constances.tsx";
import Tab, {type TabsProps} from "../../../../../components/others/Tab/Tab.tsx";
import TabContentRender, {type TabContentRenderProps} from "../../../../../components/others/Tab/TabContentRender.tsx";


type Props = Pick<TabContentRenderProps, 'renderObject'>

function PanelIndividualBankingInfoTransactionHistoryRender(
  {renderObject}: Props
) {

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

      //TODO tabs should changed
      {/*<TabContentRender*/}
      {/*  renderObject={renderObject}*/}
      {/*  activeTab={activeTab}*/}
      {/*/>*/}
    </>
  );
}

export default PanelIndividualBankingInfoTransactionHistoryRender;
