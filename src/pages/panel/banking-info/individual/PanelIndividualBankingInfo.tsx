import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "./index.constances.ts";
import {useMemo} from "react";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import PanelIndividualBankingInfoTop from "./PanelIndividualBankingInfoTop.tsx";


function PanelIndividualBankingInfo() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  const renderObject = useMemo(function () {
      return {
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
          <div></div>
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
          <div></div>
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
          <div></div>
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
          <div></div>
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
          <div></div>
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
          <div></div>
        ),
      }
    }, [])


  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

        <Tab
          tabs={PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <Card>
        <PanelIndividualBankingInfoTop />

        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelIndividualBankingInfo;