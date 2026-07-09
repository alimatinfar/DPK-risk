import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import PanelEconomicInformationPageEconomicActivityLoading
  from "./economic-activity/PanelEconomicInformationPageEconomicActivityLoading.tsx";
import PanelEconomicInformationPagePrimarySourceOfIncomeLoading
  from "./primary-source-of-income/PanelEconomicInformationPagePrimarySourceOfIncomeLoading.tsx";
import PanelEconomicInformationPageSecondarySourceOfIncomeLoading
  from "./secondary-source-of-income/PanelEconomicInformationPageSecondarySourceOfIncomeLoading.tsx";
import TableSuspense from "../../../../components/others/RenderLogic/TableSuspense.tsx";


const PanelEconomicInformationPageEconomicActivity = lazy(() => import(
  "./economic-activity/PanelEconomicInformationPageEconomicActivity.tsx"
  ))
const PanelEconomicInformationPagePrimarySourceOfIncome = lazy(() => import(
  "./primary-source-of-income/PanelEconomicInformationPagePrimarySourceOfIncome.tsx"
  ))
const PanelEconomicInformationPageSecondarySourceOfIncome = lazy(() => import(
  "./secondary-source-of-income/PanelEconomicInformationPageSecondarySourceOfIncome.tsx"
  ))


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

export const PANEL_ECONOMIC_INFORMATION_PAGE_RENDER_OBJECT = {
  [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.ECONOMIC_ACTIVITY]: (
    <TableSuspense fallback={<PanelEconomicInformationPageEconomicActivityLoading />}>
      <PanelEconomicInformationPageEconomicActivity/>
    </TableSuspense>
  ),
  [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.PRIMARY_SOURCE_OF_INCOME]: (
    <TableSuspense fallback={<PanelEconomicInformationPagePrimarySourceOfIncomeLoading />}>
      <PanelEconomicInformationPagePrimarySourceOfIncome/>
    </TableSuspense>
  ),
  [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.SECONDARY_SOURCE_OF_INCOME]: (
    <TableSuspense fallback={<PanelEconomicInformationPageSecondarySourceOfIncomeLoading />}>
      <PanelEconomicInformationPageSecondarySourceOfIncome/>
    </TableSuspense>
  ),
}
