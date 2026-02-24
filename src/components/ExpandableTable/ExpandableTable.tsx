import React, { useState, useEffect, useRef, FC } from "react";
import { FiChevronDown, FiChevronUp, FiMoreVertical } from "react-icons/fi";
import FilterTable from "../FilterTable/FilterTable";
import { IExpandableTableProps } from "./ExpandableTable.type";

const ExpandableTable: FC<IExpandableTableProps> = ({
  data = [],
  columns: originalColumns = [],
  filter = false,
  expandedRowTemplate,
  paginator = false,
  initialRowsPerPage = 5,
  className = "",
  tblClassName = "",
  showRowNumber = false,
}) => {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(
    filter ? originalColumns.slice(0, 6).map((col) => col.field) : originalColumns.map((col) => col.field),
  );
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [showRowsPerPageDropdown, setShowRowsPerPageDropdown] = useState(false);

  const [columnWidths, setColumnWidths] = useState<{ [field: string]: number }>({});

  const dropdownRef = useRef<HTMLDivElement>(null);
  const rowsPerPageRef = useRef<HTMLDivElement>(null);
  const resizeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
      if (rowsPerPageRef.current && !rowsPerPageRef.current.contains(event.target as Node)) {
        setShowRowsPerPageDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const columns = filter ? originalColumns.filter((col) => visibleColumns.includes(col.field)) : originalColumns;

  const filteredData = filter
    ? data.filter((row) =>
        Object.entries(filters).every(([field, value]) => {
          if (!value) return true;
          const rowValue = row[field]?.toString().toLowerCase() || "";
          return rowValue.includes(value.toLowerCase());
        }),
      )
    : data;

  const totalPages = Math.max(Math.ceil(filteredData.length / rowsPerPage), 1);
  const paginatedData = paginator ? filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : filteredData;

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
    setShowRowsPerPageDropdown(false);
  };

  const toggleRow = (rowId: string) => {
    setExpandedRowId((prev) => (prev === rowId ? null : rowId));
  };

  const toggleColumnVisibility = (field: string) => {
    if (!filter) return;
    setVisibleColumns((prev) => (prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]));
  };

  const handleFilterChange = (field: string, value: any) => {
    if (!filter) return;
    setFilters((prev) => ({ ...prev, [field]: value }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    if (!filter) return;
    setFilters({});
    setCurrentPage(1);
  };

  const startResize = (e: React.MouseEvent, field: string) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = columnWidths[field] || 120;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(60, startWidth - (moveEvent.clientX - startX));
      setColumnWidths((prev) => ({ ...prev, [field]: newWidth }));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const rowsPerPageOptions = [5, 10, 20, 30, 50];

  return (
    <div className={`bg-default shadow rounded-lg ${className}`}>
      <table className={`w-full table-auto border-collapse ${tblClassName}`}>
        <thead className="bg-primary-100 select-none">
          <tr className="text-sm">
            {filter && (
              <th className="w-12 font-normal p-1 relative rounded-tr-lg">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="hover:bg-primary-50 p-1 rounded-full transition-colors"
                  aria-label="فیلترها و تنظیمات"
                >
                  <FiMoreVertical className="w-3 h-3 mx-auto" />
                </button>

                {showMenu && (
                  <div ref={dropdownRef} className="absolute top-full right-0 z-20">
                    <FilterTable
                      originalColumns={originalColumns}
                      visibleColumns={visibleColumns}
                      toggleColumnVisibility={toggleColumnVisibility}
                      filters={filters}
                      handleFilterChange={handleFilterChange}
                      resetFilters={resetFilters}
                      onClose={() => setShowMenu(false)}
                    />
                  </div>
                )}
              </th>
            )}

            {expandedRowTemplate && !filter && <th className="w-12 font-normal p-3 rounded-tr-lg" />}

            {showRowNumber && <th className={`w-12 font-normal p-3 text-center tracking-wider ${!filter && "rounded-tr-lg"}`}>ردیف</th>}

            {columns.map((col, index) => (
              <th
                key={`${col.field}-${col.id ? col.id : index}`}
                className={`p-3 font-normal text-center tracking-wider relative group ${
                  index === columns.length - 1 ? "rounded-tl-lg" : ""
                }`}
                style={{
                  width: columnWidths[col.field] ? `${columnWidths[col.field]}px` : col.width || "auto",
                  minWidth: "80px",
                }}
              >
                {col.header}

                <div
                  className="absolute top-0 right-0 h-full w-3 cursor-col-resize bg-transparent group-hover:bg-indigo-400/30 transition-colors"
                  onMouseDown={(e) => startResize(e, col.field)}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-default divide-y divide-primary-50">
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <React.Fragment key={row.id || `row-${index}`}>
                <tr className={`${index % 2 === 0 ? "bg-secondary-3" : ""} hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors`}>
                  {!expandedRowTemplate && filter && <th className="w-12 p-3" />}

                  {expandedRowTemplate && (
                    <td className="p-3 text-center">
                      <button
                        onClick={() => toggleRow(row.id)}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        aria-label={expandedRowId === row.id ? "بستن ردیف" : "باز کردن ردیف"}
                      >
                        {expandedRowId === row.id ? (
                          <FiChevronUp className="w-5 h-5 mx-auto" />
                        ) : (
                          <FiChevronDown className="w-5 h-5 mx-auto" />
                        )}
                      </button>
                    </td>
                  )}

                  {showRowNumber && (
                    <td className="p-3 text-sm text-right text-gray-700 dark:text-gray-300">
                      {(currentPage - 1) * rowsPerPage + index + 1}
                    </td>
                  )}

                  {columns.map((col) => (
                    <td
                      key={`${row.id || index}-${col.field}`}
                      className={`p-3 text-sm text-center text-gray-700 dark:text-gray-300 ${col.bodyClassName || ""}`}
                      style={{
                        width: columnWidths[col.field] ? `${columnWidths[col.field]}px` : undefined,
                      }}
                    >
                      <div className="truncate">{col.body ? col.body(row) : (row[col.field] ?? "-")}</div>
                    </td>
                  ))}
                </tr>

                {expandedRowTemplate && expandedRowId === row.id && (
                  <tr className="bg-gray-50 dark:bg-gray-700/30">
                    <td
                      colSpan={columns.length + (showRowNumber ? 1 : 0) + (expandedRowTemplate ? 1 : 0) + (filter ? 1 : 0)}
                      className="p-0"
                    >
                      <div className="animate-fade-in overflow-hidden transition-all duration-300 max-h-96 overflow-y-auto p-3 border-t border-gray-200 dark:border-gray-700">
                        {expandedRowTemplate(row)}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (showRowNumber ? 1 : 0) + (expandedRowTemplate ? 1 : 0) + (filter ? 1 : 0)}
                className="p-6 text-center text-gray-500 dark:text-gray-400"
              >
                داده‌ای برای نمایش وجود ندارد
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {paginator && (
        <div className="px-3 py-2 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
              نمایش {(currentPage - 1) * rowsPerPage + 1} تا {Math.min(currentPage * rowsPerPage, filteredData.length)} از{" "}
              {filteredData.length} نتیجه
            </div>

            <div className="relative" ref={rowsPerPageRef}>
              <button
                onClick={() => setShowRowsPerPageDropdown(!showRowsPerPageDropdown)}
                className="flex items-center text-xs text-gray-700 dark:text-gray-300 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="تعداد ردیف‌های هر صفحه"
              >
                {rowsPerPage} ردیف در صفحه
                <FiChevronDown className={`mr-2 w-3 h-3 transition-transform ${showRowsPerPageDropdown ? "rotate-180" : ""}`} />
              </button>

              {showRowsPerPageDropdown && (
                <div className="absolute bottom-full mb-2 left-0 w-16 bg-default rounded-md shadow-lg z-10 border border-primary text-center text-xs">
                  {rowsPerPageOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleRowsPerPageChange(option)}
                      className={`block w-full py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        rowsPerPage === option ? "text-primary font-medium" : ""
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              قبلی
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              بعدی
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableTable;
