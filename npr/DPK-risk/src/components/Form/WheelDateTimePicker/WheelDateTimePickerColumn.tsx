import React, {type ReactNode} from "react";
import useWheelDateTimePickerColumn from "./hooks/useWheelDateTimePickerColumn";


export type WheelDateTimePickerColumnProps = {
  items: number[];
  value: number;
  onChange: (value: number) => void;
  format?: (value: number) => ReactNode;
  itemHeight?: number;
}

function WheelDateTimePickerColumn(
  {
    items, value, onChange, format, itemHeight = 44,
  }: WheelDateTimePickerColumnProps
) {

  const {
    handleMouseDown, ref
  } = useWheelDateTimePickerColumn({
    value, items, itemHeight, onChange
  })

  return (
    <div
      className="relative w-20 select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
    >
      <div
        ref={ref}
        className="h-56 overflow-y-auto no-scrollbar"
      >
        <div style={{height: itemHeight * 2}}/>

        {items.map((item, i) => (
          <div
            key={i}
            // onClick={() => handleClick(i)}
            className={`h-11 flex items-center justify-center rounded-md duration-200
            ${item === value ? "text-gray-800 font-bold text-lg" : "text-gray-500 text-base"}`}
          >
            {format ? format(item) : item}
          </div>
        ))}

        <div style={{height: (itemHeight * 2) + 8}}/>
      </div>

      <div
        className="pointer-events-none absolute inset-0 m-auto w-full -translate-y-0.5! h-11 border-y border-white/20"/>
    </div>
  );
}


export default WheelDateTimePickerColumn;