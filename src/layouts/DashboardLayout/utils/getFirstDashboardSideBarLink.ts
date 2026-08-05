import type {DashboardSideBarProps} from "../DashboardSideBar.tsx";

function getFirstDashboardSideBarLink(
  {sideBarItems}: Pick<DashboardSideBarProps, 'sideBarItems'>
) {
  return sideBarItems?.[0]?.children?.[0]?.link || '#'
}

export default getFirstDashboardSideBarLink;
