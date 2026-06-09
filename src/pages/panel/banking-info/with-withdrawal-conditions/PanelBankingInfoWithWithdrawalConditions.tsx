import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "../individual/index.constances.tsx";
import {lazy, useMemo} from "react";
import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import {PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_TABS} from "./index.constance.ts";

const PanelBankingInfoWithWithdrawalConditionsAccount = lazy(() => import(
  "./account/PanelBankingInfoWithWithdrawalConditionsAccount.tsx"
  ));
const PanelBankingInfoWithWithdrawalConditionsCard = lazy(() => import(
  "./card/PanelBankingInfoWithWithdrawalConditionsCard.tsx"
  ));


function PanelBankingInfoWithWithdrawalConditions() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  const renderObject = useMemo(function () {
    return {
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
        <PanelBankingInfoWithWithdrawalConditionsAccount/>
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
        <PanelBankingInfoWithWithdrawalConditionsCard/>
      ),
    }
  }, [])


  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

        <Tab
          tabs={PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <Card className='flex flex-col gap-y-4'>
        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  )
}

export default PanelBankingInfoWithWithdrawalConditions;
