import { FC, memo } from "react";
import { ILoaderSpinnerProps } from "./LoaderSpinner.type";

const LoaderSpinner: FC<ILoaderSpinnerProps> = ({
  size = 128,
  duration1 = 3,
  duration2 = 2,
  color = "blue-700",
  visible = true,
}) => {
  if (!visible) return null;

  const sizePx = `${size}px`;
  const borderWidth = Math.max(4, Math.floor(size / 32));
  const borderColor = `border-${color}`;

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative" style={{ width: sizePx, height: sizePx }}>
        <div
          className={`
            absolute inset-0 rounded-full 
            border-[${borderWidth}px] 
            border-gray-100/10 
            ${borderColor} 
            border-r-${color} 
            border-b-${color}
            animate-spin
          `}
          style={{
            animationDuration: `${duration1}s`,
            borderWidth: `${borderWidth}px`,
          }}
        />

        <div
          className={`
            absolute inset-0 rounded-full 
            border-[${borderWidth}px] 
            border-gray-100/10 
            ${borderColor} 
            border-t-${color}
            animate-spin
          `}
          style={{
            animationDuration: `${duration2}s`,
            animationDirection: "reverse",
            borderWidth: `${borderWidth}px`,
          }}
        />

        <div
          className={`
            absolute inset-0 
            bg-gradient-to-tr 
            from-cyan-400/10 
            via-transparent 
            to-cyan-400/5 
            animate-pulse 
            rounded-full 
            blur-sm
          `}
          style={{
            filter: "blur(8px)",
          }}
        />
      </div>
    </div>
  );
};

export default memo(LoaderSpinner);
