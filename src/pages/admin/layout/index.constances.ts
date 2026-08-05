import type {PanelSideBarItemsListType} from "../../panel/layout/PanelLayout.types.ts";
import BasicInfoIcon from "../../../components/svg/sidebar/BasicInfoIcon.tsx";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";

export const getAdminSideBarItems: () => PanelSideBarItemsListType = function () {
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
