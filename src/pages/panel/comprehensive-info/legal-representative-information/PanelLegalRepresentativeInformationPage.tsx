import React, {lazy, useMemo} from "react";
import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import Card from "../../../../components/others/Card/Card.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_RENDER_OBJECT,
  PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS,
  PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS
} from "./index.constances.tsx";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import PanelPageTitleWithTab from "../../layout/PanelPageTitleWithTab.tsx";


function PanelLegalRepresentativeInformationPage() {


  const {isLegal, activePersonData} = getActivePersonData()
  const [activeTab, setActiveTab] = useActiveTab(
    isLegal(activePersonData) ?
      PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.BOARD_MEMBERS :
      PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_REPRESENTATIVE
  )

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitleWithTab
        titleElement={<PanelPageTitle/>}
        tabElement={isLegal(activePersonData) ? (
          <Tab
            tabs={PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />
        ) : null}
      />

      <Card>
        <TabContentRender
          renderObject={PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_RENDER_OBJECT}
          activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelLegalRepresentativeInformationPage;
