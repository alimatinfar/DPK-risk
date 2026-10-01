import Z_INDEXES from "../../constances/zIndexes.ts";
import { useLocation } from "react-router";
import type { MenuItemType } from "../../components/others/Menu/MenuItem.tsx";
import useDashboardSidebar, { SIDEBAR_WIDTHS } from "./hooks/useDashboardSidebar.tsx";
import Menu, {type MenuProps} from "../../components/others/Menu/Menu.tsx";
import type {DashboardSideBarItemsListType} from "./index.types.ts";
import type {ReactNode} from "react";


export type DashboardSideBarProps = {
  sideBarItems: DashboardSideBarItemsListType;
  endAdornment?: ReactNode;
} & Pick<MenuProps, 'bottomLogoRender'>

function DashboardSideBar(
  {
    sideBarItems, endAdornment, bottomLogoRender
  }: DashboardSideBarProps
) {
  const location = useLocation();
  const { isExpanded } = useDashboardSidebar();
  const accordionItems: MenuItemType[] = sideBarItems.map((mainItem, index) => ({
    id: index,
    label: mainItem.label,
    icon: mainItem.icon,
    children:
      mainItem.children?.map((child) => ({
        link: child.link || "",
        label: child.label,
        icon: child.icon,
      })) || [],
  }));

  return (
    <div
      className={` transition-all duration-200
        ${isExpanded ? SIDEBAR_WIDTHS.EXPANDED : SIDEBAR_WIDTHS.COLLAPSED} 
        ${isExpanded ? 'px-4' : 'px-1.5'} 
        ${Z_INDEXES.SIDEBAR} 
        h-dvh py-4 flex flex-col bg-slate-50 border-l border-slate-200
      `}
    >
      <div className="flex-1 overflow-auto scroll-thin">
        <Menu
          isExpanded={isExpanded} items={accordionItems} activeLink={location.pathname}
          bottomLogoRender={bottomLogoRender}
        />
      </div>

      {isExpanded ? endAdornment || null : null}
    </div>
  );
}

export default DashboardSideBar;
