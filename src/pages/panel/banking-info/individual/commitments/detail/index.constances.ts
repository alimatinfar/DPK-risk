import type {TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";

export const PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS = {
  BENEFICIARIES: 'beneficiaries',
  GUARANTORS: 'guarantors',
}

export const PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES,
    title: 'ذینفعان'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.GUARANTORS,
    title: 'ضامنین'
  },
]