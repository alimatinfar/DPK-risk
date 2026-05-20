import { type MenuItemType } from "./MenuItem";
import useMenu from "./hooks/useMenu";
import MenuItem from "./MenuItem";
import SaderatLogoAndTypo from "../../svg/logo/SaderatLogoAndTypo";

export type MenuProps = {
  items: MenuItemType[];
  isExpanded: boolean;
  activeLink?: string;
  onToggle?: (id: string | number, isOpen: boolean) => void;
  className?: string;
};

function Menu({ items, activeLink, onToggle, isExpanded, className }: MenuProps) {
  const { openItems, toggleItem } = useMenu({
    items,
    defaultOpenItems: [0, 1, 2],
    onToggle,
  });

  return (
    <div className={`flex flex-col   ${className}`}>
      <div className="pb-4">
        <SaderatLogoAndTypo />
      </div>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isOpen={openItems[item.id] || false}
          onToggle={() => toggleItem(item.id)}
          activeLink={activeLink}
          isExpanded={isExpanded}
        />
      ))}
    </div>
  );
}

export default Menu;
