import type {PanelSideBarItemsListType} from "./PanelLayout.types.ts";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import BasicInfoIcon from "../../../components/svg/sidebar/BasicInfoIcon.tsx";
import EconomicInfoIcon from "../../../components/svg/sidebar/EconomicInfoIcon.tsx";
import LegalInfoIcon from "../../../components/svg/sidebar/LegalInfoIcon.tsx";

export const PANEL_TOPBAR_HEIGHT = 'h-[130px]'
export const PANEL_SIDEBAR_WIDTH = 'w-[256px]'
export const PANEL_CONTENT_PADDING_RIGHT = 'pr-[256px]'

export const SIDEBAR_ITEMS: PanelSideBarItemsListType = [
  {
    label: 'اطلاعات جامع مشتری',
    children: [
      {
        icon: BasicInfoIcon,
        label: 'اطلاعات پایه',
        link: ROUTER_LINKS.PANEL_BASIC_INFORMATION,
      },
      {
        icon: EconomicInfoIcon,
        label: 'اطلاعات اقتصادی',
        link: ROUTER_LINKS.PANEL_ECONOMIC_INFORMATION,
      },
      {
        icon: LegalInfoIcon,
        label: 'اطلاعات نماینده قانونی/مرتبطین',
        link: ROUTER_LINKS.PANEL_LEGAL_REPRESENTATIVE_INFORMATION,
      },
      {
        icon: SearchIcon,
        label: 'سابقه استعلامات',
        link: ROUTER_LINKS.PANEL_INQUIRY_HISTORIES,
      },
    ]
  },
  {
    label: 'اطلاعات بانکی مشتری',
    children: [
      {
        icon: SearchIcon,
        label: 'اطلاعات بانکي انفرادي',
        link: '#',
      },
      {
        icon: SearchIcon,
        label: 'اطلاعات بانکي مشترک',
        link: '#',
      },
      {
        icon: SearchIcon,
        label: 'اطلاعات بانکي حساب هاي داراي شرايط برداشت',
        link: '#',
      },
    ]
  },
  {
    label: 'ريسک تعامل کاري',
    children: [
      {
        icon: SearchIcon,
        label: 'ريسک مشتري',
        link: '#',
      },
      {
        icon: SearchIcon,
        label: 'ريسک سابقه خدمت',
        link: '#',
      },
      {
        icon: SearchIcon,
        label: 'ريسک منطقه',
        link: '#',
      },
    ]
  },
]