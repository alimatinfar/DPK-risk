import {useParams} from "react-router";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {lazy, useMemo} from "react";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS,
  PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS
} from "./index.constances.ts";

const IndividualBankingCommitmentsDetailBeneficiaries = lazy(() => import(
  "./beneficiaries/IndividualBankingCommitmentsDetailBeneficiaries.tsx"
  ))
const IndividualBankingCommitmentsDetailGuarantors = lazy(() => import(
  "./guarantors/IndividualBankingCommitmentsDetailGuarantors.tsx"
  ))

function PanelIndividualBankingInfoCommitmentsDetail() {

  const {id} = useParams()

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES)

  const renderObject = useMemo(function () {
    return {
      [PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES]: (
        <IndividualBankingCommitmentsDetailBeneficiaries/>
      ),
      [PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.GUARANTORS]: (
        <IndividualBankingCommitmentsDetailGuarantors/>
      ),
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle
          title={`تعهد شماره “${id}”`} hasBack
        />

        <Tab
          tabs={PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS}
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

export default PanelIndividualBankingInfoCommitmentsDetail;