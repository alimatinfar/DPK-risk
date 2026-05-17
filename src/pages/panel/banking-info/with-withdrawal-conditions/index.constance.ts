import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS} from "../individual/index.constances.ts";

export const PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT,
    title: 'حساب'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD,
    title: 'کارت'
  },
]