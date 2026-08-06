import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout.tsx";
import {getAdminSideBarItems} from "./index.constances.ts";
import DashboardTopBar from "../../../layouts/DashboardLayout/DashboardTopBar.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import ReturnIcon from "../../../components/svg/ReturnIcon.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";

function AdminLayout() {
  return (
    <DashboardLayout
      sideBarItems={getAdminSideBarItems()}
      topBar={<DashboardTopBar title='مدیریت سامانه ریسک'/>}
      sideBarEndAdornment={(
        <Link to={ROUTER_LINKS.SEARCH}>
          <Button
            variant='outlined' className={{extra: 'h-10'}} size='sm' fullWidth
            rightIcon={<ReturnIcon/>}
          >
            سامانه ریسک مشتریان
          </Button>
        </Link>
      )}
    />
  );
}

export default AdminLayout;
