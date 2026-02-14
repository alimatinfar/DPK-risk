import { FC, useEffect, useRef, useState } from "react";
import Accordion from "../Accordion/Accordion";
import { FaFilePdf } from "react-icons/fa6";
import { RiFileExcel2Fill, RiFileWord2Fill } from "react-icons/ri";
import { IFilterTableProps } from "./FilterTable.type";

const FilterTable: FC<IFilterTableProps> = ({
  originalColumns,
  visibleColumns,
  toggleColumnVisibility,
  filters,
  handleFilterChange,
  resetFilters,
  onClose,
}) => {
  const [activeAccordion, setActiveAccordion] = useState<string |  null>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleAccordionToggle = (accordionName: string | null) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };

  return (
    <div
      ref={filterMenuRef}
      className="absolute right-0 mt-2 w-64 bg-default rounded-md shadow-lg z-[100] border border-gray-200 dark:border-gray-700"
    >
      <Accordion
        title="شخصی سازی ستون‌ها"
        isOpen={activeAccordion === "customize"}
        onToggle={() => handleAccordionToggle("customize")}
      >
        <div className="p-3 max-h-40 overflow-y-auto space-y-2">
          {originalColumns.map((col) => (
            <label key={col.field} className="flex items-center">
              <input
                type="checkbox"
                checked={visibleColumns.includes(col.field)}
                onChange={() => toggleColumnVisibility(col.field)}
                className="rounded text-indigo-600 dark:text-indigo-400"
              />
              <span className="mr-2 text-xs font-thin text-gray-700 dark:text-gray-300">
                {col.header}
              </span>
            </label>
          ))}
        </div>
      </Accordion>

      <Accordion
        title="فیلترها"
        isOpen={activeAccordion === "filter"}
        onToggle={() => handleAccordionToggle("filter")}
      >
        <div className="p-3 max-h-40 overflow-y-auto space-y-2">
          {originalColumns.map((col) => (
            <div key={`filter-${col.field}`} className="mb-2">
              <label className="block text-xs font-thin text-gray-600 dark:text-gray-400 mb-1">
                {col.header}
              </label>
              <input
                type="text"
                value={filters[col.field] || ""}
                onChange={(e) => handleFilterChange(col.field, e.target.value)}
                className="w-full px-2 py-1 text-xs font-thin border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                placeholder={`فیلتر ${col.header}`}
              />
            </div>
          ))}
        </div>
        <div className="p-3 flex justify-between mt-3">
          <button
            onClick={resetFilters}
            className="px-3 py-1 text-xs font-thin bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            پاک کردن
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs font-thin bg-primary-2 text-white rounded hover:bg-primary-1"
          >
            جستجو
          </button>
        </div>
      </Accordion>
      <Accordion
        title="خروجی گرفتن"
        isOpen={activeAccordion === "exports"}
        onToggle={() => handleAccordionToggle("exports")}
      >
        <div className="grid grid-cols-3 gap-4 p-3">
          <FaFilePdf className="text-3xl mx-auto text-red-400 cursor-pointer" />
          <RiFileExcel2Fill className="text-3xl mx-auto text-green-800 cursor-pointer" />
          <RiFileWord2Fill className="text-3xl mx-auto text-blue-600 cursor-pointer" />
        </div>
      </Accordion>
    </div>
  );
};

export default FilterTable;
