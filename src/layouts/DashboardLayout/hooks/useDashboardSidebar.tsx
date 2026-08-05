import { useState, useEffect } from "react";
import Ls from "../../../utils/customLocalStorage.ts";
import LS_KEYS from "../../../constances/localStorageKeys.ts";
import {DASHBOARD_SIDEBAR_WIDTH_OPEN, DASHBOARD_SIDEBAR_WIDTH_CLOSE} from "../index.constances.ts";

export const SIDEBAR_WIDTHS = {
  EXPANDED: DASHBOARD_SIDEBAR_WIDTH_OPEN,
  COLLAPSED: DASHBOARD_SIDEBAR_WIDTH_CLOSE,
} as const;

const useDashboardSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = Ls.get(LS_KEYS.SIDEBAR_EXPANDED);
    return saved != null ? saved === "true" : true;
  });

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    Ls.add(LS_KEYS.SIDEBAR_EXPANDED, String(newState));
    window.dispatchEvent(new CustomEvent("sidebarToggle", { detail: { isExpanded: newState } }));
  };

  useEffect(() => {
    const handleSidebarToggle = (event: any) => {
      setIsExpanded(event.detail.isExpanded);
    };

    window.addEventListener("sidebarToggle", handleSidebarToggle);

    return () => {
      window.removeEventListener("sidebarToggle", handleSidebarToggle);
    };
  }, []);

  useEffect(() => {
    Ls.add(LS_KEYS.SIDEBAR_EXPANDED, String(isExpanded));
  }, [isExpanded]);

  return {
    isExpanded,
    toggleSidebar,
    sidebarWidth: isExpanded ? SIDEBAR_WIDTHS.EXPANDED : SIDEBAR_WIDTHS.COLLAPSED,
  };
};

export default useDashboardSidebar;
