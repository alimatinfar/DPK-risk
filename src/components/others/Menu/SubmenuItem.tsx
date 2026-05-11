import { Link } from "react-router";
import DisplayWithAnimation from "../DisplayWithAnimation/DisplayWithAnimation";

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
  childClassName?: string;
  variant?: "default" | "compact" | "large";
  isExpanded?: boolean;
};

function SubmenuItem({ isOpen, children, activeLink, childClassName, variant = "default", isExpanded }: MenuContentProps) {
  const sizes = {
    default: { child: "p-2", icon: "w-4 h-4", text: "text-sm" },
    compact: { child: "p-3", icon: "w-5 h-5", text: "text-sm" },
    large: { child: "p-4", icon: "w-6 h-6", text: "text-base" },
  };

  const isChildActive = (childLink: string) => {
    return activeLink?.includes(childLink) || false;
  };

  const content = (
    <div className={`${isExpanded ? "pr-4 gap-2" : "px-1 gap-1"} flex flex-col border-gray-200`}>
      {children.map((child, childIndex) => {
        const isActive = isChildActive(child.link);
        const ChildIcon = child.icon;

        return (
          <Link
            key={childIndex}
            to={child.link}
            className={`
              flex items-center gap-2 rounded-bl-sm rounded-tl-sm
              text-right  transition-all duration-200
              ${!isExpanded && "justify-center w-9 h-9"}
              ${sizes[variant].child}
              ${isActive ? "bg-accent border-r-[3px] border-[#9E90CF]" : "hover:bg-gray-100"}
              ${child.className || ""}
            `}
          >
            {ChildIcon && (
              <ChildIcon
                textColor={`${isActive ? "text-white" : "text-gray-500"} duration-200`}
                className={`${isExpanded ? "w-4 h-4" : "w-5 h-5"} shrink-0`}
              />
            )}
            {isExpanded && (
              <span
                className={`flex-1 duration-200 ${sizes[variant].text} ${isActive ? "text-white" : "text-gray-700"} ${child.titleClass || ""}`}
              >
                {child.label}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <DisplayWithAnimation show={isOpen} expandMode={true} animationClass="" className="w-full">
      {content}
    </DisplayWithAnimation>
  );
}

export default SubmenuItem;
