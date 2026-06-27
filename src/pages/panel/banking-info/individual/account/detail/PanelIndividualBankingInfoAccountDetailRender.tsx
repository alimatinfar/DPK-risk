import PanelPageTitle from "../../../../layout/PanelPageTitle.tsx";
import Tab, {type TabsProps, type TabType} from "../../../../../../components/others/Tab/Tab.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import TabContentRender, {
  type TabContentRenderProps
} from "../../../../../../components/others/Tab/TabContentRender.tsx";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import PanelPageTitleWithTab from "../../../../layout/PanelPageTitleWithTab.tsx";


type Props = {
  defaultState: TabType['id'];
} & Pick<TabsProps, 'tabs'> & Pick<TabContentRenderProps, 'renderObject'>

function PanelIndividualBankingInfoAccountDetailRender(
  {
    defaultState, tabs, renderObject
  }: Props
) {

  const accountNumberStr = useGetQueryParam(QUERY_PARAMS.ACCOUNT_NUMBER_STR)

  const [activeTab, setActiveTab] = useActiveTab(defaultState)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitleWithTab
        titleElement={(
          <PanelPageTitle
            title={`حساب “${accountNumberStr}”`} hasBack
          />
        )}
        tabElement={(
          <Tab
            tabs={tabs}
            activeTab={activeTab} onChange={setActiveTab}
          />
        )}
      />

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
