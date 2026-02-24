import { useState, useEffect, FC } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setChildMenu, setMainMenu, setSubMenu } from "../../../store/slices/breadcrumbSlice";
import { getMenuItems } from "../../../utils/menuUtils";
import { ChildMenuItem, MenuItem, ISidebarProps, SubMenuItem } from "./Sidebar.type";

const ICON_SIZE = 25;

const Sidebar: FC<ISidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | number | null>(null);
  const [activeChildMenu, setActiveChildMenu] = useState<string | number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPathname = location.pathname.slice(1);

  useEffect(() => {
    getMenuItems().then(setMenuItems);
  }, []);

  const handleIconClickWhenClosed = (e: React.MouseEvent, item: MenuItem) => {
    if (!isOpen) {
      e.stopPropagation();
      toggleSidebar();
      setActiveMenu(item.id);
      return;
    }

    handleMenuInteraction(item);
  };

  const handleMenuInteraction = (item: MenuItem) => {
    if (item.disabled) return;

    const isSame = activeMenu === item.id;
    setActiveMenu(isSame ? null : item.id);
    setActiveSubMenu(null);
    setActiveChildMenu(null);

    dispatch(
      setMainMenu({
        title: item.title,
        path: item.submenu.length > 0 ? undefined : "#",
      }),
    );
  };

  const handleSubmenuClick = (subItem: SubMenuItem) => {
    if (subItem.disabled) return;

    const isSame = activeSubMenu === subItem.id;
    setActiveSubMenu(isSame ? null : subItem.id);
    if (isSame) setActiveChildMenu(null);

    dispatch(
      setSubMenu({
        title: subItem.title,
        path: subItem.to,
      }),
    );

    if (subItem.childrens.length === 0 && subItem.to) {
      navigate(subItem.to);
    }
  };

  const handleChildMenuClick = (childItem: ChildMenuItem, subItem: SubMenuItem) => {
    if (childItem.disabled) return;

    setActiveSubMenu(subItem.id);
    setActiveChildMenu(childItem.id);
    navigate(childItem.to);

    dispatch(
      setChildMenu({
        title: childItem.title,
        path: childItem.to,
      }),
    );
  };

  return (
    <div
      className={`transition-[width] duration-500 ease-in-out z-40 select-none
        bg-primary-50 shadow-lg h-full
        ${isOpen ? "w-60" : "w-12"}`}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 overflow-hidden">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.id;
            const hasSubmenu = item.submenu.length > 0;

            return (
              <div key={item.id} className="relative">
                <div
                  className={`flex items-center cursor-pointer transition-colors duration-200
                    ${isOpen ? "px-4 py-3" : "py-3 justify-center"}
                    ${
                      item.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : isActive
                          ? "bg-primary hover:bg-primary-400 text-white"
                          : "hover:bg-primary-100"
                    }`}
                  onClick={(e) => {
                    if (isOpen) {
                      handleMenuInteraction(item);
                    } else {
                      handleIconClickWhenClosed(e, item);
                    }
                  }}
                >
                  <div className="flex items-center justify-center w-8 flex-shrink-0">
                    {item.icon?.component && <item.icon.component size={ICON_SIZE} />}
                  </div>

                  {isOpen && <span className="mr-3 text-xs whitespace-nowrap ml-2">{item.title}</span>}
                </div>

                {isOpen && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${isActive ? "max-h-96" : "max-h-0"}`}
                  >
                    <div>
                      {item.submenu.map((subItem) => {
                        const subIsActive = activeSubMenu === subItem.id;

                        return (
                          <div key={subItem.id}>
                            <div
                              className={`flex items-center justify-between px-2 py-2.5 text-xs cursor-pointer whitespace-nowrap transition-all
                                ${
                                  subItem.disabled
                                    ? "opacity-50 cursor-not-allowed"
                                    : subIsActive || currentPathname === subItem.to
                                      ? "bg-primary-300"
                                      : "hover:bg-[#d3d3d3] hover:dark:bg-[#48556a]"
                                }`}
                              onClick={() => handleSubmenuClick(subItem)}
                            >
                              <span>{subItem.title}</span>
                              {subItem.childrens.length > 0 && <span>{subIsActive ? <TbMinus size={16} /> : <TbPlus size={16} />}</span>}
                            </div>

                            <div
                              className={`overflow-hidden transition-all duration-500
                                ${subIsActive ? "max-h-96" : "max-h-0"}`}
                            >
                              {subItem.childrens.map((childItem) => (
                                <div
                                  key={childItem.id}
                                  onClick={() => handleChildMenuClick(childItem, subItem)}
                                  className={`px-10 py-2 text-xs cursor-pointer whitespace-nowrap transition-all
                                    ${
                                      childItem.disabled
                                        ? "opacity-50 cursor-not-allowed"
                                        : activeChildMenu === childItem.id || currentPathname === childItem.to
                                          ? "bg-secondary-5"
                                          : "hover:bg-[#d3d3d3] hover:dark:bg-[#48556a]"
                                    }`}
                                >
                                  {childItem.title}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
