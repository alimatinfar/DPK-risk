import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";

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

export const PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS = {
  BOARD_MEMBERS: 'boardMembers',
  SHAREHOLDERS: 'shareholders',
  MAJOR_OWNERS: 'majorOwners',
  STATUTORY_AUDITOR: 'statutoryAuditor',
  LEGAL_INSPECTOR: 'legalInspector',
  LEGAL_REPRESENTATIVE: 'legalRepresentative',
}

export const PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.BOARD_MEMBERS,
    title: 'اعضا هیئت مدیره'
  },
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.SHAREHOLDERS,
    title: 'سهامداران'
  },
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.MAJOR_OWNERS,
    title: 'مالکان عمده / صاحبان سهام'
  },
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.STATUTORY_AUDITOR,
    title: 'حسابرس قانونی'
  },
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_INSPECTOR,
    title: 'بازرس قانونی'
  },
  {
    id: PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_REPRESENTATIVE,
    title: 'نماینده قانوني'
  },
]

export const PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_RENDER_OBJECT = {
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.BOARD_MEMBERS]: (
    <PanelLegalRepresentativeInformationPageBoardMembers />
  ),
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.SHAREHOLDERS]: (
    <PanelLegalRepresentativeInformationPageShareholders />
  ),
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.MAJOR_OWNERS]: (
    <PanelLegalRepresentativeInformationPageMajorOwners />
  ),
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.STATUTORY_AUDITOR]: (
    <PanelLegalRepresentativeInformationPageStatutoryAuditor />
  ),
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_INSPECTOR]: (
    <PanelLegalRepresentativeInformationPageLegalInspector />
  ),
  [PANEL_LEGAL_REPRESENTATIVE_INFO_PAGE_TABS_KEYS.LEGAL_REPRESENTATIVE]: (
    <PanelLegalRepresentativeInformationPageLegalRepresentative />
  ),
}
