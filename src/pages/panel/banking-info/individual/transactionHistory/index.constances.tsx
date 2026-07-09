import type {TabsProps} from "../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../../components/others/RenderLogic/TableSuspense.tsx";
import PanelTransactionHistoryOnSiteMaxCountLoading
  from "./onSiteMaxCount/PanelTransactionHistoryOnSiteMaxCountLoading.tsx";

const PanelTransactionHistoryOnSiteMaxCount = lazy(() => import(
  "./onSiteMaxCount/PanelTransactionHistoryOnSiteMaxCount.tsx"
  ));
const PanelTransactionHistoryOnSiteMaxAmount = lazy(() => import(
  "./onSiteMaxAmount/PanelTransactionHistoryOnSiteMaxAmount.tsx"
  ));
const PanelTransactionHistoryEService = lazy(() => import(
  "./eService/PanelTransactionHistoryEService.tsx"
  ));

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS = {
  E_SERVICE: 'eService',
  ON_SITE_MAX_COUNT: 'onSiteMaxCount',
  ON_SITE_MAX_AMOUNT: 'onSiteMaxAmount',
}

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE,
    title: 'خدمات الکترونیک'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_AMOUNT,
    title: 'مراجعات حضوری بیشترین مبلغ'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_COUNT,
    title: 'مراجعات حضوری بیشترین تعداد'
  },
]

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE]: (
    <PanelTransactionHistoryEService/>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_COUNT]: (
    <TableSuspense fallback={<PanelTransactionHistoryOnSiteMaxCountLoading />}>
      <PanelTransactionHistoryOnSiteMaxCount/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE_MAX_AMOUNT]: (
    <TableSuspense fallback={<PanelTransactionHistoryOnSiteMaxCountLoading />}>
      <PanelTransactionHistoryOnSiteMaxAmount/>
    </TableSuspense>
  ),
}
