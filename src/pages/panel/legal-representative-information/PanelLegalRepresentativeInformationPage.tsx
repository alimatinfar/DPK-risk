import React, {lazy, useMemo} from "react";
import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import Card from "../../../components/others/Card/Card.tsx";
import Tab from "../../../components/others/Tab/Tab.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS,
  PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS
} from "./index.constances.ts";
import useActiveTab from "../../../components/others/Tab/hooks/useActiveTab.ts";
import TabContentRender from "../../../components/others/Tab/TabContentRender.tsx";
import getActivePersonData from "../utils/getActivePersonData.ts";

const PanelLegalRepresentativeInformationPageBoardMembers = lazy(() => import(
  "./boardMembers/PanelLegalRepresentativeInformationPageBoardMembers.tsx"
  ))
const PanelLegalRepresentativeInformationPageShareholders = lazy(() => import(
  "./shareholders/PanelLegalRepresentativeInformationPageShareholders.tsx"
  ))
const PanelLegalRepresentativeInformationPageMajorOwners = lazy(() => import(
  "./majorOwners/PanelLegalRepresentativeInformationPageMajorOwners.tsx"
  ))
const PanelLegalRepresentativeInformationPageStatutoryAuditor = lazy(() => import(
  "./statutoryAuditor/PanelLegalRepresentativeInformationPageStatutoryAuditor.tsx"
  ))
const PanelLegalRepresentativeInformationPageLegalInspector = lazy(() => import(
  "./legalInspector/PanelLegalRepresentativeInformationPageLegalInspector.tsx"
  ))
const PanelLegalRepresentativeInformationPageLegalRepresentative = lazy(() => import(
  "./legalRepresentative/PanelLegalRepresentativeInformationPageLegalRepresentative.tsx"
  ))


function PanelLegalRepresentativeInformationPage() {


  const {isLegal, activePersonData} = getActivePersonData()
  const [activeTab, setActiveTab] = useActiveTab(
    isLegal(activePersonData) ?
      PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.BOARD_MEMBERS :
      PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_REPRESENTATIVE
  )

  const renderObject = useMemo(function () {
    return {
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.BOARD_MEMBERS]: (
        <PanelLegalRepresentativeInformationPageBoardMembers/>
      ),
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.SHAREHOLDERS]: (
        <PanelLegalRepresentativeInformationPageShareholders/>
      ),
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.MAJOR_OWNERS]: (
        <PanelLegalRepresentativeInformationPageMajorOwners/>
      ),
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.STATUTORY_AUDITOR]: (
        <PanelLegalRepresentativeInformationPageStatutoryAuditor/>
      ),
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_INSPECTOR]: (
        <PanelLegalRepresentativeInformationPageLegalInspector/>
      ),
      [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_REPRESENTATIVE]: (
        <PanelLegalRepresentativeInformationPageLegalRepresentative/>
      ),
    }
  }, [])

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <PanelPageTitle/>

        {isLegal(activePersonData) && (
          <Tab
            tabs={PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />
        )}
      </div>

      <Card>
        <TabContentRender
          renderObject={renderObject} activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default PanelLegalRepresentativeInformationPage;