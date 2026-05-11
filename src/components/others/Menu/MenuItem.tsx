import React from "react";
import { type MenuChildType } from "./SubmenuItem";
import ArrowDown from "../../svg/sidebar/ArrowDown";
import SubmenuItem from "./SubmenuItem";

export type MenuItemProps = {
  item: MenuItemType;
  isOpen: boolean;
  onToggle: () => void;
  activeLink?: string;
  variant?: "default" | "compact" | "large";
  theme?: "light" | "dark";
  isExpanded?: boolean;
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

function MenuItem({ item, isOpen, onToggle, activeLink, variant = "default", theme = "light", isExpanded }: MenuItemProps) {
  const Icon = item.icon;

  const sizes = {
    default: { header: "p-2", icon: "w-5 h-5", text: "text-sm" },
    compact: { header: "p-3", icon: "w-4 h-4", text: "text-xs" },
    large: { header: "p-4", icon: "w-6 h-6", text: "text-base" },
  };

  const themes = {
    light: {
      bg: "bg-gray-50",
      hover: "hover:bg-gray-100",
      active: "",
      text: "text-gray-700",
      textMuted: "text-gray-500",
    },
    dark: {
      bg: "bg-gray-800",
      hover: "hover:bg-gray-700",
      active: "",
      text: "text-gray-200",
      textMuted: "text-gray-400",
    },
  };

  const currentTheme = themes[theme];
  const currentSize = sizes[variant];

  const shouldShowChildren = !isExpanded ? true : isOpen;

  return (
    <div className={`w-full pt-4 border-t border-gray-200`}>
      {isExpanded && (
        <button
          onClick={onToggle}
          className={`
            w-full flex items-center justify-between 
            rounded-lg transition-all duration-200
            ${currentSize.header}
            ${isOpen ? currentTheme.active : `${currentTheme.hover} ${currentTheme.text}`}
            ${item.className || ""}
          `}
        >
          <div className="flex items-center gap-x-2 flex-1">
            {Icon && (
              <Icon
                textColor={isOpen ? "text-accent" : currentTheme.textMuted}
                className={`${currentSize.icon} transition-colors duration-200`}
              />
            )}
            <span className={`${currentSize.text} text-gray-500 font-medium ${item.titleClass || ""}`}>{item.label}</span>
          </div>
          <ArrowDown isOpen={isOpen} />
        </button>
      )}
      <SubmenuItem isOpen={shouldShowChildren} children={item.children} activeLink={activeLink} variant={variant} isExpanded={isExpanded} />
    </div>
  );
}

export default MenuItem;
