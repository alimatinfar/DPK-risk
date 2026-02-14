import { FC } from "react";
import { IAccordionProps } from "./Accordion.type";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion: FC<IAccordionProps> = ({
    title,
    children,
    isOpen,
    onToggle,
    className = ""
}) => {
  return (
    <div
      className={`border-b border-primary-200 ${className}`}
    >
      <button
        className="w-full flex justify-between items-center p-2 text-left"
        onClick={onToggle}
      >
        <h3 className="font-normal">
          {title}
        </h3>
        {isOpen ? (
          <FiChevronUp className="w-4 h-4" />
        ) : (
          <FiChevronDown className="w-4 h-4" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;