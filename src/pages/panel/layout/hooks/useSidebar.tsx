import { useState, useEffect } from "react";
import { PANEL_SIDEBAR_WIDTH_CLOSE, PANEL_SIDEBAR_WIDTH_OPEN } from "../PanelLayout.constances";

export const SIDEBAR_WIDTHS = {
  EXPANDED: PANEL_SIDEBAR_WIDTH_OPEN,
  COLLAPSED: PANEL_SIDEBAR_WIDTH_CLOSE,
} as const;

const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem("sidebar-expanded");
    return saved !== null ? saved === "true" : true;
  });

  const toggleSidebar = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebar-expanded", String(newState));
      return newState;
    });
  };

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", String(isExpanded));
  }, [isExpanded]);

  return {
    isExpanded,
    toggleSidebar,
    sidebarWidth: isExpanded ? SIDEBAR_WIDTHS.EXPANDED : SIDEBAR_WIDTHS.COLLAPSED,
  };
};

export default useSidebar;
