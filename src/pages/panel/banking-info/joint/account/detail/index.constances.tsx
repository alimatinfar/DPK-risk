import type {TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";
import {
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS,
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS, PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT
} from "../../../individual/account/detail/index.constances.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../../../components/others/RenderLogic/TableSuspense.tsx";
import JointBankingAccountDetailMembersLoading from "./members/JointBankingAccountDetailMembersLoading.tsx";

const JointBankingAccountDetailMembers = lazy(() => import(
  "./members/JointBankingAccountDetailMembers.tsx"
  ));


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

export const PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT = {
  [PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.JOINT_ACCOUNT_MEMBERS]: (
    <TableSuspense fallback={<JointBankingAccountDetailMembersLoading />}>
      <JointBankingAccountDetailMembers />
    </TableSuspense>
  ),
  ...PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT
}
