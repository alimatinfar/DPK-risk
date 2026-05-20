import type {TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS,
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS
} from "../../../individual/account/detail/index.constances.ts";

export const PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS = {
  JOINT_ACCOUNT_MEMBERS: 'members',
  ...PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS,
}

export const PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.JOINT_ACCOUNT_MEMBERS,
    title: 'اعضا حساب مشترک'
  },
  ...PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS
]