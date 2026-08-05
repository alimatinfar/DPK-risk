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
  });

  return (
    <DashboardTopBar title='سامانه مدیریت ریسک مشتریان' >
      <div className="flex-1 pt-4 px-3">
        <div className="h-15 rounded-lg flex items-center justify-between gap-x-4 border-y border-gray-200 bg-[#DDE8F2] px-2">
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              {getPersonIconByType(activePersonData.type)?.({})}

              <span className="text-gray-900 ">{activePersonData?.name}</span>
            </div>

            {fields.map((field, index) => {
              return (
                <div key={index} className="flex items-center gap-x-2 ">
                  <span className="text-xs text-gray-500">{field.label}:</span>
                  <span className="text-sm text-gray-900">{field.value}</span>
                </div>
              );
            })}
          </div>

          <Link to={ROUTER_LINKS.SEARCH}>
            <Button variant="default" color="white" rightIcon={<SearchIcon textColor="text-gray-500" />}>
              ویرایش جستجو
            </Button>
          </Link>
        </div>
      </div>
    </DashboardTopBar>
  );
}

export default PanelTopBar;
