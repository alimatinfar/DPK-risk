import type { PanelSideBarItemsListType } from "./PanelLayout.types.ts";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import BasicInfoIcon from "../../../components/svg/sidebar/BasicInfoIcon.tsx";
import EconomicInfoIcon from "../../../components/svg/sidebar/EconomicInfoIcon.tsx";
import LegalInfoIcon from "../../../components/svg/sidebar/LegalInfoIcon.tsx";
import getActivePersonData from "../utils/getActivePersonData.ts";
import WithdrawalIcon from "../../../components/svg/sidebar/WithdrawalIcon.tsx";
import JointIcon from "../../../components/svg/sidebar/JointIcon.tsx";
import IndividualIcon from "../../../components/svg/sidebar/IndividualIcon.tsx";

export const PANEL_TOPBAR_HEIGHT = "h-[130px]";
export const PANEL_SIDEBAR_WIDTH_OPEN = "w-[256px]";
export const PANEL_SIDEBAR_WIDTH_CLOSE = "w-[64px]";
export const PANEL_CONTENT_PADDING_RIGHT = "pr-[256px]";

export const getSideBarItems: () => PanelSideBarItemsListType = function () {
  const { isLegal, activePersonData } = getActivePersonData();

  return [
    {
      label: "اطلاعات جامع مشتری",
      children: [
        {
          icon: BasicInfoIcon,
          label: "اطلاعات پایه",
          link: ROUTER_LINKS.PANEL_BASIC_INFORMATION,
        },
        {
          icon: EconomicInfoIcon,
          label: "اطلاعات اقتصادی",
          link: ROUTER_LINKS.PANEL_ECONOMIC_INFORMATION,
        },
        {
          icon: LegalInfoIcon,
          label: `اطلاعات نماینده قانونی${isLegal(activePersonData) ? "/مرتبطین" : ""}`,
          link: ROUTER_LINKS.PANEL_LEGAL_REPRESENTATIVE_INFORMATION,
        },
        {
          icon: SearchIcon,
          label: "سابقه استعلامات",
          link: ROUTER_LINKS.PANEL_INQUIRY_HISTORIES,
        },
      ],
    },
    {
      label: "اطلاعات بانکی مشتری",
      children: [
        {
          icon: IndividualIcon,
          label: "اطلاعات بانکي انفرادي",
          link: ROUTER_LINKS.PANEL_INDIVIDUAL_BANKING_INFORMATION,
        },
        {
          icon: JointIcon,
          label: "اطلاعات بانکي مشترک",
          link: ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION,
        },
        {
          icon: WithdrawalIcon,
          label: "اطلاعات بانکي حساب هاي داراي شرايط برداشت",
          link: ROUTER_LINKS.PANEL_BANKING_INFORMATION_FOR_ACCOUNTS_WITH_WITHDRAWAL_CONDITIONS,
        },
      ],
    },
    {
      label: "ريسک تعامل کاري",
      children: [
        {
          icon: SearchIcon,
          label: "ريسک مشتري",
          link: ROUTER_LINKS.PANEL_CUSTOMER_RISK,
        },
        {
          icon: SearchIcon,
          label: "ريسک سابقه خدمت",
          link: ROUTER_LINKS.PANEL_SERVICE_HISTORY_RISK,
        },
        {
          icon: SearchIcon,
          label: "ريسک منطقه",
          link: ROUTER_LINKS.PANEL_REGIONAL_RISK,
        },
      ],
    },
  ];
};
