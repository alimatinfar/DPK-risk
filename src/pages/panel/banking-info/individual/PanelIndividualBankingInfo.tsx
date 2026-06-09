import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS,
  PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS
} from "./index.constances.tsx";
import {lazy, useMemo} from "react";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import PanelIndividualBankingInfoTop from "./topInfo/PanelIndividualBankingInfoTop.tsx";

const PanelIndividualBankingInfoTransactionHistory = lazy(() => import(
  "./transactionHistory/PanelIndividualBankingInfoTransactionHistory.tsx"
  ))
const PanelIndividualBankingInfoFacilities = lazy(() => import(
  "./facilities/PanelIndividualBankingInfoFacilities.tsx"
  ))
const PanelIndividualBankingInfoEServicePortal = lazy(() => import(
  "./eServicePortal/PanelIndividualBankingInfoEServicePortal.tsx"
  ))
const PanelIndividualBankingInfoCommitments = lazy(() => import(
  "./commitments/PanelIndividualBankingInfoCommitments.tsx"
  ))
const PanelIndividualBankingInfoCard = lazy(() => import(
  "./card/PanelIndividualBankingInfoCard.tsx"
  ))
const PanelIndividualBankingInfoAccount = lazy(() => import(
  "./account/PanelIndividualBankingInfoAccount.tsx"
  ))


function PanelIndividualBankingInfo() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT)

  const renderObject = useMemo(function () {
      return {
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
          <PanelIndividualBankingInfoAccount />
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
          <PanelIndividualBankingInfoCard />
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.FACILITIES]: (
          <PanelIndividualBankingInfoFacilities />
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.COMMITMENTS]: (
          <PanelIndividualBankingInfoCommitments />
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.E_SERVICE_PORTAL]: (
          <PanelIndividualBankingInfoEServicePortal />
        ),
        [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.TRANSACTION_HISTORY]: (
          <PanelIndividualBankingInfoTransactionHistory />
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
        <PanelIndividualBankingInfoTop />

        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelIndividualBankingInfo;
