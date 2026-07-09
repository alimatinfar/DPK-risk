import type {TabsProps} from "../../../../components/others/Tab/Tab.tsx";
import {lazy, Suspense} from "react";
import PanelEconomicInformationPageEconomicActivityLoading
  from "./economic-activity/PanelEconomicInformationPageEconomicActivityLoading.tsx";
import PanelEconomicInformationPagePrimarySourceOfIncomeLoading
  from "./primary-source-of-income/PanelEconomicInformationPagePrimarySourceOfIncomeLoading.tsx";
import RenderLogicDefaultContainer from "../../../../components/others/RenderLogic/RenderLogicDefaultContainer.tsx";
import SuspenseRenderLogicDefaultContainer
  from "../../../../components/others/RenderLogic/SuspenseRenderLogicDefaultContainer.tsx";

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
    <SuspenseRenderLogicDefaultContainer fallback={<PanelEconomicInformationPageEconomicActivityLoading />}>
      <PanelEconomicInformationPageEconomicActivity/>
    </SuspenseRenderLogicDefaultContainer>
  ),
  [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.PRIMARY_SOURCE_OF_INCOME]: (
    <SuspenseRenderLogicDefaultContainer fallback={<PanelEconomicInformationPagePrimarySourceOfIncomeLoading />}>
      <PanelEconomicInformationPagePrimarySourceOfIncome/>
    </SuspenseRenderLogicDefaultContainer>
  ),
  [PANEL_ECONOMIC_INFORMATION_PAGE_TABS_KEYS.SECONDARY_SOURCE_OF_INCOME]: (
    <SuspenseRenderLogicDefaultContainer fallback={<div>salam</div>}>
      <PanelEconomicInformationPageSecondarySourceOfIncome/>
    </SuspenseRenderLogicDefaultContainer>
  ),
}
