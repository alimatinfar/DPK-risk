import {
  PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS,
  PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS
} from "./index.constances.ts";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {lazy, useMemo} from "react";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {useParams} from "react-router";

const IndividualBankingAccountDetailTransactionInformation = lazy(() => import(
  "./accountTransactionInformation/IndividualBankingAccountDetailTransactionInformation.tsx"
  ));
const IndividualBankingAccountDetailBlockHistory = lazy(() => import(
  "./blockHistory/IndividualBankingAccountDetailBlockHistory.tsx"
  ));
const IndividualBankingAccountDetailReturnedCheques = lazy(() => import(
  "./returnedCheques/IndividualBankingAccountDetailReturnedCheques.tsx"
  ));
const IndividualBankingAccountDetailSaptaMobileNumbers = lazy(() => import(
  "./saptaMobileNumbers/IndividualBankingAccountDetailSaptaMobileNumbers.tsx"
  ));
const IndividualBankingAccountDetailSpecialInstructions = lazy(() => import(
  "./specialInstructions/IndividualBankingAccountDetailSpecialInstructions.tsx"
  ));


function PanelIndividualBankingInfoAccountDetail() {

  const {id} = useParams()

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.RETURNED_CHEQUES)

  const renderObject = useMemo(function () {
    return {
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION]: (
        <IndividualBankingAccountDetailTransactionInformation />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.BLOCK_HISTORY]: (
        <IndividualBankingAccountDetailBlockHistory />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.RETURNED_CHEQUES]: (
        <IndividualBankingAccountDetailReturnedCheques />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS]: (
        <IndividualBankingAccountDetailSaptaMobileNumbers />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS]: (
        <IndividualBankingAccountDetailSpecialInstructions />
      ),
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle
          title={`حساب “${id}”`} hasBack
        />

        <Tab
          tabs={PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS}
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

export default PanelIndividualBankingInfoAccountDetail;