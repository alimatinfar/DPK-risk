import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {lazy, useMemo} from "react";
import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import PanelIndividualBankingInfoTop from "../individual/PanelIndividualBankingInfoTop.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "../individual/index.constances.ts";

const PanelJointBankingInfoTransactionHistory = lazy(() => import(
  "./transactionHistory/PanelJointBankingInfoTransactionHistory.tsx"
  ));
const PanelJointBankingInfoFacilities = lazy(() => import(
  "./facilities/PanelJointBankingInfoFacilities.tsx"
  ));
const PanelJointBankingInfoEServicePortal = lazy(() => import(
  "./eServicePortal/PanelJointBankingInfoEServicePortal.tsx"
  ));
const PanelJointBankingInfoCommitments = lazy(() => import(
  "./commitments/PanelJointBankingInfoCommitments.tsx"
  ));
const PanelJointBankingInfoCard = lazy(() => import(
  "./card/PanelJointBankingInfoCard.tsx"
  ));
const PanelJointBankingInfoAccount = lazy(() => import(
  "./account/PanelJointBankingInfoAccount.tsx"
  ));


function PanelJointBankingInfo() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  const renderObject = useMemo(function () {
    return {
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
        <PanelJointBankingInfoAccount />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
        <PanelJointBankingInfoCard />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
        <PanelJointBankingInfoFacilities />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
        <PanelJointBankingInfoCommitments />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
        <PanelJointBankingInfoEServicePortal />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
        <PanelJointBankingInfoTransactionHistory />
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

      <Card className='flex flex-col gap-y-4'>
        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelJointBankingInfo;