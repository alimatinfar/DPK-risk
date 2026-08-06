import DashboardPageTitle, {
  type DashboardPageTitleProps
} from "../../../layouts/DashboardLayout/DashboardPageTitle.tsx";
import {getAdminSideBarItems} from "./index.constances.ts";

function AdminPageTitle(props: Omit<DashboardPageTitleProps, 'sideBarItems'>) {
  return (
    <DashboardPageTitle {...props} sideBarItems={getAdminSideBarItems()} />
  );
}

export default AdminPageTitle;
