import { FC } from "react";
import { FiLoader } from "react-icons/fi";
import { IButtonProps } from "./Button.type";

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  size = "small",
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-400 text-white  transition-all duration-200 ease-in-out",
    secondary:
      "bg-primary-300 hover:bg-primary-50",
    danger: "bg-red-600 hover:bg-red-700",
    outline:
      "border border-indigo-600  hover:bg-indigo-50 dark:border-indigo-400  dark:hover:bg-gray-800",
    ghost:
      "text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-gray-800",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center rounded-md font-medium select-none
        transition-all duration-200 ease-in-out
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          disabled || loading
            ? "opacity-70 cursor-not-allowed"
            : "cursor-pointer"
        }
        ${className}
      `}
    >
      {children}
      {loading ? (
        <FiLoader className="animate-spin mr-2" />
      ) : startIcon ? (
        <span className="mx-3">{startIcon}</span>
      ) : null}

      {endIcon && !loading && <span className="mr-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
