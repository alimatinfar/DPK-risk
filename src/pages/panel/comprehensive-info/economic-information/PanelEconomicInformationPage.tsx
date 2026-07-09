import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import Card from "../../../../components/others/Card/Card.tsx";
import {
  PANEL_ECONOMIC_INFORMATION_PAGE_RENDER_OBJECT,
  PANEL_ECONOMIC_INFORMATION_PAGE_TABS, PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS
} from "./index.constances.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
 import PanelPageTitleWithTab from "../../layout/PanelPageTitleWithTab.tsx";


function PanelEconomicInformationPage() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitleWithTab
        titleElement={(
          <PanelPageTitle/>
        )}
        tabElement={(
          <Tab
            tabs={PANEL_ECONOMIC_INFORMATION_PAGE_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />
        )}
      />

      //TODO tabs should changed
      {/*<Card>*/}
      {/*  <TabContentRender*/}
      {/*    renderObject={PANEL_ECONOMIC_INFORMATION_PAGE_RENDER_OBJECT}*/}
      {/*    activeTab={activeTab}*/}
      {/*  />*/}
      {/*</Card>*/}
    </div>
  );
}

export default PanelEconomicInformationPage;
