import type {TabsProps} from "../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../../components/others/RenderLogic/TableSuspense.tsx";
import PanelTransactionHistoryOnSiteLoading
  from "./onSite/PanelTransactionHistoryOnSiteLoading.tsx";

const PanelTransactionHistoryOnSite = lazy(() => import(
  "./onSite/PanelTransactionHistoryOnSite"
  ));
const PanelTransactionHistoryEService = lazy(() => import(
  "./eService/PanelTransactionHistoryEService.tsx"
  ));

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS = {
  E_SERVICE: 'eService',
  ON_SITE: 'onSite',
}

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE,
    title: 'خدمات الکترونیک'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE,
    title: 'مراجعات حضوری'
  },
]

export const PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.E_SERVICE]: (
    <PanelTransactionHistoryEService/>
  ),
  [PANEL_INDIVIDUAL_BANKING_INFO_TRANSACTION_HISTORY_TABS_KEYS.ON_SITE]: (
    <TableSuspense fallback={<PanelTransactionHistoryOnSiteLoading />}>
      <PanelTransactionHistoryOnSite/>
    </TableSuspense>
  ),
}
