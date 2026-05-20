import { getSideBarItems } from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";
import SaderatLogoAndTypo from "../../../components/svg/logo/SaderatLogoAndTypo.tsx";
import { useLocation } from "react-router";
import type { MenuItemType } from "../../../components/others/Menu/MenuItem.tsx";
import useSidebar, { SIDEBAR_WIDTHS } from "./hooks/useSidebar.tsx";
import Menu from "../../../components/others/Menu/Menu.tsx";

function PanelSideBar() {
  const location = useLocation();
  const { isExpanded } = useSidebar();
  const accordionItems: MenuItemType[] = getSideBarItems().map((mainItem, index) => ({
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
        h-dvh py-4 flex flex-col bg-gray-50 border-l border-gray-200
      `}
    >
      <div className="flex-1 overflow-auto scroll-thin">
        <Menu isExpanded={isExpanded} items={accordionItems} activeLink={location.pathname} />
      </div>
    </div>
  );
}

export default PanelSideBar;
