import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { INumberButtonProps } from "./NumberButton.type";
import { FC } from "react";

const NumberButton: FC<INumberButtonProps> = ({
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
}) => {
  const handleChange = (increment: number) => {
    setTimeout(() => {
      onChange(increment);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="p-3 flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        onClick={() => handleChange(1)}
        disabled={value >= max}
        aria-label="افزایش مقدار"
      >
        <FaChevronUp className="text-primary" />
      </button>

      <div className="flex items-center justify-center w-10 h-10 my-1 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-150">
        <span className="text-primary font-medium">
          {value.toString().padStart(2, "0")}
        </span>
      </div>

      <button
        className="p-3 flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        onClick={() => handleChange(-1)}
        disabled={value <= min}
        aria-label="کاهش مقدار"
      >
        <FaChevronDown className="text-primary" />
      </button>
    </div>
  );
};

export default NumberButton;
