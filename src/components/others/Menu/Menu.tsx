import { type MenuItemType } from "./MenuItem";
import useMenu from "./hooks/useMenu";
import MenuItem from "./MenuItem";

export type MenuProps = {
  items: MenuItemType[];
  isExpanded: boolean;
  activeLink?: string;
  onToggle?: (id: string | number, isOpen: boolean) => void;
  defaultOpenItems?: (string | number)[];
  className?: string;
  variant?: "default" | "compact" | "large";
};

function Menu({ items, activeLink, onToggle, defaultOpenItems = [], className = "", variant = "default", isExpanded }: MenuProps) {
  const { openItems, toggleItem } = useMenu({
    items,
    defaultOpenItems,
    onToggle,
  });

  return (
    <div className={`flex flex-col gap-y-3 pt-4  ${className}`}>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isOpen={openItems[item.id] || false}
          onToggle={() => toggleItem(item.id)}
          activeLink={activeLink}
          variant={variant}
          isExpanded={isExpanded}
        />
      ))}
    </div>
  );
}

export default Menu;
