import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import Tab from "../../../components/others/Tab/Tab.tsx";
import {
  PANEL_ECONOMIC_INFORMATION_PAGE_TABS,
  PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS,
  PANEL_ECONOMIC_INFORMATION_TABLE_COLUMNS, PANEL_ECONOMIC_INFORMATION_TABLE_FAKE_DATA
} from "../basic-information/PanelEconomicInformationPage.constances.ts";
import useActiveTab from "../../../components/others/Tab/hooks/useActiveTab.ts";
import Card from "../../../components/others/Card/Card.tsx";
import Table from "../../../components/others/Table/Table.tsx";

function PanelEconomicInformationPage() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY)

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
        <Table
          data={PANEL_ECONOMIC_INFORMATION_TABLE_FAKE_DATA} columns={PANEL_ECONOMIC_INFORMATION_TABLE_COLUMNS}
        />
      </Card>
    </div>
  );
}

export default PanelEconomicInformationPage;