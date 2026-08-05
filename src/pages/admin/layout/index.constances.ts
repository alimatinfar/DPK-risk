import BasicInfoIcon from "../../../components/svg/sidebar/BasicInfoIcon.tsx";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import type {DashboardSideBarItemsListType} from "../../../layouts/DashboardLayout/index.types.ts";

export const getAdminSideBarItems: () => DashboardSideBarItemsListType = function () {
  return [
    {
      label: "",
      children: [
        {
          icon: BasicInfoIcon,
          label: "لیست اشخاص پرریسک",
          link: ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL,
        },
      ],
    },
  ];
};
