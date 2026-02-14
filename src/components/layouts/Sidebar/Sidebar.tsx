import { useState, useEffect, FC } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";
import { useUserTypeCheck } from "../../../hooks/useUserTypeCheck";
import { useDispatch } from "react-redux";
import {
  setChildMenu,
  setMainMenu,
  setSubMenu,
} from "../../../store/slices/breadcrumbSlice";
import useToast from "../../../hooks/useToast";
import { getMenuItems } from "../../../utils/menuUtils";
import {
  ChildMenuItem,
  MenuItem,
  ISidebarProps,
  SubMenuItem,
} from "./Sidebar.type";

const Sidebar: FC<ISidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | number | null>(
    null
  );
  const [activeChildMenu, setActiveChildMenu] = useState<
    string | number | null
  >(null);

  const location = useLocation();
  const currentPathname = location.pathname.slice(1);
  // const { checkUserType } = useUserTypeCheck();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
      getMenuItems().then((items)=>{setMenuItems(items)})}, []);

  const handleMenuInteraction = (item: MenuItem) => {
    if (item.disabled) return;
    setActiveMenu(activeMenu === item.id ? null : item.id);
    setActiveSubMenu(null);
    setActiveChildMenu(null);
    dispatch(
      setMainMenu({
        title: item.title,
        path: item.submenu.length > 0 ? undefined : "#"
      })
    );
  };

  const handleSubmenuClick = (subItem: SubMenuItem) => {
    if (subItem.disabled) return;
    setActiveSubMenu(activeSubMenu === subItem.id ? null : subItem.id);
    if (activeSubMenu === subItem.id) {
      setActiveChildMenu(null);
    }
    dispatch(
      setSubMenu({
        title: subItem.title,
        path: subItem.to,
      })
    );
    if (subItem.childrens.length === 0 && subItem.to) {
        navigate(subItem.to);
    }
  };

  const handleChildMenuClick = (
    childItem: ChildMenuItem,
    subItem: SubMenuItem
  ) => {
    if (childItem.disabled) return;
    setActiveSubMenu(subItem.id);
    setActiveChildMenu(childItem.id);
    // if (checkUserType(childItem.to)) {
      navigate(childItem.to);
      dispatch(
        setChildMenu({
          title: childItem.title,
          path: childItem.to,
        })
      );
    // } 
    // else {
    //   showToast({
    //     message: "مشتری را جستجو کنید",
    //     severity: "warning",
    //   });
    // }
  };

  return (
    <div
      className={`fixed top-16 pt-2 bottom-0 right-0 transition-[width] duration-500 ease-in-out z-40 select-none
        bg-primary-50 shadow-lg
        ${isOpen ? "w-60" : "w-12"}
      `}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 overflow-y-auto">
          {menuItems && menuItems.map((item) => (
            <div key={item.id} className="relative">
              <div
                className={`flex items-center p-4 cursor-pointer transition-width duration-500 select-none
                  ${isOpen ? "justify-start" : "justify-center"} ${
                  item.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : activeMenu === item.id
                    ? "bg-primary hover:bg-primary-400 text-white"
                    : "hover:bg-primary-100"
                }
                `}
                onClick={() => handleMenuInteraction(item)}
              >
                <span onClick={toggleSidebar}>
                  {item.icon?.component ? (
                    <item.icon.component size={item.icon.size} />
                  ) : null}
                </span>
                {isOpen && (
                  <span className="mr-3 text-xs whitespace-nowrap">
                    {item.title}
                  </span>
                )}
              </div>

              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${activeMenu === item.id ? "max-h-96" : "max-h-0"}
                `}
              >
                <div
                  className={`bg-default ${
                    isOpen
                      ? ""
                      : "absolute right-full top-0 mr-1 min-w-[160px] z-10 shadow-lg"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <div key={subItem.id}>
                      <div
                        className={`flex items-center p-3 select-none text-xs cursor-pointer whitespace-nowrap transition-all duration-500
                          
                          ${
                            subItem.disabled
                              ? "opacity-50 cursor-not-allowed"
                              : activeSubMenu === subItem.id ||
                                currentPathname === subItem.to
                              ? "bg-primary-300"
                              : "hover:bg-[#d3d3d3] hover:dark:bg-[#48556a]"
                          }`}
                        onClick={() => handleSubmenuClick(subItem)}
                      >
                        {subItem.title}
                        {subItem.childrens.length > 0 && (
                          <span className="mr-auto">
                            {activeSubMenu === subItem.id ? (
                              <TbMinus size={16} />
                            ) : (
                              <TbPlus size={16} />
                            )}
                          </span>
                        )}
                      </div>
                      <div
                        className={`
                          overflow-hidden
                          transition-all duration-500 ease-in-out
                          ${
                            activeSubMenu === subItem.id
                              ? "max-h-96"
                              : "max-h-0"
                          }
                        `}
                      >
                        {subItem.childrens.map((childItem) => (
                          <div
                            key={childItem.id}
                            onClick={() =>
                              handleChildMenuClick(childItem, subItem)
                            }
                            className={`block p-3 pr-8 text-xs cursor-pointer whitespace-nowrap transition-all select-none duration-500
                              ${
                                childItem.disabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : activeChildMenu === childItem.id ||
                                    currentPathname === childItem.to
                                  ? "bg-secondary-5"
                                  : "hover:bg-[#d3d3d3] hover:dark:bg-[#48556a]"
                              }`}
                          >
                            {childItem.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
