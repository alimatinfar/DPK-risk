import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout.tsx";
import {getAdminSideBarItems} from "./index.constances.ts";
import DashboardTopBar from "../../../layouts/DashboardLayout/DashboardTopBar.tsx";

function AdminLayout() {
  return (
    <DashboardLayout
      sideBarItems={getAdminSideBarItems()}
      topBar={<DashboardTopBar title='مدیریت سامانه ریسک' />}
    />
  );
}

export default AdminLayout;
