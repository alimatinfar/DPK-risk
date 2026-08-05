import {getAdminSideBarItems} from "../index.constances.ts";
import getFirstDashboardSideBarLink from "../../../../layouts/DashboardLayout/utils/getFirstDashboardSideBarLink.ts";


function getFirstAdminSideBarLink() {
  return getFirstDashboardSideBarLink({sideBarItems: getAdminSideBarItems()})
}

export default getFirstAdminSideBarLink;
