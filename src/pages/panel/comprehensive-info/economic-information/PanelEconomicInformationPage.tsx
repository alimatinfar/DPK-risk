import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import Card from "../../../../components/others/Card/Card.tsx";
import {PANEL_ECONOMIC_INFORMATION_PAGE_TABS, PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS} from "./index.constances.ts";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import {lazy, useMemo} from "react";

const PanelEconomicInformationPageEconomicActivity = lazy(() => import(
  "./economic-activity/PanelEconomicInformationPageEconomicActivity.tsx"
  ))
const PanelEconomicInformationPagePrimarySourceOfIncome = lazy(() => import(
  "./primary-source-of-income/PanelEconomicInformationPagePrimarySourceOfIncome.tsx"
  ))
const PanelEconomicInformationPageSecondarySourceOfIncome = lazy(() => import(
  "./secondary-source-of-income/PanelEconomicInformationPageSecondarySourceOfIncome.tsx"
  ))

function PanelEconomicInformationPage() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY)

  const renderObject = useMemo(function () {
    return {
      [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY]: (
        <PanelEconomicInformationPageEconomicActivity/>
      ),
      [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.PRIMARY_SOURCE_OF_INCOME]: (
        <PanelEconomicInformationPagePrimarySourceOfIncome/>
      ),
      [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.SECONDARY_SOURCE_OF_INCOME]: (
        <PanelEconomicInformationPageSecondarySourceOfIncome/>
      ),
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

        <Tab
          tabs={PANEL_ECONOMIC_INFORMATION_PAGE_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <Card>
        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelEconomicInformationPage;