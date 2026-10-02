import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import { Link } from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import useSearchPageResultCard from "../../search/result/hooks/useSearchPageResultCard.ts";
import getActivePersonData from "../utils/getActivePersonData.ts";
import getPersonIconByType from "../../search/form/utils/getPersonIconByType.ts";
import DashboardTopBar from "../../../layouts/DashboardLayout/DashboardTopBar.tsx";

function PanelTopBar() {
  const { activePersonData } = getActivePersonData();

  const { fields } = useSearchPageResultCard({
    data: activePersonData,
    hasCustomerIdPagesPathname: [ROUTER_LINKS.PANEL_CUSTOMER_RISK]
  });

  return (
    <DashboardTopBar title='سامانه مدیریت ریسک مشتریان' >
      <div className="flex-1 pt-4 px-3">
        <div className="h-15 rounded-lg flex items-center justify-between gap-x-4 border-y border-slate-200 dark:border-dark-2 bg-[#DDE8F2] dark:bg-dark-2 px-2">
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              {getPersonIconByType(activePersonData.type)?.({})}

              <span className="text-slate-900 dark:text-custom-gray-2">{activePersonData?.name}</span>
            </div>

            {fields.map((field, index) => {
              return (
                <div key={index} className="flex items-center gap-x-2 ">
                  <span className="text-xs text-slate-500 dark:text-custom-gray-3">{field.label}:</span>
                  <span className="text-sm text-slate-900 dark:text-custom-gray-2">{field.value}</span>
                </div>
              );
            })}
          </div>

          <Link to={ROUTER_LINKS.SEARCH}>
            <Button variant="default" color="white" rightIcon={<SearchIcon textColor="text-slate-500" />}>
              ویرایش جستجو
            </Button>
          </Link>
        </div>
      </div>
    </DashboardTopBar>
  );
}

export default PanelTopBar;
