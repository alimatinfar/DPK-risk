import { useState, useEffect, useCallback, FC } from "react";
import { IInputFieldProps } from "./InputField.type";

const InputField: FC<IInputFieldProps> = ({
  label,
  labelRigth = false,
  type = "text",
  placeholder = "",
  value,
  handleInputChange,
  error = null,
  className = "",
  minLength,
  maxLength,
  regexPattern,
  separator,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const getNumericValue = useCallback(
    (value: string) => {
      return separator
        ? value.replace(new RegExp(`\\${separator}`, "g"), "")
        : value;
    },
    [separator]
  );

  const formatNumber = useCallback((numStr: string, sep?: string) => {
    if (!sep) return numStr;

    const num = numStr.replace(new RegExp(`[^0-9]`, "g"), "");
    if (!num) return "";

    return Number(num).toLocaleString("en-US").replace(/,/g, sep);
  }, []);

  useEffect(() => {
    const stringValue =
      value !== undefined && value !== null ? String(value) : "";
    if (type === "number") {
      const formattedValue = separator
        ? formatNumber(stringValue, separator)
        : stringValue;
      setInternalValue(formattedValue);
    } else {
      setInternalValue(stringValue);
    }
  }, [value, type, separator, formatNumber]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (type === "number") {
      if (separator) {
        const regex = new RegExp(`^[0-9\\${separator}]*$`);
        if (!regex.test(newValue)) return;
        const unformatted = getNumericValue(newValue);
        if (maxLength && unformatted.length > maxLength) {
          setIsValid(false);
          return;
        }
        newValue = formatNumber(unformatted, separator);
      } else {
        if (!/^[0-9]*$/.test(newValue)) return;
        if (maxLength && newValue.length > maxLength) {
          setIsValid(false);
          return;
        }
      }
    }

    if (regexPattern) {
      const regex = new RegExp(regexPattern);
      const isValidInput =
        newValue === "" ||
        regex.test(type === "number" ? getNumericValue(newValue) : newValue);
      setIsValid(isValidInput);
      if (!isValidInput) return;
    }

    const valueToCheckLength =
      type === "number" && separator ? getNumericValue(newValue) : newValue;

    if (minLength && valueToCheckLength.length < minLength) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setInternalValue(newValue);

    const valueToSend =
      type === "number" ? getNumericValue(newValue) : newValue;

    handleInputChange({
      ...e,
      target: {
        ...e.target,
        value:
          type === "number" && valueToSend ? Number(valueToSend) : valueToSend,
      },
    });
  };

  return (
    <div
      className={`mb-4 ${className} ${
        labelRigth && "flex items-center justify-center truncate gap-1"
      }`}
    >
      {label && (
        <label className="block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        type={type === "number" ? "text" : type}
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 m-1 border rounded-md bg-default text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error || !isValid
            ? "border-red-500 focus:ring-red-500"
            : "border-primary"
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {!isValid && !error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {minLength && maxLength
            ? `طول ورودی باید بین ${minLength} تا ${maxLength} کاراکتر باشد`
            : minLength
            ? `طول ورودی باید حداقل ${minLength} کاراکتر باشد`
            : maxLength
            ? `طول ورودی باید حداکثر ${maxLength} کاراکتر باشد`
            : "ورودی معتبر نیست"}
        </p>
      )}
    </div>
  );
};

export default InputField;
