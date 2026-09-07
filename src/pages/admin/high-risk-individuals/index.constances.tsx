import type {TabsProps} from "../../../components/others/Tab/Tab.tsx";

export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS = {
  LETTERS: 'letters',
  INDIVIDUALS: 'individuals',
}

export const ADMIN_HIGH_RISK_INDIVIDUALS_TABS: TabsProps['tabs'] = [
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS,
    title: 'اشخاص'
  },
  {
    id: ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS,
    title: 'نامه‌ها'
  },
]
