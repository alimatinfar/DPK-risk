import type {TabsProps} from "../../../components/others/Tab/Tab.tsx";


export const PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS = {
  ECONOMIC_ACTIVITY: 'economic-activity',
  PRIMARY_SOURCE_OF_INCOME: 'primarySourceOfIncome',
  SECONDARY_SOURCE_OF_INCOME: 'secondarySourceOfIncome',
}

export const PANEL_ECONOMIC_INFORMATION_PAGE_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY,
    title: 'اطلاعات فعالیت اقتصادی'
  },
  {
    id: PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.PRIMARY_SOURCE_OF_INCOME,
    title: 'اطلاعات منبع درآمد اصلی'
  },
  {
    id: PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.SECONDARY_SOURCE_OF_INCOME,
    title: 'اطلاعات منابع درآمدی ثانویه'
  },
]