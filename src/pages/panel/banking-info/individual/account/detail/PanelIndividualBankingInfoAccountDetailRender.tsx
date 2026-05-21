import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab, {type TabsProps, type TabType} from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender, {
  type TabContentRenderProps
} from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {useParams} from "react-router";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";


type Props = {
  defaultState: TabType['id'];
} & Pick<TabsProps, 'tabs'> & Pick<TabContentRenderProps, 'renderObject'>

function PanelIndividualBankingInfoAccountDetailRender(
  {
    defaultState, tabs, renderObject
  }: Props
) {

  const {id} = useParams()

  const [activeTab, setActiveTab] = useActiveTab(defaultState)

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle
          title={`حساب “${id}”`} hasBack
        />

        <Tab
          tabs={tabs}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </div>

      <Card className='flex flex-col gap-y-4'>
        <TabContentRender
          renderObject={renderObject}
          activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelIndividualBankingInfoAccountDetailRender;
