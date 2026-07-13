import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS} from "../individual/index.constances.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../components/others/RenderLogic/TableSuspense.tsx";
import PanelIndividualBankingInfoAccountLoading
  from "../individual/account/PanelIndividualBankingInfoAccountLoading.tsx";
const PanelBankingInfoWithWithdrawalConditionsAccount = lazy(() => import(
  "./account/PanelBankingInfoWithWithdrawalConditionsAccount.tsx"
  ));
const PanelBankingInfoWithWithdrawalConditionsCard = lazy(() => import(
  "./card/PanelBankingInfoWithWithdrawalConditionsCard.tsx"
  ));

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

export const PANEL_BANKING_INFO_WITH_WITHDRAWAL_CONDITIONS_PAGE_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.ACCOUNT]: (
    <TableSuspense fallback={<PanelIndividualBankingInfoAccountLoading />}>
      <PanelBankingInfoWithWithdrawalConditionsAccount/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_PAGE_TABS_KEYS.CARD]: (
    <TableSuspense fallback={<div>salam</div>}>
      <PanelBankingInfoWithWithdrawalConditionsCard/>
    </TableSuspense>
  ),
}
