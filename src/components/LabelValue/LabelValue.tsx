import React, { FC } from "react";
import { ILabelValueProps } from "./LabelValue.type";

const LabelValue: FC<ILabelValueProps> = ({
  label,
  value,
  labelClassName = "",
  valueClassName = "",
  containerClassName = "",
  separator
}) => {
  const formatValue = (val: React.ReactNode, sep: string) => {
    if (typeof val !== "number" && typeof val !== "string") return val;
    if (!sep) return val;

    const numStr = String(val).replace(/\D/g, "");
    if (!numStr) return val;

    return Number(numStr).toLocaleString().replace(/,/g, sep);
  };

  const formattedValue = separator ? formatValue(value, separator) : value;

  return (
    <div
      className={`flex items-baseline gap-1 text-sm py-2 px-4 justify-between rounded-lg ${containerClassName}`}
    >
      <span className={`font-medium ${labelClassName}`}>
        {label}:
      </span>
      <span className={`${valueClassName}`}>{formattedValue}</span>
    </div>
  );
};

export default LabelValue;
