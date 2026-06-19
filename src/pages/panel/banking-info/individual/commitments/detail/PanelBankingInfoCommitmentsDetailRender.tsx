import {useParams} from "react-router";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_RENDER_OBJECT,
  PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS,
  PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS
} from "./index.constances.tsx";


function PanelBankingInfoCommitmentsDetailRender() {

  const {id} = useParams()

  const [activeTab, setActiveTab] = useActiveTab(PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES)

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
          renderObject={PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_RENDER_OBJECT}
          activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelBankingInfoCommitmentsDetailRender;
