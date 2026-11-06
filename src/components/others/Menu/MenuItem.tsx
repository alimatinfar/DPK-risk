import React, { useEffect, useState } from "react";
import { type MenuChildType } from "./SubmenuItem";
import ArrowDown from "../../svg/sidebar/ArrowDown";
import SubmenuItem from "./SubmenuItem";

export type MenuItemProps = {
  item: MenuItemType;
  isOpen: boolean;
  onToggle: () => void;
  activeLink?: string;
  isExpanded?: boolean;
  isFirstItem?: boolean;
};

export type MenuItemType = {
  id: string | number;
  label: string;
  icon?: React.ComponentType<any>;
  children: MenuChildType[];
  initiallyOpen?: boolean;
  className?: string;
  titleClass?: string;
};

function MenuItem(
  {
    item, isOpen, onToggle, activeLink, isExpanded, isFirstItem
  }: MenuItemProps
) {
  const Icon = item.icon;
  const [showExpanded, setShowExpanded] = useState(isExpanded);
  const [showCollapsed, setShowCollapsed] = useState(!isExpanded);

  const shouldShowChildren = !isExpanded ? true : isOpen;

  useEffect(() => {
    if (isExpanded) {
      setShowCollapsed(false);
      const timer = setTimeout(() => {
        setShowExpanded(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setShowExpanded(false);
      const timer = setTimeout(() => {
        setShowCollapsed(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const expandedHeader = (
    <button
      key="expanded"
      onClick={onToggle}
      className={`
        w-full flex items-center justify-between p-2 mb-2 bg-slate-50 hover:bg-slate-100 dark:hover:bg-dark-2
        ${item.className || ""} ${isFirstItem ? '' : 'mt-2'} dark:bg-dark-1 duration-200
      `}
    >
      <div className="flex items-center gap-2 flex-1">
        {Icon && <Icon textColor={isOpen ? "text-accent" : ""} className="w-5 h-5 transition-colors duration-200" />}
        <span className={`text-sm text-slate-500 dark:text-custom-gray-2 font-medium ${item.titleClass || ""}`}>
          {item.label}
        </span>
      </div>
      <ArrowDown isOpen={isOpen} />
    </button>
  );

  // const collapsedHeader = (
  //   <button
  //     key="collapsed"
  //     onClick={onToggle}
  //     className={`
  //       w-full flex items-center justify-center p-2 bg-slate-50 hover:bg-slate-100
  //       ${item.className || ""}
  //     `}
  //     title={item.label}
  //   >
  //     {Icon && <Icon textColor={isOpen ? "text-accent" : ""} className="transition-colors duration-200" />}
  //   </button>
  // );

  return (
    <>
      {(showExpanded && item.label) && (
        <div className={`animate-in fade-in duration-200 ${isFirstItem ? '' : 'border-t border-slate-200 dark:border-dark-5'}`}>
          {expandedHeader}
        </div>
      )}

      {/*{(showCollapsed && item.label) && (*/}
      {/*  <div className={`animate-in fade-in duration-200 ${isFirstItem ? '' : 'border-t border-slate-200 pt-2'}`}>*/}
      {/*    /!*{collapsedHeader}*!/*/}
      {/*  </div>*/}
      {/*)}*/}

      <SubmenuItem
        isOpen={shouldShowChildren} children={item.children} activeLink={activeLink} isExpanded={isExpanded}
        removeLinkPaddingRight={!item.label}
      />
    </>
  );
}

export default MenuItem;
