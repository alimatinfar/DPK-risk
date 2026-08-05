import getFirstDashboardSideBarLink from "../../../../layouts/DashboardLayout/utils/getFirstDashboardSideBarLink.ts";
import {getPanelSideBarItems} from "../PanelLayout.constances.ts";


function getFirstPanelSideBarLink() {
  return getFirstDashboardSideBarLink({sideBarItems: getPanelSideBarItems()})
}

export default getFirstPanelSideBarLink;
