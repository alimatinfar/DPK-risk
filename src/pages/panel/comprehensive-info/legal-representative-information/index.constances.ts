import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";

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