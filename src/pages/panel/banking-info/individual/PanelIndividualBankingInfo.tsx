import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_RENDER_OBJECT,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "./index.constances.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import PanelIndividualBankingInfoTop from "./topInfo/PanelIndividualBankingInfoTop.tsx";
import DashboardPageTitleWithTab from "../../../../layouts/DashboardLayout/DashboardPageTitleWithTab.tsx";


function PanelIndividualBankingInfo() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  return (
    <div className='flex flex-col gap-y-4'>
      <DashboardPageTitleWithTab
        titleElement={(
          <PanelPageTitle/>
        )}
        tabElement={(
          <Tab
            tabs={PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />
        )}
      />

      <Card className='flex flex-col gap-y-4'>
        <PanelIndividualBankingInfoTop/>

        <TabContentRender
          renderObject={PANEL_INDIVIDUAL_BANKING_INFO_PAGE_RENDER_OBJECT}
          activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelIndividualBankingInfo;
