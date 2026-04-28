import type {PanelSideBarItemsListType} from "./PanelLayout.types.ts";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";

export const PANEL_TOPBAR_HEIGHT = 'h-[138px]'
export const PANEL_CONTENT_PADDING_TOP = 'pt-[138px]'
export const PANEL_TOPBAR_WIDTH = 'w-[calc(100vw-256px)]'
export const PANEL_SIDEBAR_WIDTH = 'w-[256px]'
export const PANEL_CONTENT_PADDING_RIGHT = 'pr-[256px]'

export const SIDEBAR_ITEMS: PanelSideBarItemsListType = [
  {
    label: 'اطلاعات جامع مشتری',
    children: [
      {
        icon: SearchIcon,
        label: 'اطلاعات پایه',
        link: ROUTER_LINKS.PANEL_BASIC_INFORMATION,
      },
      {
        icon: SearchIcon,
        label: 'اطلاعات اقتصادی',
        link: ROUTER_LINKS.PANEL_ECONOMIC_INFORMATION,
      },
      {
        icon: SearchIcon,
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