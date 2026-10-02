import { type MenuItemType } from "./MenuItem";
import useMenu from "./hooks/useMenu";
import MenuItem from "./MenuItem";
import SaderatLogoAndTypo from "../../svg/logo/SaderatLogoAndTypo";
import type {ReactNode} from "react";
import SaderatLogo from "../../svg/logo/SaderatLogo.tsx";

export type MenuProps = {
  items: MenuItemType[];
  isExpanded: boolean;
  activeLink?: string;
  onToggle?: (id: string | number, isOpen: boolean) => void;
  className?: string;
  bottomLogoRender?: (isExpanded: boolean) => ReactNode;
};

function Menu(
  {
    items, activeLink, onToggle, isExpanded, className, bottomLogoRender
  }: MenuProps
) {
  const { openItems, toggleItem } = useMenu({
    items,
    defaultOpenItems: [0, 1, 2],
    onToggle,
  });

  return (
    <div className={`flex flex-col   ${className}`}>
      <div className="pb-4 mb-4 border-b border-slate-200 dark:border-dark-5">
        <div className='w-full flex-center'>
          {isExpanded ? <SaderatLogoAndTypo width='220' /> : <SaderatLogo />}
        </div>

        {bottomLogoRender && bottomLogoRender(isExpanded)}
      </div>

      {items.map((item, index) => (
        <MenuItem
          key={item.id}
          item={item}
          isOpen={openItems[item.id] || false}
          onToggle={() => toggleItem(item.id)}
          activeLink={activeLink}
          isExpanded={isExpanded}
          isFirstItem={index === 0}
        />
      ))}
    </div>
  );
}

export default Menu;
