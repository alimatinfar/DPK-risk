import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout.tsx";
import {getPanelSideBarItems} from "./PanelLayout.constances.ts";
import PanelTopBar from "./PanelTopBar.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import LightningIcon from "../../../components/svg/LightningIcon.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";

const lightningIcon = <LightningIcon/>

function PanelLayout() {
  return (
    <DashboardLayout
      sideBarItems={getPanelSideBarItems()}
      topBar={<PanelTopBar/>}
      bottomLogoRender={(isExpanded) => (
        <div className='bg-[#E1DEEA] dark:bg-dark-2 flex flex-col gap-y-2 p-2 rounded-lg mt-4'>
          {isExpanded && (
            <span className='text-slate-700 dark:text-custom-gray-2 text-xs text-center'>
              ریسک تعامل کاری
            </span>
          )}

          <Link to={ROUTER_LINKS.PANEL_CUSTOMER_RISK}>
            <Button
              size='sm' variant='default' color='white'
              {...isExpanded ? {
                fullWidth: true,
                rightIcon: lightningIcon
              } : {
                justIcon: true
              }}
            >
              {isExpanded ? 'محاسبه ریسک مشتری' : lightningIcon}
            </Button>
          </Link>
        </div>
      )}
    />
  );
}

export default PanelLayout;
