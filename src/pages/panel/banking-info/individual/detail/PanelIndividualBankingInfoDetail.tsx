import {
  PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS,
  PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS
} from "./index.constances.ts";
import useActiveTab from "../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {useMemo} from "react";
import PanelPageTitle from "../../../layout/PanelPageTitle.tsx";
import Tab from "../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../../components/others/Tab/TabContentRender.tsx";
import IndividualBankingDetailAccountTransactionInformation
  from "./accountTransactionInformation/IndividualBankingDetailAccountTransactionInformation.tsx";
import IndividualBankingDetailBlockHistory from "./blockHistory/IndividualBankingDetailBlockHistory.tsx";
import IndividualBankingDetailReturnedCheques from "./returnedCheques/IndividualBankingDetailReturnedCheques.tsx";
import IndividualBankingDetailSaptaMobileNumbers
  from "./saptaMobileNumbers/IndividualBankingDetailSaptaMobileNumbers.tsx";
import IndividualBankingDetailSpecialInstructions
  from "./specialInstructions/IndividualBankingDetailSpecialInstructions.tsx";


function PanelIndividualBankingInfoDetail() {

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.RETURNED_CHEQUES)

  const renderObject = useMemo(function () {
    return {
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION]: (
        <IndividualBankingDetailAccountTransactionInformation />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.BLOCK_HISTORY]: (
        <IndividualBankingDetailBlockHistory />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.RETURNED_CHEQUES]: (
        <IndividualBankingDetailReturnedCheques />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS]: (
        <IndividualBankingDetailSaptaMobileNumbers />
      ),
      [PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS]: (
        <IndividualBankingDetailSpecialInstructions />
      ),
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

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

export default PanelIndividualBankingInfoDetail;