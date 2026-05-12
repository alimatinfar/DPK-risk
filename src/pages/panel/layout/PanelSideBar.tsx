import { getSideBarItems } from "./PanelLayout.constances.ts";
import Z_INDEXES from "../../../constances/zIndexes.ts";
import SaderatLogoAndTypo from "../../../components/svg/logo/SaderatLogoAndTypo.tsx";
import { useLocation } from "react-router";
import type { MenuItemType } from "../../../components/others/Menu/MenuItem.tsx";
import SidebarToggle from "../../../components/svg/sidebar/SidebarToggle.tsx";
import useSidebar from "./hooks/useSidebar.tsx";
import Menu from "../../../components/others/Menu/Menu.tsx";

function PanelSideBar() {
  const location = useLocation();
  const { isExpanded, toggleSidebar, sidebarWidth } = useSidebar();
  const getDefaultOpenItems = () => {
    const openItems: number[] = [];
    getSideBarItems().forEach((mainItem, index) => {
      const hasActiveChild = mainItem.children?.some((child) => location.pathname.includes(child.link || ""));
      if (hasActiveChild) {
        openItems.push(index);
      }
    });
    return openItems;
  };

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
        ${sidebarWidth} ${Z_INDEXES.SIDEBAR} h-dvh 
        py-8 ${isExpanded ? "px-4" : "px-1.5"} flex flex-col bg-gray-50 border-l border-gray-200
      `}
    >
      <div className={`flex ${isExpanded ? "justify-between" : "justify-center"} items-center`}>
        {isExpanded && <SaderatLogoAndTypo />}
        <SidebarToggle isOpen={!isExpanded} onClick={toggleSidebar} />
      </div>

      <div className="flex-1 overflow-auto scroll-thin">
        <Menu
          isExpanded={isExpanded}
          items={accordionItems}
          activeLink={location.pathname}
          defaultOpenItems={getDefaultOpenItems()}
        />
      </div>
    </div>
  );
}

export default PanelSideBar;
