import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import type {DashboardSideBarItemsListType} from "../../../layouts/DashboardLayout/index.types.ts";
import AddSquareIcon from "../../../components/svg/sidebar/AddSquareIcon.tsx";
import EmailPendingIcon from "../../../components/svg/sidebar/EmailPendingIcon.tsx";
import SettingIcon from "../../../components/svg/SettingIcon.tsx";

export const getAdminSideBarItems: () => DashboardSideBarItemsListType = function () {
  return [
    {
      label: "",
      children: [
        {
          icon: AddSquareIcon,
          label: "لیست اشخاص پرریسک",
          link: ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL,
        },
      ],
    },
    {
      label: "",
      children: [
        {
          icon: EmailPendingIcon,
          label: "سابقه استعلامات",
          link: ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES,
        },
      ],
    },
    {
      label: "",
      children: [
        {
          icon: SettingIcon,
          label: "مدیریت شاخص‌ها",
          link: ROUTER_LINKS.ADMIN_RISK_SETTING,
        },
      ],
    },
    {
      label: "",
      children: [
        {
          icon: SettingIcon,
          label: "گزارش ریسک گروهی",
          link: ROUTER_LINKS.ADMIN_RISK_GROUP_REPORT,
        },
      ],
    },
  ];
};
