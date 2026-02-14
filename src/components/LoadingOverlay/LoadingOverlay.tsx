import { FC, memo } from "react";
import logo from "../../assets/images/logo.png";
import { ILoadingOverlayProps } from "./LoadingOverlay.type";

const LoadingOverlay: FC<ILoadingOverlayProps> = ({
  isLoading = true,
  message,
  size = 150,
}) => {
  if (!isLoading) return null;

  const sizeStr = `${size}px`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div
            className="absolute border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"
            style={{
              width: sizeStr,
              height: sizeStr,
              borderTopColor: "#3B82F6",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
          <div
            className="rounded-full flex items-center justify-center overflow-hidden"
            style={{ width: sizeStr, height: sizeStr }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain filter brightness-0 invert"
              loading="lazy"
            />
          </div>
        </div>
        {message && (
          <p className="text-white text-lg font-medium animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(LoadingOverlay);
