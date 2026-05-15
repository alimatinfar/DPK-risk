import {useParams} from "react-router";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {lazy, useMemo} from "react";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS,
  PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS
} from "./index.constances.ts";

const JointBankingAccountDetailMembers = lazy(() => import(
  "./members/JointBankingAccountDetailMembers.tsx"
  ));
const JointBankingAccountDetailTransactionInformation = lazy(() => import(
  "./accountTransactionInformation/JointBankingAccountDetailTransactionInformation.tsx"
  ));
const JointBankingAccountDetailBlockHistory = lazy(() => import(
  "./blockHistory/JointBankingAccountDetailBlockHistory.tsx"
  ));
const JointBankingAccountDetailReturnedCheques = lazy(() => import(
  "./returnedCheques/JointBankingAccountDetailReturnedCheques.tsx"
  ));
const JointBankingAccountDetailSaptaMobileNumbers = lazy(() => import(
  "./saptaMobileNumbers/JointBankingAccountDetailSaptaMobileNumbers.tsx"
  ));
const JointBankingAccountDetailSpecialInstructions = lazy(() => import(
  "./specialInstructions/JointBankingAccountDetailSpecialInstructions.tsx"
  ));


function PanelJointBankingInfoAccountDetail() {

  const {id} = useParams()

  const [activeTab, setActiveTab] = useActiveTab(PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.JOINT_ACCOUNT_MEMBERS)

  const renderObject = useMemo(function () {
    return {
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.JOINT_ACCOUNT_MEMBERS]: (
        <JointBankingAccountDetailMembers />
      ),
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION]: (
        <JointBankingAccountDetailTransactionInformation />
      ),
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.BLOCK_HISTORY]: (
        <JointBankingAccountDetailBlockHistory />
      ),
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.RETURNED_CHEQUES]: (
        <JointBankingAccountDetailReturnedCheques />
      ),
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS]: (
        <JointBankingAccountDetailSaptaMobileNumbers />
      ),
      [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS]: (
        <JointBankingAccountDetailSpecialInstructions />
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
          tabs={PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS}
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

export default PanelJointBankingInfoAccountDetail;