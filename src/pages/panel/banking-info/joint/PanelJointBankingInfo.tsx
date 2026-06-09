import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "../individual/index.constances.tsx";
import {PANEL_JOINT_BANKING_INFO_RENDER_OBJECT} from "./index.constances.tsx";


function PanelJointBankingInfo() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

        <Tab
          tabs={PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <Card className='flex flex-col gap-y-4'>
        <TabContentRender
          renderObject={PANEL_JOINT_BANKING_INFO_RENDER_OBJECT} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelJointBankingInfo;
