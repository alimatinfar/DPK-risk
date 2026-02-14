import { useState, useEffect, FC } from "react";
import { IRadioButtonProps, IRadioOption } from "./RadioButton.type";

const RadioButton: FC<IRadioButtonProps> = ({
  label,
  options,
  value,
  onChange,
  error = null,
  className = "",
  labelRight = false,
  required = false,
}) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (required && !value) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [value, required]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setIsValid(true);
    onChange({
      ...e,
      target: {
        ...e.target,
        value: newValue,
      },
    });
  };

  const normalizedOptions: IRadioOption[] = Array.isArray(options)
    ? options
    : [options];

  return (
    <div
      className={`mb-4 ${className} ${
        labelRight ? "flex items-center flex-col justify-center truncate" : ""
      }`}
    >
      {label && (
        <label className="w-full text-start text-sm font-medium text-primary">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={`flex w-full px-3 py-2 mx-1 border ${
          error ? "border-red-500" : "border-primary"
        } justify-evenly rounded-md flex-row gap-8`}
      >
        {normalizedOptions.map((option) => (
          <label
            key={option.value}
            className={`flex flex-row-reverse items-center gap-2 text-sm text-gray-700 dark:text-white cursor-pointer
              ${error || (!isValid && required) ? "text-red-500" : ""}`}
          >
            <input
              type="radio"
              name="test1"
               value={option && option.value}
              checked={value === option.value}
              onChange={handleChange}
              className={`w-4 h-4 text-indigo-600 border-primary focus:ring-indigo-500
                ${
                  error || (!isValid && required)
                    ? "border-red-500 focus:ring-red-500"
                    : ""
                }`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="w-full text-sm text-red-600">{error}</p>}
      {!error && !isValid && required && (
        <p className="w-full text-sm text-red-600">این فیلد اجباری است.</p>
      )}
    </div>
  );
};

export default RadioButton;
