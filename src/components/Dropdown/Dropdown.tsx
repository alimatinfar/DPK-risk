import { useState, useRef, useEffect, useCallback, useMemo, FC } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown, FaXmark } from "react-icons/fa6";
import { IDropdownProps, TDropdownValue } from "./Dropdown.type";

const Dropdown: FC<IDropdownProps> = ({
  label,
  labelRigth = false,
  options,
  selectedValue,
  selectedValues,
  onSelect,
  placeholder = "انتخاب کنید",
  className = "",
  multiple = false,
  maxSelections = null,
  error = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const buttonId = useMemo(
    () => `dropdown-${Math.random().toString(36).slice(2)}`,
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, searchable]);

  const filteredOptions = useMemo(() => {
    return searchTerm
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;
  }, [options, searchTerm]);

  const handleOptionClick = useCallback(
    (value: TDropdownValue) => {
      if (multiple) {
        const currentValues = selectedValues || [];
        const isSelected = currentValues.includes(value);
        let newSelectedValues;

        if (isSelected) {
          newSelectedValues = currentValues.filter((v) => v !== value);
        } else {
          if (maxSelections && currentValues.length >= maxSelections) {
            return;
          }
          newSelectedValues = [...currentValues, value];
        }

        onSelect(newSelectedValues);
      } else {
        onSelect(value);
        setIsOpen(false);
        setSearchTerm("");
      }
    },
    [multiple, selectedValues, maxSelections, onSelect]
  );

  const getDisplayText = useMemo(() => {
    if (multiple) {
      const currentValues = selectedValues || [];
      if (currentValues.length === 0) return placeholder;

      const selectedOptions = options.filter((opt) =>
        currentValues.includes(opt.value)
      );

      return selectedOptions.map((opt) => opt.label).join(", ");
    } else {
      const selectedOption = options.find((opt) => opt.value === selectedValue);
      return selectedOption ? selectedOption.label : placeholder;
    }
  }, [multiple, selectedValues, selectedValue, options, placeholder]);

  const isOptionSelected = useCallback(
    (value: TDropdownValue) => {
      if (multiple) {
        const currentValues = selectedValues || [];
        return currentValues.includes(value);
      } else {
        return selectedValue === value;
      }
    },
    [multiple, selectedValues, selectedValue]
  );

  const isOptionDisabled = useCallback(
    (value: TDropdownValue) => {
      if (!multiple || !maxSelections) return false;

      const currentValues = selectedValues || [];
      return (
        currentValues.length >= maxSelections && !currentValues.includes(value)
      );
    },
    [multiple, maxSelections, selectedValues]
  );

  const clearSelection = useCallback(
    (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      if (multiple) {
        onSelect([]);
      } else {
        onSelect(null);
      }
    },
    [multiple, onSelect]
  );

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const clearSearch = useCallback((e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setSearchTerm("");
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`relative mb-4 ${className} ${
        labelRigth && "flex items-center justify-center gap-1"
      }`}
      ref={dropdownRef}
    >
      {label && (
        <label
          htmlFor={buttonId}
          className="block text-sm font-medium"
        >
          {label}
          {multiple && maxSelections && (
            <span className="text-xs mr-2">
              (حداکثر {maxSelections} مورد)
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          id={buttonId}
          className={`w-full flex justify-between items-center px-3 py-2 rounded-md shadow-sm border m-1 ${
            error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          } outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            isOpen ? "ring-2 ring-indigo-500 border-indigo-500" : ""
          } bg-default`}
          onClick={toggleDropdown}
        >
          <span className="truncate text-sm text-right">{getDisplayText}</span>
          <div className="flex items-center">
            {((multiple && selectedValues && selectedValues.length > 0) ||
              (!multiple && selectedValue)) && (
              <FaXmark
                className="ml-2"
                onClick={clearSelection}
              />
            )}
            <FaChevronDown
              className={`mr-2 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full text-sm rounded-md shadow-lg bg-default border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
            {searchable && (
              <div className="sticky top-0 bg-default border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <FaSearch className="absolute right-3 top-2.5" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    name="search"
                    placeholder="جستجو..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-3 pr-10 py-2 outline-none rounded-md bg-primary-50 dark:text-white"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {searchTerm && (
                    <FaXmark
                      className="absolute left-3 top-2.5 cursor-pointer"
                      onClick={clearSearch}
                    />
                  )}
                </div>
              </div>
            )}

            <ul>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const selected = isOptionSelected(option.value);
                  const disabled = isOptionDisabled(option.value);

                  return (
                    <li
                      key={option.value}
                      className={`px-3 py-2 cursor-pointer hover:bg-[#d3d3d3] dark:hover:bg-[#303f55] flex items-center ${
                        selected ? "bg-primary-100" : ""
                      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() =>
                        !disabled && handleOptionClick(option.value)
                      }
                    >
                      {multiple && (
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 ml-2"
                          checked={selected}
                          readOnly
                        />
                      )}
                      <span className="text-right flex-1">{option.label}</span>
                    </li>
                  );
                })
              ) : (
                <li className="px-3 py-2 text-center">
                  موردی یافت نشد
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Dropdown;
