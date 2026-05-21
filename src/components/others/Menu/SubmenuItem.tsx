import { Link } from "react-router";
import { useEffect, useState } from "react";

export type MenuChildType = {
  link: string;
  label: string;
  icon?: React.ComponentType<any>;
  className?: string;
  titleClass?: string;
};

export type MenuContentProps = {
  isOpen: boolean;
  children: MenuChildType[];
  activeLink?: string;
  isExpanded?: boolean;
};

function SubmenuItem({ isOpen, children, activeLink, isExpanded }: MenuContentProps) {
  const [showExpanded, setShowExpanded] = useState(isExpanded);
  const [showCollapsed, setShowCollapsed] = useState(!isExpanded);

  const isChildActive = (childLink: string) => {
    return activeLink?.includes(childLink) || false;
  };

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

  if (!isOpen) return null;

  const expandedContent = (
    <div className="pr-4 gap-2 mb-2 flex flex-col border-gray-200">
      {children.map((child, childIndex) => {
        const isActive = isChildActive(child.link);
        const ChildIcon = child.icon;

        return (
          <Link
            key={childIndex}
            to={child.link}
            className={`
              flex items-center gap-2 rounded-bl-sm rounded-tl-sm
              text-right p-2 border-r-[3px]
              ${isActive ? "bg-accent border-[#9E90CF]" : "hover:bg-gray-100 border-transparent"}
              ${child.className || ""}
            `}
          >
            {ChildIcon && (
              <ChildIcon textColor={`${isActive ? "text-white" : "text-gray-500"} duration-200`} className="w-4 h-4 shrink-0" />
            )}
            <span className={`flex-1 duration-200 text-sm ${isActive ? "text-white" : "text-gray-700"} ${child.titleClass || ""}`}>
              {child.label}
            </span>
          </Link>
        );
      })}
    </div>
  );

  const collapsedContent = (
    <div className="px-1 gap-1 mb-4 flex flex-col border-gray-200">
      {children.map((child, childIndex) => {
        const isActive = isChildActive(child.link);
        const ChildIcon = child.icon;

        return (
          <Link
            key={childIndex}
            to={child.link}
            className={`
              flex items-center justify-center rounded-bl-sm rounded-tl-sm w-9 h-9 p-2
              ${isActive ? "bg-accent border-r-[3px] border-[#9E90CF]" : "hover:bg-gray-100"}
              ${child.className || ""}
            `}
            title={child.label}
          >
            {ChildIcon && (
              <ChildIcon textColor={`${isActive ? "text-white" : "text-gray-500"} duration-200`} className="w-5 h-5 shrink-0" />
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {showExpanded && <div className="animate-in fade-in duration-200">{expandedContent}</div>}
      {showCollapsed && <div className="animate-in fade-in duration-200">{collapsedContent}</div>}
    </>
  );
}

export default SubmenuItem;
