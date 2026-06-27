import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "../individual/index.constances.tsx";
import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_RENDER_OBJECT,
  PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_TABS
} from "./index.constance.tsx";
import PanelPageTitleWithTab from "../../layout/PanelPageTitleWithTab.tsx";


function PanelBankingInfoWithWithdrawalConditions() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitleWithTab
        titleElement={(
          <PanelPageTitle/>
        )}
        tabElement={(
          <Tab
            tabs={PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />
        )}
      />

      <Card className='flex flex-col gap-y-4'>
        <TabContentRender
          renderObject={PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_RENDER_OBJECT}
          activeTab={activeTab}
        />
      </Card>
    </div>
  )
}

export default PanelBankingInfoWithWithdrawalConditions;
