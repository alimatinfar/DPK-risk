import DashboardPageTitle, {
  type DashboardPageTitleProps
} from "../../../layouts/DashboardLayout/DashboardPageTitle.tsx";
import {getPanelSideBarItems} from "./PanelLayout.constances.ts";


function PanelPageTitle(
  props: Omit<DashboardPageTitleProps, 'sideBarItems'>
) {
  return (
    <DashboardPageTitle {...props} sideBarItems={getPanelSideBarItems()}/>
  )
}

export default PanelPageTitle;
