import { useState, useCallback } from "react";
import type { MenuItemType } from "../MenuItem";
export type UseMenuProps = {
  items: MenuItemType[];
  defaultOpenItems?: (string | number)[];
  onToggle?: (id: string | number, isOpen: boolean) => void;
};

export type useMenuReturn = {
  openItems: Record<string | number, boolean>;
  toggleItem: (id: string | number) => void;
  isItemOpen: (id: string | number) => boolean;
  setOpenItems: React.Dispatch<React.SetStateAction<Record<string | number, boolean>>>;
};
function useMenu({ items, defaultOpenItems = [], onToggle }: UseMenuProps): useMenuReturn {
  const [openItems, setOpenItems] = useState<Record<string | number, boolean>>(() => {
    const initialOpenState: Record<string | number, boolean> = {};

    defaultOpenItems.forEach((id) => {
      initialOpenState[id] = true;
    });

    items.forEach((item) => {
      if (item.initiallyOpen && !initialOpenState[item.id]) {
        initialOpenState[item.id] = true;
      }
    });

    return initialOpenState;
  });

  const toggleItem = useCallback(
    (id: string | number) => {
      setOpenItems((prev) => {
        const newState = !prev[id];
        onToggle?.(id, newState);
        return { ...prev, [id]: newState };
      });
    },
    [onToggle],
  );

  const isItemOpen = useCallback(
    (id: string | number) => {
      return openItems[id] || false;
    },
    [openItems],
  );

  return {
    openItems,
    toggleItem,
    isItemOpen,
    setOpenItems,
  };
}

export default useMenu;
