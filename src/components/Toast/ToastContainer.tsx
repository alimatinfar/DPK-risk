import { useSelector } from "react-redux";
import Toast from "./Toast";
import {
  IToastContainerProps,
  ToastPosition,
  ToastWithPosition,
} from "./ToastContainer.types";
import { FC } from "react";
import { RootState } from "../../store/store";

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  "bottom-right": "bottom-8 right-8",
};

const ToastContainer: FC<IToastContainerProps> = ({
  defaultPosition = "bottom-right",
}) => {
  const toasts = useSelector((state: RootState) => state.toast.toasts);
  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || defaultPosition;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastWithPosition[]>);

  return (
    <>
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div
          key={position}
          className={`fixed ${
            positionClasses[position as keyof typeof positionClasses]
          } z-50 space-y-2`}
        >
          {positionToasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ToastContainer;
